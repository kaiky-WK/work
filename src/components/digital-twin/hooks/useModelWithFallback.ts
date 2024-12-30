import { useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

export const useModelWithFallback = (path: string) => {
  const [error, setError] = useState<Error | null>(null);

  try {
    const model = useLoader(GLTFLoader, path, (loader) => {
      loader.crossOrigin = 'anonymous';
    });
    return { model, error: null };
  } catch (err) {
    if (err instanceof Error) {
      setError(err);
      console.warn(`Model loading failed for ${path}:`, err.message);
    }
    return { model: null, error };
  }
};