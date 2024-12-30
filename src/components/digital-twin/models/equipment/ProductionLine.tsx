import React from 'react';
import { Box, Cylinder } from '@react-three/drei';
import { useModelAnimation } from '../hooks/useModelAnimation';

interface ProductionLineProps {
  position: [number, number, number];
  status?: 'normal' | 'warning' | 'error';
}

export const ProductionLine: React.FC<ProductionLineProps> = ({ 
  position,
  status = 'normal'
}) => {
  const groupRef = useModelAnimation(status);

  return (
    <group ref={groupRef} position={position}>
      {/* Base Platform */}
      <Box args={[12, 0.5, 4]} position={[0, 0.25, 0]}>
        <meshStandardMaterial color="#64748b" metalness={0.6} roughness={0.4} />
      </Box>

      {/* Production Units */}
      {[-4, 0, 4].map((x, i) => (
        <group key={i} position={[x, 1.5, 0]}>
          {/* Main Unit */}
          <Box args={[3, 2, 3]}>
            <meshStandardMaterial color="#4f46e5" metalness={0.4} roughness={0.6} />
          </Box>
          
          {/* Top Cylinder */}
          <Cylinder args={[0.3, 0.3, 1]} position={[0, 1.5, 0]} rotation={[0, 0, 0]}>
            <meshStandardMaterial color="#94a3b8" metalness={0.7} roughness={0.3} />
          </Cylinder>
        </group>
      ))}
    </group>
  );
};