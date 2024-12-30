export const CAMERA_CONFIG = {
  position: [30, 20, 30] as [number, number, number],
  fov: 45,
  near: 0.1,
  far: 1000,
};

export const CONTROLS_CONFIG = {
  enableZoom: true,
  minDistance: 10,
  maxDistance: 50,
  maxPolarAngle: Math.PI / 2.1,
  enableDamping: true,
  dampingFactor: 0.05,
};

export const RENDERER_CONFIG = {
  antialias: true,
  alpha: false,
  stencil: false,
  depth: true,
  powerPreference: 'high-performance' as const,
};

export const MATERIAL_PRESETS = {
  building: {
    roughness: 0.7,
    metalness: 0.2,
    envMapIntensity: 1,
  },
  metal: {
    roughness: 0.4,
    metalness: 0.8,
    envMapIntensity: 1,
  },
  glass: {
    roughness: 0.1,
    metalness: 0.8,
    envMapIntensity: 1.5,
    transmission: 0.9,
  },
};