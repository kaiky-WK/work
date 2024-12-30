import * as THREE from 'three';
import { MATERIAL_PRESETS } from '../../constants';

export const createBuildingMaterial = (color: string) => {
  return new THREE.MeshStandardMaterial({
    color,
    ...MATERIAL_PRESETS.building
  });
};

export const createMetalMaterial = (color: string, texture?: THREE.Texture) => {
  return new THREE.MeshStandardMaterial({
    color,
    map: texture,
    ...MATERIAL_PRESETS.metal
  });
};

export const createGlassMaterial = (color: string) => {
  return new THREE.MeshPhysicalMaterial({
    color,
    ...MATERIAL_PRESETS.glass
  });
};