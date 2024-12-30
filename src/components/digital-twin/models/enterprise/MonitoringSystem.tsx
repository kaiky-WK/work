import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MetricsProps } from '../types';
import { ValueIndicator } from '../ui/ValueIndicator';

export const MonitoringSystem = ({ metrics }: { metrics: MetricsProps }) => {
  const controlRoom = useLoader(
    GLTFLoader,
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/control-room/model.gltf'
  );
  
  const monitors = useLoader(
    GLTFLoader,
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/monitors/model.gltf'
  );

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
      <primitive 
        object={controlRoom.scene.clone()} 
        scale={[1, 1, 1]} 
      />

      {/* Monitor Wall */}
      <primitive 
        object={monitors.scene.clone()} 
        position={[0, 2, -4]} 
        scale={0.8} 
      />
    </group>
  );
};