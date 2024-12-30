import React from 'react';
import { Plane, useTexture } from '@react-three/drei';

export const RoadNetwork: React.FC = () => {
  const roadTexture = useTexture('https://raw.githubusercontent.com/pmndrs/drei-assets/master/road/road_basecolor.jpg');
  
  return (
    <Plane
      args={[40, 4]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0.01, 10]}
    >
      <meshStandardMaterial
        map={roadTexture}
        roughness={0.8}
        metalness={0}
      />
    </Plane>
  );
};