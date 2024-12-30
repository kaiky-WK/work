export const CAMERA_CONFIG = {
  position: [8, 5, 8] as [number, number, number],
  fov: 45,
  near: 0.1,
  far: 1000,
};

export const CONTROLS_CONFIG = {
  minDistance: 5,
  maxDistance: 15,
  maxPolarAngle: Math.PI / 2.2,
  enableDamping: true,
  dampingFactor: 0.05,
};

export const MATERIAL_PRESETS = {
  standard: {
    roughness: 0.7,
    metalness: 0.3,
    envMapIntensity: 0.5,
  },
  glass: {
    roughness: 0.1,
    transmission: 0.9,
    thickness: 0.1,
    envMapIntensity: 1,
  },
  metal: {
    roughness: 0.3,
    metalness: 0.8,
    envMapIntensity: 0.8,
  },
};

export const STATUS_COLORS = {
  normal: '#4f46e5',
  warning: '#ca8a04',
  error: '#dc2626',
};