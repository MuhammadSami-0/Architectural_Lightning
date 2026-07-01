"use client";

import { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree, ThreeEvent } from '@react-three/fiber';
import { Environment, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const InteractiveShape = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const [scale, setScale] = useState(1.8);
  const isDraggingRef = useRef(false);
  const lastX = useRef(0);
  const dragVelocity = useRef(0);

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    (e.target as any).setPointerCapture(e.pointerId);
    isDraggingRef.current = true;
    lastX.current = e.clientX;
    dragVelocity.current = 0;
    document.body.style.cursor = 'grabbing';
  };

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (isDraggingRef.current) {
      e.stopPropagation();
      const deltaX = e.clientX - lastX.current;
      lastX.current = e.clientX;
      // Capped velocity for gentle, smooth spinning
      dragVelocity.current = Math.min(Math.max(deltaX * 0.004, -0.1), 0.1);
    }
  };

  const handlePointerUp = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    try {
      (e.target as any).releasePointerCapture(e.pointerId);
    } catch (err) {} // safely ignore if capture was already lost
    isDraggingRef.current = false;
    document.body.style.cursor = 'auto';
  };

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (!isDraggingRef.current) document.body.style.cursor = 'grab';
  };

  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    if (!isDraggingRef.current) document.body.style.cursor = 'auto';
  };

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth < 768 ? 1.0 : 1.5); // Slightly smaller scale for bulb
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const glowTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const context = canvas.getContext('2d');
    if (context) {
      const gradient = context.createRadialGradient(256, 256, 0, 256, 256, 256);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); // Sharp white core
      gradient.addColorStop(0.05, 'rgba(255, 240, 180, 0.9)'); // Intense tight center
      gradient.addColorStop(0.15, 'rgba(242, 202, 80, 0.6)'); // Golden falloff
      gradient.addColorStop(0.3, 'rgba(212, 175, 55, 0.2)'); // Soft ambient
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); // Must fade to 0 alpha
      context.fillStyle = gradient;
      context.fillRect(0, 0, 512, 512);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      if (isDraggingRef.current) {
        groupRef.current.rotation.y += dragVelocity.current;
        // Rapidly decay velocity while dragging so if the mouse stops, the bulb stops
        dragVelocity.current *= 0.5;
      } else {
        // Apply momentum (inertia) after releasing
        groupRef.current.rotation.y += dragVelocity.current;
        dragVelocity.current *= 0.95; 
      }

      // Base rotation added constantly
      groupRef.current.rotation.y += delta * 0.4;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;

      // Positioning without mouse tracking (floating statically)
      // We use viewport size to detect mobile layout, avoiding window.innerWidth in the render loop
      const isMobile = viewport.width < 5; // viewport.width is in 3D units, ~5 is typical mobile breakpoint at this distance
      const offsetX = isMobile ? 0 : 3.0; // Shift to the right on desktop
      const offsetY = 0; // Keep perfectly centered vertically on all screens

      // Smoothly move to fixed position (handles window resize smoothly)
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, offsetX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, offsetY, 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
      <group ref={groupRef} scale={scale}>
        {/* Invisible Hit Mesh for interaction */}
        <mesh 
          position={[0, 0.2, 0]} 
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        >
          <sphereGeometry args={[1.5, 16, 16]} />
          <meshBasicMaterial transparent opacity={0} depthWrite={false} />
        </mesh>

        {/* Glass Bulb Body - Standard Material for massive performance while still looking like glass */}
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial 
            transparent
            opacity={0.1}
            roughness={0}
            metalness={0.9}
            color="#ffffff"
            envMapIntensity={4}
          />
        </mesh>
        
        {/* Inner Glass Glow (Makes the whole bulb feel illuminated from within) */}
        <mesh position={[0, 0.4, 0]}>
          <sphereGeometry args={[0.95, 32, 32]} />
          <meshBasicMaterial 
            color="#f2ca50" 
            transparent 
            opacity={0.08} 
            blending={THREE.AdditiveBlending} 
            depthWrite={false}
          />
        </mesh>

        {/* Inner Glowing Filament */}
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.8, 16]} />
          <meshBasicMaterial 
            color="#fff8d6"
          />
        </mesh>
        
        {/* Core Glow (Cheap Bloom Sprite) */}
        <pointLight position={[0, 0.2, 0]} color="#f2ca50" intensity={2} distance={8} />
        {glowTexture && (
          <>
            {/* Inner intense glow */}
            <sprite position={[0, 0.3, 0]} scale={[2, 2, 1]} renderOrder={99}>
              <spriteMaterial 
                map={glowTexture} 
                blending={THREE.AdditiveBlending} 
                transparent 
                depthWrite={false} 
                opacity={0.9}
              />
            </sprite>
            {/* Outer ambient glow */}
            <sprite position={[0, 0.4, -0.5]} scale={[4.5, 4.5, 1]} renderOrder={-1}>
              <spriteMaterial 
                map={glowTexture} 
                blending={THREE.AdditiveBlending} 
                transparent 
                depthWrite={false} 
                opacity={0.6}
              />
            </sprite>
          </>
        )}
        
        {/* Filament Supports */}
        <mesh position={[-0.2, -0.1, 0]} rotation={[0, 0, 0.3]}>
          <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
          <meshStandardMaterial color="#555" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.2, -0.1, 0]} rotation={[0, 0, -0.3]}>
          <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
          <meshStandardMaterial color="#555" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Bulb Base */}
        <mesh position={[0, -0.8, 0]}>
          <cylinderGeometry args={[0.4, 0.35, 0.6, 32]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.9} roughness={0.4} />
        </mesh>
        
        {/* Base Details (Rings) */}
        <mesh position={[0, -0.7, 0]}>
          <torusGeometry args={[0.41, 0.03, 16, 32]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.9} roughness={0.4} />
        </mesh>
        <mesh position={[0, -0.9, 0]}>
          <torusGeometry args={[0.38, 0.03, 16, 32]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.9} roughness={0.4} />
        </mesh>
        
        {/* Base Bottom Contact */}
        <mesh position={[0, -1.15, 0]}>
          <sphereGeometry args={[0.15, 32, 16]} />
          <meshStandardMaterial color="#111" metalness={0.8} roughness={0.8} />
        </mesh>
      </group>
    </Float>
  );
};

const Background3D = () => {
  return (
    <div className="absolute inset-0 z-0" style={{ touchAction: 'pan-y' }}>
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }} 
        style={{ touchAction: 'pan-y' }}
        gl={{ antialias: false, alpha: true, powerPreference: "default", failIfMajorPerformanceCaveat: false }} 
        dpr={[1, 1]}
        onCreated={({ gl }) => {
          gl.getContext().canvas.addEventListener('webglcontextlost', function(event) {
            event.preventDefault();
            console.warn('WebGL context lost. Please refresh the page if 3D elements disappear.');
          }, false);
        }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffe088" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#d4af37" />
        
        <InteractiveShape />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Background3D;
