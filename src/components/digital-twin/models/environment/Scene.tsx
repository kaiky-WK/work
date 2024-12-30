import React from 'react';
import { Lighting } from './Lighting';
import { useEnvironment } from '../hooks/useEnvironment';

export const Scene: React.FC = () => {
  const { fog } = useEnvironment();
  
  return (
    <>
      <fog attach="fog" args={fog} />
      <Lighting />
      <color attach="background" args={['#f1f5f9']} />
    </>
  );
};