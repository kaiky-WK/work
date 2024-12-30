import { RefObject } from 'react';
import * as THREE from 'three';

export const safeRemoveChild = (parent: THREE.Object3D, child: THREE.Object3D): boolean => {
  try {
    if (parent && child && parent.children.includes(child)) {
      parent.remove(child);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error removing child:', error);
    return false;
  }
};

export const safeDisposeObject = (object: THREE.Object3D | null): void => {
  try {
    if (!object) return;

    // Dispose geometries
    if ('geometry' in object && object.geometry instanceof THREE.BufferGeometry) {
      object.geometry.dispose();
    }

    // Dispose materials
    if ('material' in object) {
      const materials = Array.isArray(object.material) 
        ? object.material 
        : [object.material];
      
      materials.forEach(material => {
        if (material instanceof THREE.Material) {
          material.dispose();
        }
      });
    }

    // Recursively dispose children
    while (object.children.length > 0) {
      safeDisposeObject(object.children[0]);
      safeRemoveChild(object, object.children[0]);
    }
  } catch (error) {
    console.error('Error disposing object:', error);
  }
};

export const safeUpdateMatrix = (object: THREE.Object3D | null): void => {
  try {
    if (object) {
      object.updateMatrix();
      object.updateMatrixWorld(true);
    }
  } catch (error) {
    console.error('Error updating matrix:', error);
  }
};