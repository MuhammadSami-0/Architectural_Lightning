"use client";

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree, ThreeEvent } from '@react-three/fiber';
import { Environment, Float, ContactShadows } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const InteractiveShape = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const [scale, setScale] = useState(1.8);
  const [isDragging, setIsDragging] = useState(false);
  const lastX = useRef(0);

  useEffect(() => {
    const handleGlobalPointerMove = (e: PointerEvent) => {
      if (isDragging && groupRef.current) {
        const deltaX = e.clientX - lastX.current;
        lastX.current = e.clientX;
        groupRef.current.rotation.y += deltaX * 0.01;
      }
    };

    const handleGlobalPointerUp = () => {
      setIsDragging(false);
      document.body.style.cursor = 'auto';
    };

    if (isDragging) {
      window.addEventListener('pointermove', handleGlobalPointerMove);
      window.addEventListener('pointerup', handleGlobalPointerUp);
    }

    return () => {
      window.removeEventListener('pointermove', handleGlobalPointerMove);
      window.removeEventListener('pointerup', handleGlobalPointerUp);
    };
  }, [isDragging]);

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsDragging(true);
    lastX.current = e.clientX;
    document.body.style.cursor = 'grabbing';
  };

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (!isDragging) document.body.style.cursor = 'grab';
  };

  const handlePointerOut = () => {
    if (!isDragging) document.body.style.cursor = 'auto';
  };

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth < 768 ? 1.0 : 1.5); // Slightly smaller scale for bulb
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Base rotation (mostly just spinning slowly on Y for a bulb)
      groupRef.current.rotation.y += delta * 0.15;
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
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        >
          <sphereGeometry args={[1.5, 16, 16]} />
          <meshBasicMaterial visible={false} />
        </mesh>

        {/* Glass Bulb Body - Using native material and lower segments for massive performance boost */}
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhysicalMaterial 
            transparent
            opacity={0.3}
            roughness={0.05}
            metalness={0.1}
            transmission={0.9} 
            ior={1.5}
            thickness={0.5}
            envMapIntensity={2}
            color="#ffffff"
          />
        </mesh>

        {/* Inner Glowing Filament */}
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.8, 16]} />
          <meshPhysicalMaterial 
            color="#f2ca50"
            emissive="#f2ca50"
            emissiveIntensity={1}
            toneMapped={false}
          />
        </mesh>
        
        {/* Mobile-Safe Fallback Glow & Light */}
        <pointLight position={[0, 0.2, 0]} color="#f2ca50" intensity={1} distance={3} />
        <mesh position={[0, 0.2, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshBasicMaterial 
            color="#f2ca50" 
            transparent 
            opacity={0.05} 
            blending={THREE.AdditiveBlending} 
            depthWrite={false}
          />
        </mesh>
        
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
    <div className="absolute inset-0 z-0 pointer-events-auto mix-blend-screen">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }} 
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

        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={2.5} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Background3D;
