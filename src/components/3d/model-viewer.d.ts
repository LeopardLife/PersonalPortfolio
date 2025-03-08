import React from 'react';

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
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
    };
  }
}