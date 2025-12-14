'use client';

import { useEffect, useRef } from 'react';
import styles from './ModelViewer.module.css';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'model-viewer': ModelViewerJSX & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
		}
	}
}

interface ModelViewerJSX {
	src?: string;
	poster?: string;
	alt?: string;
	ar?: boolean | string;
	"ar-modes"?: string;
	"ar-scale"?: string;
	"ios-src"?: string;
	"camera-controls"?: boolean | string;
	"auto-rotate"?: boolean | string;
	"rotation-per-second"?: string;
	"interaction-prompt"?: string;
	"interaction-prompt-threshold"?: string;
	"camera-orbit"?: string;
	"min-camera-orbit"?: string;
	"max-camera-orbit"?: string;
	"field-of-view"?: string;
	"min-field-of-view"?: string;
	"max-field-of-view"?: string;
	"environment-image"?: string;
	"shadow-intensity"?: string;
	"shadow-softness"?: string;
	exposure?: string;
	"animation-name"?: string;
	"animation-crossfade-duration"?: string;
	loading?: "auto" | "lazy" | "eager";
	reveal?: "auto" | "interaction" | "manual";
	style?: React.CSSProperties;
	className?: string;
}

export default function ModelViewer() {
	const modelViewerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		// Check if model-viewer is already defined
		if (customElements.get("model-viewer")) {
			return;
		}

		// Check if script is already being loaded
		const scriptUrl = "https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js";
		if (document.querySelector(`script[src="${scriptUrl}"]`)) {
			return;
		}

		const script = document.createElement("script");
		script.type = "module";
		script.src = scriptUrl;
		document.head.appendChild(script);
	}, []);

	return (
		<model-viewer
			alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
			src="https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb"
			ar
			environment-image="https://modelviewer.dev/shared-assets/environments/moon_1k.hdr"
			poster="https://modelviewer.dev/shared-assets/models/NeilArmstrong.webp"
			shadow-intensity="1"
			camera-controls
			touch-action="pan-y"
			className="w-full h-full"
		></model-viewer>
	);
}
