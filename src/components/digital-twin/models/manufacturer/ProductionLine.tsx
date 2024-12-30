import React from 'react';
import { useModelLoader } from '../../hooks/useModelLoader';
import { RobotArmFallback, MachineFallback, ConveyorFallback } from '../fallbacks/BasicModels';
import { MetricsProps } from '../types';
import { ValueIndicator } from '../ui/ValueIndicator';

export const ProductionLine = ({ metrics }: { metrics: MetricsProps }) => {
  const { model: robotArm, error: robotError } = useModelLoader(
    '/models/robot-arm.glb'
  );
  
  const { model: machine, error: machineError } = useModelLoader(
    '/models/machine.glb'
  );

  const { model: conveyor, error: conveyorError } = useModelLoader(
    '/models/conveyor.glb'
  );

  return (
    <group>
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
      <ValueIndicator
        position={[8, 8, 0]}
        value={metrics.maintenance}
        label="设备状态"
        status={metrics.maintenance < 80 ? 'warning' : 'normal'}
      />

      {/* Robot Arms */}
      {[-3, 0, 3].map((x, i) => (
        <group key={i} position={[x, 0, 0]} scale={0.5}>
          {robotArm && !robotError ? (
            <primitive object={robotArm.scene.clone()} />
          ) : (
            <RobotArmFallback />
          )}
        </group>
      ))}

      {/* Machine */}
      <group position={[4, 0, -2]} scale={0.8}>
        {machine && !machineError ? (
          <primitive object={machine.scene.clone()} />
        ) : (
          <MachineFallback />
        )}
      </group>

      {/* Conveyor */}
      <group position={[0, 0, 2]}>
        {conveyor && !conveyorError ? (
          <primitive object={conveyor.scene.clone()} />
        ) : (
          <ConveyorFallback />
        )}
      </group>
    </group>
  );
};