import React from 'react';
import { Box, Cylinder } from '@react-three/drei';
import { MetricsProps } from '../types';
import { ValueIndicator } from '../ui/ValueIndicator';

interface BasicFactoryProps {
  metrics: MetricsProps;
  color?: string;
}

export const BasicFactory: React.FC<BasicFactoryProps> = ({ 
  metrics,
  color = '#4f46e5'
}) => {
  return (
    <group>
      {/* Metrics Display */}
      <ValueIndicator
        position={[-8, 8, 0]}
        value={metrics.efficiency}
        label="生产效率"
        status={metrics.efficiency < 85 ? 'warning' : 'normal'}
      />
      <ValueIndicator
        position={[0, 8, 0]}
        value={metrics.quality}
        label="产品质量"
        status={metrics.quality < 90 ? 'warning' : 'normal'}
      />

      {/* Basic Factory Building */}
      <Box args={[8, 4, 8]} position={[0, 2, 0]}>
        <meshStandardMaterial color={color} />
      </Box>

      {/* Chimneys */}
      <Cylinder args={[0.3, 0.5, 2]} position={[-1.5, 4, 0]}>
        <meshStandardMaterial color="#666666" />
      </Cylinder>
      <Cylinder args={[0.3, 0.5, 2]} position={[1.5, 4, 0]}>
        <meshStandardMaterial color="#666666" />
      </Cylinder>
    </group>
  );
};