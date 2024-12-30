import React from 'react';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';

export const Landscape: React.FC = () => {
  const texture = new THREE.TextureLoader().load(
    'https://raw.githubusercontent.com/pmndrs/drei-assets/master/grass/grass_basecolor.jpg',
    (texture) => {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(20, 20);
    }
  );

  return (
    <Plane
      args={[100, 100]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
      receiveShadow
    >
      <meshStandardMaterial
        map={texture}
        roughness={1}
        metalness={0}
      />
    </Plane>
  );
};