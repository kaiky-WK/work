import React from 'react';
import { Thermometer, Droplets, Zap } from 'lucide-react';

interface EnvironmentDataProps {
  temperature: number;
  humidity: number;
  power: number;
}

export const EnvironmentData: React.FC<EnvironmentDataProps> = ({
  temperature,
  humidity,
  power
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold border-b border-cyan-400/30 pb-2">环境数据</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Thermometer className="w-5 h-5 mr-2" />
            <span>温度</span>
          </div>
          <span>{temperature}°C</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Droplets className="w-5 h-5 mr-2" />
            <span>湿度</span>
          </div>
          <span>{humidity}%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Zap className="w-5 h-5 mr-2" />
            <span>功率</span>
          </div>
          <span>{power}kW</span>
        </div>
      </div>
    </div>
  );
};