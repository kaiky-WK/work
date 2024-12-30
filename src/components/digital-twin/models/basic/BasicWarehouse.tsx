import React from 'react';
import { Box } from '@react-three/drei';
import { MetricsProps } from '../types';
import { ValueIndicator } from '../ui/ValueIndicator';

interface BasicWarehouseProps {
  metrics: MetricsProps;
  color?: string;
}

export const BasicWarehouse: React.FC<BasicWarehouseProps> = ({
  metrics,
  color = '#475569'
}) => {
  return (
    <group>
      {/* Metrics Display */}
      <ValueIndicator
        position={[-8, 8, 0]}
        value={metrics.efficiency}
        label="库存周转"
        status={metrics.efficiency < 85 ? 'warning' : 'normal'}
      />
      <ValueIndicator
        position={[0, 8, 0]}
        value={metrics.maintenance}
        label="库存水平"
        status={metrics.maintenance < 80 ? 'warning' : 'normal'}
      />

      {/* Basic Warehouse Building */}
      <Box args={[12, 6, 16]} position={[0, 3, 0]}>
        <meshStandardMaterial color={color} />
      </Box>

      {/* Loading Dock */}
      <Box args={[4, 1, 2]} position={[0, 0.5, 8]}>
        <meshStandardMaterial color="#64748b" />
      </Box>
    </group>
  );
};