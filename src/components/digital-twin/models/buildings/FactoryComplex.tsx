import React from 'react';
import { MainFactory } from './MainFactory';
import { OfficeBuilding } from './OfficeBuilding';
import { Ground } from '../environment/Ground';
import { ValueIndicator } from '../ui/ValueIndicator';
import { MetricsProps } from '../types';

interface FactoryComplexProps {
  metrics: MetricsProps;
}

export const FactoryComplex: React.FC<FactoryComplexProps> = ({ metrics }) => {
  return (
    <group>
      {/* Metrics Indicators */}
      <ValueIndicator
        position={[-8, 8, 0]}
        value={metrics.efficiency}
        label="生产线效率"
        status={metrics.efficiency < 80 ? 'warning' : 'normal'}
      />
      <ValueIndicator
        position={[0, 8, 0]}
        value={metrics.quality}
        label="质量控制"
        status={metrics.quality < 90 ? 'warning' : 'normal'}
      />
      <ValueIndicator
        position={[8, 8, 0]}
        value={metrics.maintenance}
        label="设备维护"
        status={metrics.maintenance < 80 ? 'warning' : 'normal'}
      />

      {/* Buildings */}
      <MainFactory position={[0, 0, 0]} />
      <OfficeBuilding 
        position={[8, 0, 0]} 
        scale={[6, 8, 6]} 
      />
      <Ground />
    </group>
  );
};