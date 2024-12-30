import { useState, useEffect } from 'react';

export const useWebGLContext = () => {
  const [state, setState] = useState({
    isSupported: true,
    error: '',
    glInfo: {} as Record<string, string>,
  });

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      
      if (!gl) {
        setState({
          isSupported: false,
          error: 'WebGL is not supported in your browser',
          glInfo: {},
        });
        return;
      }

      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        setState({
          isSupported: true,
          error: '',
          glInfo: {
            vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
            renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
          },
        });
      }
    } catch (error) {
      setState({
        isSupported: false,
        error: error instanceof Error ? error.message : 'Unknown WebGL error',
        glInfo: {},
      });
    }
  }, []);

  return state;
};