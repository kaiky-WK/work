import React from 'react';
import { Html } from '@react-three/drei';
import { SystemStatus } from './SystemStatus';
import { EnvironmentData } from './EnvironmentData';
import { DeviceMetrics } from './DeviceMetrics';

interface MonitoringOverlayProps {
  metrics: {
    system: {
      cpu: number;
      memory: number;
      network: number;
    };
    environment: {
      temperature: number;
      humidity: number;
      power: number;
    };
    devices: {
      status: ('normal' | 'warning' | 'error')[];
      performance: number[];
    };
  };
}

export const MonitoringOverlay: React.FC<MonitoringOverlayProps> = ({ metrics }) => {
  return (
    <>
      {/* Left Panel */}
      <Html position={[-12, 4, 0]} transform>
        <div className="w-64 bg-slate-900/80 text-cyan-400 p-4 rounded-lg backdrop-blur-sm">
          <SystemStatus 
            cpu={metrics.system.cpu}
            memory={metrics.system.memory}
            network={metrics.system.network}
          />
        </div>
      </Html>

      {/* Right Panel */}
      <Html position={[12, 4, 0]} transform>
        <div className="w-64 bg-slate-900/80 text-cyan-400 p-4 rounded-lg backdrop-blur-sm">
          <EnvironmentData
            temperature={metrics.environment.temperature}
            humidity={metrics.environment.humidity}
            power={metrics.environment.power}
          />
        </div>
      </Html>

      {/* Bottom Panel */}
      <Html position={[0, -6, 0]} transform>
        <div className="w-96 bg-slate-900/80 text-cyan-400 p-4 rounded-lg backdrop-blur-sm">
          <DeviceMetrics
            status={metrics.devices.status}
            performance={metrics.devices.performance}
          />
        </div>
      </Html>
    </>
  );
};