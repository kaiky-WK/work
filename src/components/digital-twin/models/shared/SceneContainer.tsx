import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import { ErrorBoundary } from '../../utils/ErrorBoundary';
import { WebGLErrorFallback } from '../../utils/WebGLErrorFallback';

interface SceneContainerProps {
  children: React.ReactNode;
}

export const SceneContainer: React.FC<SceneContainerProps> = ({ children }) => {
  return (
    <ErrorBoundary fallback={<WebGLErrorFallback />}>
      <div className="w-full h-[600px] bg-gray-50 rounded-lg overflow-hidden">
        <Suspense fallback={<LoadingSpinner />}>
          <Canvas
            shadows
            camera={{ position: [15, 15, 15], fov: 50 }}
            gl={{ antialias: true }}
          >
            <Environment preset="warehouse" />
            <ambientLight intensity={0.5} />
            <directionalLight 
              position={[5, 5, 5]} 
              intensity={1} 
              castShadow
              shadow-mapSize={[2048, 2048]}
            />
            {children}
            <OrbitControls 
              minDistance={5}
              maxDistance={30}
              maxPolarAngle={Math.PI / 2}
              enableDamping
              dampingFactor={0.05}
            />
          </Canvas>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
};