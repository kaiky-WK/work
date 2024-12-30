import React, { useRef } from 'react';
import { Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { createMetalMaterial } from '../materials/MaterialLibrary';

interface ProductionLineProps {
  position: [number, number, number];
  count: number;
  spacing: number;
  status?: 'normal' | 'warning' | 'error';
}

export const ProductionLine: React.FC<ProductionLineProps> = ({
  position,
  count,
  spacing,
  status = 'normal'
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const material = createMetalMaterial('#666666');

  useFrame(({ clock }) => {
    if (!groupRef.current || status === 'normal') return;
    
    const intensity = status === 'warning' ? 0.02 : 0.04;
    const speed = status === 'warning' ? 2 : 3;
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * speed) * intensity;
  });

  return (
    <group ref={groupRef} position={position}>
      {Array.from({ length: count }).map((_, index) => (
        <Box
          key={index}
          args={[2, 0.5, 1]}
          position={[index * spacing, 0, 0]}
          castShadow
          receiveShadow
        >
          <primitive object={material} attach="material" />
        </Box>
      ))}
    </group>
  );
};