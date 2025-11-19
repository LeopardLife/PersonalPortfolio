'use client';

import { useEffect, useState } from 'react';

interface ModelViewerProps {
  src: string;
  poster?: string;
  alt: string;
  ar?: boolean;
  autoRotate?: boolean;
  cameraControls?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function ModelViewerWrapper({
  src,
  poster,
  alt,
  ar = true,
  autoRotate = true,
  cameraControls = true,
  className,
  style,
}: ModelViewerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    import('@google/model-viewer').then(() => {
      setIsMounted(true);
    });
  }, []);

  if (!isMounted) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg ${className}`}
        style={style}
      >
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className={className} style={style}>
      {/* @ts-ignore - model-viewer is a custom element */}
      <model-viewer
        src={src}
        poster={poster}
        alt={alt}
        ar={ar ? "" : undefined}
        ar-modes="webxr scene-viewer quick-look"
        camera-controls={cameraControls ? "" : undefined}
        auto-rotate={autoRotate ? "" : undefined}
        shadow-intensity="1"
        style={{ width: '100%', height: '100%' }}
      >
        <div slot="ar-button" className="absolute bottom-4 right-4">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            View in AR
          </button>
        </div>
      </model-viewer>
    </div>
  );
}
