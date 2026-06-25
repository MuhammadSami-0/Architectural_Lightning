"use client";

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, ContactShadows } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const InteractiveShape = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();
  const [scale, setScale] = useState(1.8);

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

      // Mouse interaction: shape gently tilts towards mouse
      const isMobile = window.innerWidth < 768;
      const offsetX = isMobile ? 0 : 3.0; // Shift to the right on desktop
      const offsetY = 0; // Keep perfectly centered vertically on all screens

      const targetX = (mouse.x * viewport.width) / 10 + offsetX;
      const targetY = (mouse.y * viewport.height) / 10 + offsetY;
      
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
      <group ref={groupRef} scale={scale}>
        {/* Glass Bulb Body - Using native material for massive performance boost */}
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[1, 64, 64]} />
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
            emissiveIntensity={4}
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
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffe088" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#d4af37" />
        
        <InteractiveShape />
        
        <Environment preset="city" />

        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={2.5} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Background3D;
