import React from 'react';
import { Box, Cylinder } from '@react-three/drei';
import { useModelAnimation } from '../hooks/useModelAnimation';
import { MetricsProps } from '../types';

interface WarehouseModelProps {
  metrics: MetricsProps;
}

export const WarehouseModel: React.FC<WarehouseModelProps> = ({ metrics }) => {
  const groupRef = useModelAnimation(metrics.efficiency < 85 ? 'warning' : 'normal');

  return (
    <group ref={groupRef}>
      {/* Main Warehouse */}
      <Box args={[15, 8, 20]} position={[0, 4, 0]}>
        <meshStandardMaterial color="#475569" metalness={0.4} roughness={0.6} />
      </Box>

      {/* Storage Units */}
      {[-5, 0, 5].map((x) => (
        <group key={x} position={[x, 0.5, 5]}>
          <Box args={[3, 1, 3]}>
            <meshStandardMaterial color="#64748b" metalness={0.6} roughness={0.4} />
          </Box>
          <Cylinder args={[0.2, 0.2, 3]} position={[0, 2, 0]}>
            <meshStandardMaterial color="#94a3b8" metalness={0.7} roughness={0.3} />
          </Cylinder>
        </group>
      ))}
    </group>
  );
};