export const checkWebGLSupport = (): { isSupported: boolean; error?: string } => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');

    if (!gl) {
      return {
        isSupported: false,
        error: 'WebGL is not supported in your browser',
      };
    }

    // Check for required extensions
    const requiredExtensions = ['OES_texture_float', 'WEBGL_depth_texture'];
    const missingExtensions = requiredExtensions.filter(ext => !gl.getExtension(ext));

    if (missingExtensions.length > 0) {
      return {
        isSupported: false,
        error: `Missing required WebGL extensions: ${missingExtensions.join(', ')}`,
      };
    }

    return { isSupported: true };
  } catch (error) {
    return {
      isSupported: false,
      error: error instanceof Error ? error.message : 'Unknown WebGL error',
    };
  }
};

export const getWebGLInfo = (gl: WebGLRenderingContext): Record<string, string> => {
  try {
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (!debugInfo) return {};

    return {
      vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
      renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
      version: gl.getParameter(gl.VERSION),
      shadingLanguageVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
    };
  } catch (error) {
    console.error('Error getting WebGL info:', error);
    return {};
  }
};