import React from 'react';
import { Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

interface SolarPanelsProps {
  position: [number, number, number];
  scale?: number;
}

export const SolarPanels: React.FC<SolarPanelsProps> = ({ 
  position, 
  scale = 1 
}) => {
  const panelsRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (panelsRef.current) {
      // Subtle panel movement to simulate sun tracking
      panelsRef.current.rotation.x = Math.PI / 6 + Math.sin(clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  return (
    <group position={position} ref={panelsRef}>
      {[...Array(4)].map((_, i) => (
        <Box
          key={i}
          args={[0.8, 0.05, 0.5]}
          position={[i * 0.9 - 1.35, 0, 0]}
          rotation={[Math.PI / 6, 0, 0]}
          scale={scale}
        >
          <meshStandardMaterial
            color="#2563eb"
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1}
          />
        </Box>
      ))}
    </group>
  );
};