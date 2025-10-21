// ATENÇÃO AO PROFESSOR: ESSE COMPONENTE NÃO FUI EU QUEM CRIEI, FOI PEGADO DA NET!!!!!!!!!

import { useRef, useEffect } from 'react';

// Noise component integrated into the background
function Noise({
  patternSize = 100,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 1,
  patternAlpha = 50,
  intensity = 1,
}) {
  const grainRef = useRef(null);
  const canvasCssSizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error("Failed to get 2D context for noise canvas.");
      return;
    }

    let frame = 0;
    const patternCanvas = document.createElement('canvas');
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;

    const patternCtx = patternCanvas.getContext('2d');
    if (!patternCtx) {
        console.error("Failed to get 2D context for pattern sub-canvas.");
        return;
    }
    const patternData = patternCtx.createImageData(patternSize, patternSize);
    const patternPixelDataLength = patternSize * patternSize * 4;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      let newCssWidth = window.innerWidth;
      let newCssHeight = window.innerHeight;

      if (canvas.parentElement) {
        const parentRect = canvas.parentElement.getBoundingClientRect();
        newCssWidth = parentRect.width;
        newCssHeight = parentRect.height;
      }

      canvasCssSizeRef.current = { width: newCssWidth, height: newCssHeight };

      canvas.width = newCssWidth * dpr;
      canvas.height = newCssHeight * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const updatePattern = () => {
      for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 255 * intensity;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
      }
      patternCtx.putImageData(patternData, 0, 0);
    };

    const drawGrain = () => {
      const { width: cssWidth, height: cssHeight } = canvasCssSizeRef.current;
      if (cssWidth === 0 || cssHeight === 0) return;

      ctx.clearRect(0, 0, cssWidth, cssHeight);

      ctx.save();

      const safePatternScaleX = Math.max(0.001, patternScaleX);
      const safePatternScaleY = Math.max(0.001, patternScaleY);
      ctx.scale(safePatternScaleX, safePatternScaleY);

      const fillPattern = ctx.createPattern(patternCanvas, 'repeat');
      if (fillPattern) {
        ctx.fillStyle = fillPattern;
        ctx.fillRect(0, 0, cssWidth / safePatternScaleX, cssHeight / safePatternScaleY);
      }

      ctx.restore();
    };

    let animationFrameId;
    const loop = () => {
      if (canvasCssSizeRef.current.width > 0 && canvasCssSizeRef.current.height > 0) {
        if (frame % patternRefreshInterval === 0) {
          updatePattern();
          drawGrain();
        }
      }
      frame++;
      animationFrameId = window.requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resize);
    resize();
    if (patternRefreshInterval > 0) {
        loop();
    } else {
        updatePattern();
        drawGrain();
    }

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha, intensity]);

  return <canvas className="absolute inset-0 w-full h-full pointer-events-none" ref={grainRef} />;
}

// Main gradient background component
function GradientBackground({
  gradientType = 'radial-gradient',
  gradientSize = '125% 125%',
  gradientOrigin = 'bottom-middle',
  colors = [
    { color: 'rgba(245,87,2,1)', stop: '10.5%' },
    { color: 'rgba(245,120,2,1)', stop: '16%' },
    { color: 'rgba(245,140,2,1)', stop: '17.5%' },
    { color: 'rgba(245,170,100,1)', stop: '25%' },
    { color: 'rgba(238,174,202,1)', stop: '40%' },
    { color: 'rgba(202,179,214,1)', stop: '65%' },
    { color: 'rgba(148,201,233,1)', stop: '100%' }
  ],

  enableNoise = true,
  noisePatternSize = 100,
  noisePatternScaleX = 1,
  noisePatternScaleY = 1,
  noisePatternRefreshInterval = 1,
  noisePatternAlpha = 50,
  noiseIntensity = 1,

  className = '',
  style = {},
  children,

  customGradient = null
}) {
  const generateGradient = () => {
    if (customGradient) return customGradient;

    const getGradientPosition = (origin) => {
      const positions = {
        'bottom-middle': '50% 101%',
        'bottom-left': '0% 101%',
        'bottom-right': '100% 101%',
        'top-middle': '50% -1%',
        'top-left': '0% -1%',
        'top-right': '100% -1%',
        'left-middle': '-1% 50%',
        'right-middle': '101% 50%',
        'center': '50% 50%'
      };
      return positions[origin] || positions['bottom-middle'];
    };

    const position = getGradientPosition(gradientOrigin);
    const colorStops = colors.map(({ color, stop }) => `${color} ${stop}`).join(',');

    if (gradientType === 'radial-gradient') {
      return `radial-gradient(${gradientSize} at ${position},${colorStops})`;
    } else if (gradientType === 'linear-gradient') {
      const angleMap = {
        'bottom-middle': '0deg',
        'bottom-left': '45deg',
        'bottom-right': '315deg',
        'top-middle': '180deg',
        'top-left': '135deg',
        'top-right': '225deg',
        'left-middle': '90deg',
        'right-middle': '270deg',
        'center': '0deg'
      };
      const angle = angleMap[gradientOrigin] || angleMap['bottom-middle'];
      return `linear-gradient(${angle},${colorStops})`;
    } else if (gradientType === 'conic-gradient') {
      return `conic-gradient(from 0deg at ${position},${colorStops})`;
    }

    return `${gradientType}(${colorStops})`;
  };

  const gradientStyle = {
    background: generateGradient(),
    ...style
  };

  return (
    <div
      className={`absolute inset-0 w-full h-full ${className}`}
      style={gradientStyle}
    >
      {enableNoise && (
        <Noise
          patternSize={noisePatternSize}
          patternScaleX={noisePatternScaleX}
          patternScaleY={noisePatternScaleY}
          patternRefreshInterval={noisePatternRefreshInterval}
          patternAlpha={noisePatternAlpha}
          intensity={noiseIntensity}
        />
      )}
      {children}
    </div>
  );
}

export { GradientBackground };
