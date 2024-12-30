import React from 'react';
import { useGLTF } from '@react-three/drei';
import { MetricsProps } from '../types';
import { ValueIndicator } from '../ui/ValueIndicator';

export const MonitoringCenter = ({ metrics }: { metrics: MetricsProps }) => {
  const { scene: controlRoom } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/control-room/model.gltf');
  const { scene: monitors } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/monitor-wall/model.gltf');
  const { scene: workstation } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/workstation/model.gltf');

  return (
    <group>
      <ValueIndicator
        position={[-8, 8, 0]}
        value={metrics.efficiency}
        label="系统运行"
        status={metrics.efficiency < 85 ? 'warning' : 'normal'}
      />
      <ValueIndicator
        position={[0, 8, 0]}
        value={metrics.maintenance}
        label="监控覆盖"
        status={metrics.maintenance < 80 ? 'warning' : 'normal'}
      />

      {/* Control Room */}
      <primitive object={controlRoom} scale={[1, 1, 1]} />

      {/* Monitor Wall */}
      <primitive object={monitors} position={[0, 2, -4]} scale={[0.8, 0.8, 0.8]} />

      {/* Workstations */}
      {[-3, 0, 3].map((x) => (
        <primitive key={x} object={workstation.clone()} position={[x, 0, 2]} scale={[0.7, 0.7, 0.7]} />
      ))}
    </group>
  );
};