import React from 'react';

export const SceneEnvironment: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <hemisphereLight
        intensity={0.3}
        color="#ffffff"
        groundColor="#666666"
      />
    </>
  );
};