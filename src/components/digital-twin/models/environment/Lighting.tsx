import React from 'react';
import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

export const Lighting: React.FC = () => {
  const directionalLightRef = useRef<THREE.DirectionalLight>(null);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        ref={directionalLightRef}
        position={[5, 5, 5]}
        castShadow
        intensity={1}
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      >
        <orthographicCamera 
          attach="shadow-camera"
          args={[-10, 10, 10, -10, 0.1, 50]}
        />
      </directionalLight>
      <hemisphereLight
        intensity={0.3}
        groundColor={new THREE.Color('#666666')}
        position={[0, 50, 0]}
      />
    </>
  );
};