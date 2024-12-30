import React from 'react';

interface ChartLineProps {
  value: number;
  color: 'cyan' | 'emerald' | 'violet';
}

export const ChartLine: React.FC<ChartLineProps> = ({ value, color }) => {
  const colors = {
    cyan: 'bg-cyan-400',
    emerald: 'bg-emerald-400',
    violet: 'bg-violet-400'
  };

  return (
    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
      <div 
        className={`h-full ${colors[color]} transition-all duration-500`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};