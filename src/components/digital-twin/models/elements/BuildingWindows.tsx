import React from 'react';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

interface BuildingWindowsProps {
  count: number;
  spacing: number;
  size: number;
  offset: [number, number, number];
}

export const BuildingWindows: React.FC<BuildingWindowsProps> = ({
  count,
  spacing,
  size,
  offset,
}) => {
  const windowColor = new THREE.Color('#88ccff');

  return (
    <>
      {[...Array(count)].map((_, i) => (
        <Box
          key={i}
          args={[size, size, 0.1]}
          position={[
            offset[0],
            offset[1] + i * spacing,
            offset[2],
          ]}
        >
          <meshStandardMaterial
            color={windowColor}
            emissive={windowColor}
            emissiveIntensity={0.5}
            transparent
            opacity={0.9}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
      ))}
    </>
  );
};