import React from 'react';
import { Box } from '@react-three/drei';

interface ControlPanelProps {
  position: [number, number, number];
}

export const ControlPanel: React.FC<ControlPanelProps> = ({ position }) => {
  return (
    <group position={position}>
      {/* Panel Base */}
      <Box args={[2, 3, 0.5]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color="#334155" metalness={0.5} roughness={0.5} />
      </Box>
      
      {/* Screen */}
      <Box args={[1.6, 1.2, 0.1]} position={[0, 2, 0.3]}>
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