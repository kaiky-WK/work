export interface BuildingProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  color?: string;
  status?: 'normal' | 'warning' | 'error';
}

export interface MetricsProps {
  efficiency: number;
  quality: number;
  maintenance: number;
  production: number;
}

export interface ValueIndicatorProps {
  position: [number, number, number];
  value: number;
  label: string;
  status?: 'normal' | 'warning' | 'error';
}