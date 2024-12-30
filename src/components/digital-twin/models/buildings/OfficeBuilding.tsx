import React from 'react';
import { Box } from '@react-three/drei';
import { BuildingProps } from '../types';

export const OfficeBuilding: React.FC<BuildingProps> = ({ 
  position = [0, 0, 0],
  scale = [1, 1, 1],
  color = '#34495E'
}) => {
  return (
    <group position={position}>
      {/* Main Structure */}
      <Box 
        args={[1, 1, 1]} 
        scale={scale}
        castShadow 
        receiveShadow
      >
        <meshStandardMaterial 
          color={color}
          roughness={0.7}
          metalness={0.3}
        />
      </Box>

      {/* Windows */}
      <Box
        args={[scale[0] * 0.8, scale[1] * 0.6, 0.1]}
        position={[0, scale[1] * 0.2, scale[2] * 0.5 + 0.1]}
      >
        <meshPhysicalMaterial
          color="#88ccff"
          roughness={0.1}
          transmission={0.9}
          thickness={0.1}
        />
      </Box>
    </group>
  );
};