import * as THREE from 'three';
import { MaterialConfig } from '../types';

export const createStandardMaterial = (config: MaterialConfig) => {
  const material = new THREE.MeshStandardMaterial({
    color: config.color,
    roughness: config.roughness ?? 0.7,
    metalness: config.metalness ?? 0.3,
    envMapIntensity: config.envMapIntensity ?? 0.5,
  });
  
  return material;
};

export const createGlassMaterial = (config: MaterialConfig) => {
  const material = new THREE.MeshPhysicalMaterial({
    color: config.color,
    roughness: config.roughness ?? 0.1,
    transmission: 0.9,
    thickness: 0.1,
    envMapIntensity: config.envMapIntensity ?? 1,
  });
  
  return material;
};