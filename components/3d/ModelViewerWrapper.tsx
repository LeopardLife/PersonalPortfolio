'use client';

import { useEffect, useState } from 'react';

interface ModelViewerProps {
  src: string;
  poster?: string;
  alt: string;
  ar?: boolean;
  autoRotate?: boolean;
  cameraControls?: boolean;
	iosSrc?: string;
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
  iosSrc,
  className,
  style,
}: ModelViewerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
		// Ensure <model-viewer> is defined once across HMR reloads
		let cancelled = false;
		const ensureDefined = async () => {
			if (customElements.get("model-viewer")) {
				if (!cancelled) setIsMounted(true);
				return;
			}
			try {
				await import("@google/model-viewer");
				if (!cancelled) setIsMounted(true);
				return;
			} catch {
				// fallback to CDN if package import fails
			}
			if (!document.querySelector('script[data-model-viewer-cdn]')) {
				const script = document.createElement('script');
				script.type = 'module';
				script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js';
				script.setAttribute('data-model-viewer-cdn', 'true');
				script.onload = () => { if (!cancelled) setIsMounted(true); };
				script.onerror = () => console.error('Failed to load model-viewer CDN');
				document.head.appendChild(script);
			} else {
				customElements.whenDefined('model-viewer').then(() => { if (!cancelled) setIsMounted(true); });
			}
		};
		ensureDefined();
		return () => { cancelled = true; };
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

	// Only set ios-src when a valid USDZ is provided to avoid iOS download prompt
	const iosAttr = iosSrc && iosSrc.toLowerCase().endsWith('.usdz') ? iosSrc : undefined;

  return (
		<div className={`relative ${className}`} style={style}>
			{/* @ts-ignore - model-viewer is a custom element */}
			<model-viewer
				src={src}
				poster={poster}
				alt={alt}
				ar
				xr-environment
				camera-controls
				auto-rotate={autoRotate ? "" : undefined}
				shadow-intensity="1"
				loading="eager"
				reveal="auto"
				ios-src={iosAttr}
				style={{
					width: "100%",
					height: "100%",
					minHeight: "400px",
					display: "block",
				}}
			></model-viewer>
		</div>
  );
}
