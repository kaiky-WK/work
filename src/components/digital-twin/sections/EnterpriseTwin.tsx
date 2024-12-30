import React from 'react';
import Scene from '../models/Scene';
import { MonitoringSystem } from '../models/enterprise/MonitoringSystem';
import { Ground } from '../models/environment/Ground';
import { ValueIndicator } from '../models/ui/ValueIndicator';

export const EnterpriseTwin = () => {
  const metrics = {
    efficiency: 96.3,
    quality: 92.8,
    maintenance: 84.5,
    production: 71.2
  };

  return (
    <div className="space-y-6">
      <Scene>
        <group>
          <ValueIndicator
            position={[-8, 8, 0]}
            value={metrics.efficiency}
            label="全链追踪"
            status={metrics.efficiency < 85 ? 'warning' : 'normal'}
          />
          <ValueIndicator
            position={[0, 8, 0]}
            value={metrics.quality}
            label="质量监控"
            status={metrics.quality < 90 ? 'warning' : 'normal'}
          />
          <ValueIndicator
            position={[8, 8, 0]}
            value={metrics.maintenance}
            label="风险预警"
            status={metrics.maintenance < 80 ? 'error' : 'normal'}
          />
          <MonitoringSystem metrics={metrics} />
          <Ground />
        </group>
      </Scene>
    </div>
  );
};