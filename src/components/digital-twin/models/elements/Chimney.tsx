import React from 'react';
import { Cylinder, Sphere } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

interface ChimneyProps {
  position: [number, number, number];
}

export const Chimney: React.FC<ChimneyProps> = ({ position }) => {
  const smokeRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (smokeRef.current) {
      smokeRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1 + 1;
      smokeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position}>
      <Cylinder args={[0.2, 0.3, 1.5, 8]}>
        <meshStandardMaterial 
          color="#666" 
          roughness={0.6}
          metalness={0.4} 
        />
      </Cylinder>
      <group ref={smokeRef}>
        <Sphere args={[0.25, 8, 8]} position={[0, 1, 0]}>
          <meshStandardMaterial
            color="#999"
            transparent
            opacity={0.3}
            roughness={0.2}
          />
        </Sphere>
      </group>
    </group>
  );
};