// AR Platform Detection Utility

export interface ARCapabilities {
  supportsWebXR: boolean;
  supportsQuickLook: boolean;
  platform: 'ios' | 'android' | 'desktop';
  recommendedARMethod: 'webxr' | 'quicklook' | 'none';
}

export async function detectARCapabilities(): Promise<ARCapabilities> {
  const userAgent = navigator.userAgent.toLowerCase();

  // Detect iOS
  const isIOS = /ipad|iphone|ipod/.test(userAgent);

  // Detect Android
  const isAndroid = /android/.test(userAgent);

  // Check WebXR support
  const supportsWebXR = 'xr' in navigator && !isIOS;

  // iOS always supports Quick Look (iOS 12+)
  const supportsQuickLook = isIOS;

  // Determine platform
  let platform: 'ios' | 'android' | 'desktop' = 'desktop';
  if (isIOS) platform = 'ios';
  else if (isAndroid) platform = 'android';

  // Recommend AR method
  let recommendedARMethod: 'webxr' | 'quicklook' | 'none' = 'none';
  if (supportsWebXR) {
    recommendedARMethod = 'webxr';
  } else if (supportsQuickLook) {
    recommendedARMethod = 'quicklook';
  }

  return {
    supportsWebXR,
    supportsQuickLook,
    platform,
    recommendedARMethod,
  };
}

export function isARSupported(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  const isIOS = /ipad|iphone|ipod/.test(userAgent);
  const hasWebXR = 'xr' in navigator;

  return isIOS || hasWebXR;
}
