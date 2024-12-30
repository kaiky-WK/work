import React from 'react';
import { Box, Cylinder } from '@react-three/drei';
import { useModelAnimation } from '../hooks/useModelAnimation';
import { BuildingProps } from '../types';

export const MachineUnit: React.FC<BuildingProps> = ({
  position = [0, 0, 0],
  status = 'normal'
}) => {
  const groupRef = useModelAnimation(status);

  return (
    <group ref={groupRef} position={position}>
      {/* Base */}
      <Box args={[2, 0.2, 2]} position={[0, 0.1, 0]}>
        <meshStandardMaterial color="#475569" metalness={0.7} roughness={0.3} />
      </Box>

      {/* Main Body */}
      <Box args={[1.8, 1.5, 1.8]} position={[0, 0.95, 0]}>
        <meshStandardMaterial color="#3b82f6" metalness={0.5} roughness={0.5} />
      </Box>

      {/* Top Unit */}
      <Cylinder args={[0.4, 0.5, 0.8]} position={[0, 1.9, 0]}>
        <meshStandardMaterial color="#60a5fa" metalness={0.6} roughness={0.4} />
      </Cylinder>

      {/* Control Panel */}
      <Box args={[0.8, 0.6, 0.1]} position={[0, 1.2, 0.95]}>
        <meshStandardMaterial 
          color="#0ea5e9" 
          emissive="#0ea5e9"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Box>
    </group>
  );
};