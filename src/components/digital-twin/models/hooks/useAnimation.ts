import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { AnimationConfig } from '../types';

export const useAnimation = (config: AnimationConfig) => {
  const ref = useRef<THREE.Group>(null);
  const { enabled, speed = 1, intensity = 0.1 } = config;

  useFrame(({ clock }) => {
    if (!ref.current || !enabled) return;
    
    const time = clock.getElapsedTime();
    ref.current.rotation.y = Math.sin(time * speed) * intensity;
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.y = 0;
    }
  }, [enabled]);

  return ref;
};