"use client";

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const InteractiveShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();
  const [scale, setScale] = useState(1.8);

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth < 768 ? 1.0 : 1.8);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;

      // Mouse interaction: shape gently tilts towards mouse
      const targetX = (mouse.x * viewport.width) / 10;
      const targetY = (mouse.y * viewport.height) / 10;
      
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={scale}>
        {/* Using a torus knot for a more complex, luxurious shape */}
        <torusKnotGeometry args={[1, 0.3, 64, 16]} />
        <meshPhysicalMaterial 
          color="#f2ca50"
          emissive="#d4af37"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
        />
        {/* Soft glowing halo behind the object */}
        <mesh scale={2.5} position={[0, 0, -1]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#f2ca50" transparent opacity={0.15} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      </mesh>
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
        {/* Adds a sophisticated shadow below the object */}
        <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#d4af37" resolution={256} frames={1} />
      </Canvas>
    </div>
  );
};

export default Background3D;
