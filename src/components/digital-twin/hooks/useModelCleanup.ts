import { useEffect, RefObject } from 'react';
import * as THREE from 'three';
import { safeDisposeObject } from '../utils/errorHandling';

export const useModelCleanup = (ref: RefObject<THREE.Object3D>) => {
  useEffect(() => {
    return () => {
      if (ref.current) {
        safeDisposeObject(ref.current);
      }
    };
  }, []);
};