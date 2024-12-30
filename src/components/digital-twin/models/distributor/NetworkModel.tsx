import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MetricsProps } from '../types';
import { ValueIndicator } from '../ui/ValueIndicator';

export const NetworkModel = ({ metrics }: { metrics: MetricsProps }) => {
  const building = useLoader(
    GLTFLoader,
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/building/model.gltf'
  );
  
  const truck = useLoader(
    GLTFLoader,
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/truck/model.gltf'
  );

  return (
    <group>
      <ValueIndicator
        position={[-8, 8, 0]}
        value={metrics.efficiency}
        label="配送效率"
        status={metrics.efficiency < 85 ? 'warning' : 'normal'}
      />
      <ValueIndicator
        position={[0, 8, 0]}
        value={metrics.quality}
        label="服务质量"
        status={metrics.quality < 90 ? 'warning' : 'normal'}
      />

      {/* Distribution Center */}
      <primitive 
        object={building.scene.clone()} 
        scale={[0.8, 0.8, 0.8]} 
      />

      {/* Delivery Trucks */}
      {[-5, 5].map((x) => (
        <primitive 
          key={x} 
          object={truck.scene.clone()} 
          position={[x, 0, 4]} 
          scale={0.5} 
        />
      ))}
    </group>
  );
};