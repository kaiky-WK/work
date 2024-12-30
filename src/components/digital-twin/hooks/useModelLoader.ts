import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useState, useEffect } from 'react';

export const useModelLoader = (url: string) => {
  const [error, setError] = useState<Error | null>(null);
  
  try {
    const model = useLoader(GLTFLoader, url);
    return { model, error: null };
  } catch (err) {
    if (err instanceof Error) {
      setError(err);
    }
    return { model: null, error };
  }
};