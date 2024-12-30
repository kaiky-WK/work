import React from 'react';
import { ChartLine } from './ChartLine';

interface SystemStatusProps {
  cpu: number;
  memory: number;
  network: number;
}

export const SystemStatus: React.FC<SystemStatusProps> = ({ cpu, memory, network }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold border-b border-cyan-400/30 pb-2">系统状态</h3>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between mb-1">
            <span>CPU 使用率</span>
            <span>{cpu}%</span>
          </div>
          <ChartLine value={cpu} color="cyan" />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>内存使用率</span>
            <span>{memory}%</span>
          </div>
          <ChartLine value={memory} color="emerald" />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>网络负载</span>
            <span>{network}%</span>
          </div>
          <ChartLine value={network} color="violet" />
        </div>
      </div>
    </div>
  );
};