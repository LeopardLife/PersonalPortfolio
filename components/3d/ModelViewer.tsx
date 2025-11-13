'use client';

import { useEffect, useRef } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerJSX & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface ModelViewerJSX {
  src?: string;
  'camera-controls'?: boolean;
  'auto-rotate'?: boolean;
  'rotation-per-second'?: string;
  'interaction-prompt'?: string;
  'camera-orbit'?: string;
  'environment-image'?: string;
  'shadow-intensity'?: string;
  'shadow-softness'?: string;
  exposure?: string;
  'animation-name'?: string;
  'animation-crossfade-duration'?: string;
  style?: React.CSSProperties;
}

export default function ModelViewer() {
  const modelViewerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <model-viewer
      ref={modelViewerRef}
      src="/assets/terrarium-bots-nerdscribbles.glb"
      camera-controls
      auto-rotate
      rotation-per-second="30deg"
      interaction-prompt="none"
      camera-orbit="45deg 55deg 5m"
      environment-image="neutral"
      shadow-intensity="1"
      shadow-softness="0"
      exposure="1"
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
      }}
    />
  );
}
