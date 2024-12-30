import React from 'react';
import Scene from '../models/Scene';
import { NetworkModel } from '../models/distributor/NetworkModel';
import { Ground } from '../models/environment/Ground';
import { ValueIndicator } from '../models/ui/ValueIndicator';

export const DistributorTwin = () => {
  const metrics = {
    efficiency: 89.7,
    quality: 93.4,
    maintenance: 78.6,
    production: 85.9
  };

  return (
    <div className="space-y-6">
      <Scene>
        <group>
          <ValueIndicator
            position={[-8, 8, 0]}
            value={metrics.efficiency}
            label="销售分析"
            status={metrics.efficiency < 85 ? 'warning' : 'normal'}
          />
          <ValueIndicator
            position={[0, 8, 0]}
            value={metrics.quality}
            label="需求预测"
            status={metrics.quality < 90 ? 'warning' : 'normal'}
          />
          <ValueIndicator
            position={[8, 8, 0]}
            value={metrics.maintenance}
            label="价格动态"
            status={metrics.maintenance < 80 ? 'warning' : 'normal'}
          />
          <NetworkModel metrics={metrics} />
          <Ground />
        </group>
      </Scene>
    </div>
  );
};