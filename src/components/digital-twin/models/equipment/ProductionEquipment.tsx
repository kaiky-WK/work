import React from 'react';
import { MachineUnit } from './MachineUnit';
import { ConveyorBelt } from './ConveyorBelt';
import { ControlPanel } from './ControlPanel';
import { Ground } from '../environment/Ground';
import { ValueIndicator } from '../ui/ValueIndicator';
import { MetricsProps } from '../types';

interface ProductionEquipmentProps {
  metrics: MetricsProps;
}

export const ProductionEquipment: React.FC<ProductionEquipmentProps> = ({ metrics }) => {
  const getStatus = (value: number, threshold: number) => 
    value < threshold ? 'warning' : 'normal';

  return (
    <group>
      {/* Status Indicators */}
      <ValueIndicator
        position={[-8, 8, 0]}
        value={metrics.efficiency}
        label="设备效率"
        status={getStatus(metrics.efficiency, 85)}
      />
      <ValueIndicator
        position={[0, 8, 0]}
        value={metrics.maintenance}
        label="设备状态"
        status={getStatus(metrics.maintenance, 80)}
      />
      <ValueIndicator
        position={[8, 8, 0]}
        value={metrics.production}
        label="生产状态"
        status={getStatus(metrics.production, 90)}
      />

      {/* Production Line */}
      <group position={[0, 0, 0]}>
        {/* Machine Units */}
        {[-4, 0, 4].map((x, i) => (
          <MachineUnit
            key={i}
            position={[x, 0, 0]}
            status={getStatus(metrics.efficiency, 85)}
          />
        ))}

        {/* Conveyor Belts */}
        <ConveyorBelt position={[-2, 0.5, 0]} />
        <ConveyorBelt position={[2, 0.5, 0]} />
      </group>

      {/* Control Station */}
      <ControlPanel position={[-7, 0, 2]} />
      <Ground />
    </group>
  );
};