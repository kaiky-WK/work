import React from 'react';
import { Html } from '@react-three/drei';
import { ValueIndicatorProps } from '../types';

export const ValueIndicator: React.FC<ValueIndicatorProps> = ({
  position,
  value,
  label,
  status = 'normal'
}) => {
  const statusColors = {
    normal: 'bg-blue-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500'
  };

  return (
    <Html position={position} center>
      <div className="pointer-events-none">
        <div className={`px-3 py-1 rounded-lg ${statusColors[status]} text-white shadow-lg`}>
          <div className="text-sm font-medium">{label}</div>
          <div className="text-lg font-bold">{value.toFixed(1)}%</div>
        </div>
      </div>
    </Html>
  );
};