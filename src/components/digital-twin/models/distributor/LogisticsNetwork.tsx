import React from 'react';
import { useGLTF } from '@react-three/drei';
import { MetricsProps } from '../types';
import { ValueIndicator } from '../ui/ValueIndicator';

export const LogisticsNetwork = ({ metrics }: { metrics: MetricsProps }) => {
  const { scene: distributionCenter } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/logistics-center/model.gltf');
  const { scene: truck } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/delivery-truck/model.gltf');
  const { scene: container } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/shipping-container/model.gltf');

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
      <primitive object={distributionCenter} scale={[0.8, 0.8, 0.8]} />

      {/* Delivery Trucks */}
      {[-5, 5].map((x) => (
        <primitive key={x} object={truck.clone()} position={[x, 0, 4]} scale={[0.5, 0.5, 0.5]} />
      ))}

      {/* Containers */}
      {[-3, 3].map((x) => (
        <primitive key={x} object={container.clone()} position={[x, 0, -4]} scale={[0.6, 0.6, 0.6]} />
      ))}
    </group>
  );
};