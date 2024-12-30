import React from 'react';
import { FactoryModel } from '../models/FactoryModel';

interface MetricCardProps {
  title: string;
  value: number;
  status: 'normal' | 'warning' | 'error';
  trend?: number;
}

export const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  status,
  trend 
}) => {
  const statusColors = {
    normal: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600'
  };

  const modelColors = {
    normal: '#4f46e5',
    warning: '#ca8a04',
    error: '#dc2626'
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
      <div className="h-48 mb-4 bg-gray-50 rounded-lg overflow-hidden">
        <FactoryModel color={modelColors[status]} status={status} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">当前值</span>
          <span className={`text-sm font-medium ${statusColors[status]}`}>
            {value.toFixed(2)}
            {trend && (
              <span className={`ml-2 ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
              </span>
            )}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${
              status === 'normal' ? 'bg-blue-600' : 
              status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );
};