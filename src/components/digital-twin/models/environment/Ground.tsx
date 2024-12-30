import React from 'react';
import { Plane } from '@react-three/drei';

export const Ground: React.FC = () => {
  return (
    <Plane
      args={[100, 100]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
      receiveShadow
    >
      <meshStandardMaterial
        color="#e5e7eb"
        roughness={0.8}
        metalness={0.2}
      />
    </Plane>
  );
};