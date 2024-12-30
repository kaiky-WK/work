import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

interface ThreeDModelProps {
  color?: string;
}

export const ThreeDModel: React.FC<ThreeDModelProps> = ({ color = '#4f46e5' }) => {
  const meshRef = useRef();

  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box ref={meshRef} args={[1, 1, 1]}>
        <meshStandardMaterial color={color} />
      </Box>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};