import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const useModelAnimation = (status: 'normal' | 'warning' | 'error') => {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    if (status === 'warning' || status === 'error') {
      const intensity = status === 'warning' ? 0.02 : 0.04;
      const speed = status === 'warning' ? 2 : 3;
      ref.current.rotation.y = Math.sin(clock.getElapsedTime() * speed) * intensity;
    }
  });

  return ref;
};