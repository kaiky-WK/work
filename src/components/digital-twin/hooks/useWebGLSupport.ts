import { useEffect, useState } from 'react';

interface WebGLSupportState {
  isSupported: boolean;
  errorMessage: string;
}

export const useWebGLSupport = (): WebGLSupportState => {
  const [state, setState] = useState<WebGLSupportState>({
    isSupported: true,
    errorMessage: '',
  });

  useEffect(() => {
    const canvas = document.createElement('canvas');
    let gl: WebGLRenderingContext | null = null;

    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        throw new Error('WebGL is not supported');
      }

      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        console.log('WebGL Renderer:', renderer);
      }
    } catch (error) {
      setState({
        isSupported: false,
        errorMessage: error instanceof Error ? error.message : 'Unknown WebGL error',
      });
    } finally {
      if (gl) {
        gl.getExtension('WEBGL_lose_context')?.loseContext();
      }
    }
  }, []);

  return state;
};