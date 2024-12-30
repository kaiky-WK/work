import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface WebGLErrorFallbackProps {
  message?: string;
  details?: Record<string, string>;
}

export const WebGLErrorFallback: React.FC<WebGLErrorFallbackProps> = ({ 
  message = '3D visualization is not supported in your browser',
  details = {}
}) => {
  return (
    <div className="w-full h-[400px] bg-gray-50 rounded-lg flex items-center justify-center">
      <div className="text-center p-6">
        <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          3D Visualization Not Available
        </h3>
        <p className="text-gray-600 max-w-md mx-auto mb-4">
          {message}
        </p>
        {Object.keys(details).length > 0 && (
          <div className="text-sm text-gray-500 mt-4">
            <p className="font-medium mb-2">Technical Details:</p>
            <ul className="space-y-1">
              {Object.entries(details).map(([key, value]) => (
                <li key={key}>
                  {key}: {value}
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className="text-sm text-gray-500 mt-4">
          Try using a modern browser with WebGL support
        </p>
      </div>
    </div>
  );
};