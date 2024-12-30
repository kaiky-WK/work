import { useMemo } from 'react';
import * as THREE from 'three';

export const useMaterials = () => {
  const standardMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({
      roughness: 0.7,
      metalness: 0.3,
      envMapIntensity: 0.5,
    }),
    []
  );

  const glassMaterial = useMemo(
    () => new THREE.MeshPhysicalMaterial({
      roughness: 0.1,
      transmission: 0.9,
      thickness: 0.1,
      envMapIntensity: 1,
    }),
    []
  );

  const metalMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({
      roughness: 0.3,
      metalness: 0.8,
      envMapIntensity: 0.8,
    }),
    []
  );

  return {
    standardMaterial,
    glassMaterial,
    metalMaterial,
  };
};