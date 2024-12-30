import * as THREE from 'three';

export const createMetalMaterial = (color: string, options = {}) => {
  return new THREE.MeshStandardMaterial({
    color,
    metalness: 0.6,
    roughness: 0.4,
    ...options
  });
};

export const createGlowMaterial = (color: string, intensity = 0.5) => {
  return new THREE.MeshStandardMaterial({
    color,
    emissive: color,
    emissiveIntensity: intensity,
    metalness: 0.8,
    roughness: 0.2
  });
};

export const createGlassMaterial = (color: string) => {
  return new THREE.MeshPhysicalMaterial({
    color,
    transmission: 0.9,
    thickness: 0.1,
    roughness: 0.1,
    metalness: 0.2
  });
};