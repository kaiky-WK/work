import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface DeviceMetricsProps {
  status: ('normal' | 'warning' | 'error')[];
  performance: number[];
}

export const DeviceMetrics: React.FC<DeviceMetricsProps> = ({ status, performance }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold border-b border-cyan-400/30 pb-2">设备状态</h3>
      <div className="grid grid-cols-4 gap-4">
        {status.map((deviceStatus, index) => (
          <div key={index} className="text-center">
            <div className="flex items-center justify-center mb-2">
              {deviceStatus === 'normal' ? (
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              ) : (
                <AlertCircle className="w-6 h-6 text-amber-400" />
              )}
            </div>
            <div className="text-sm">设备 {index + 1}</div>
            <div className="text-xs opacity-80">{performance[index]}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};