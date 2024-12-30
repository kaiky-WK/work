import React from 'react';
import { Box } from '@react-three/drei';
import { useModelAnimation } from '../hooks/useModelAnimation';

interface MainFactoryProps {
  position: [number, number, number];
}

export const MainFactory: React.FC<MainFactoryProps> = ({ position }) => {
  const groupRef = useModelAnimation('normal');

  return (
    <group ref={groupRef} position={position}>
      {/* Main Building */}
      <Box args={[10, 5, 15]} position={[0, 2.5, 0]}>
        <meshStandardMaterial 
          color="#4f46e5"
          roughness={0.7}
          metalness={0.3}
        />
      </Box>
      
      {/* Roof */}
      <Box args={[11, 0.5, 16]} position={[0, 5.25, 0]}>
        <meshStandardMaterial 
          color="#1e1b4b"
          roughness={0.8}
        />
      </Box>
    </group>
  );
};