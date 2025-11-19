'use client';

import { Button } from '@/components/ui/button';
import { detectARCapabilities } from '@/lib/ar/detectAR';
import { USDZ_MODELS } from '@/lib/ar/exportModel';
import { Smartphone } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ARButtonProps {
  onWebXRClick?: () => void;
  disabled?: boolean;
}

export function ARButton({ onWebXRClick, disabled }: ARButtonProps) {
  const [arCapabilities, setArCapabilities] = useState({
    supportsWebXR: false,
    supportsQuickLook: false,
    platform: 'desktop' as const,
    recommendedARMethod: 'none' as const,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    detectARCapabilities().then((capabilities) => {
      setArCapabilities(capabilities);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <Button variant="outline" disabled className="gap-2">
        <Smartphone className="w-4 h-4" />
        Checking AR...
      </Button>
    );
  }

  // No AR support
  if (arCapabilities.recommendedARMethod === 'none') {
    return (
      <Button variant="outline" disabled className="gap-2">
        <Smartphone className="w-4 h-4" />
        AR Not Supported
      </Button>
    );
  }

  // WebXR (Android)
  if (arCapabilities.recommendedARMethod === 'webxr') {
    return (
      <Button
        variant="default"
        onClick={onWebXRClick}
        disabled={disabled}
        className="gap-2 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90"
      >
        <Smartphone className="w-4 h-4" />
        View in AR (WebXR)
      </Button>
    );
  }

  // Quick Look (iOS)
  if (arCapabilities.recommendedARMethod === 'quicklook') {
    return (
      <a
        href={USDZ_MODELS.combined}
        rel="ar"
        className="inline-block"
      >
        <Button
          variant="default"
          className="gap-2 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90"
          asChild
        >
          <span>
            <Smartphone className="w-4 h-4" />
            View in AR (Quick Look)
          </span>
        </Button>
      </a>
    );
  }

  return null;
}

// Individual object AR buttons for iOS
interface QuickLookButtonProps {
  modelType: 'box' | 'sphere' | 'torus' | 'cone';
  label?: string;
}

export function QuickLookButton({ modelType, label }: QuickLookButtonProps) {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsIOS(/ipad|iphone|ipod/.test(userAgent));
  }, []);

  if (!isIOS) return null;

  return (
    <a
      href={USDZ_MODELS[modelType]}
      rel="ar"
      className="inline-block"
    >
      <Button
        variant="outline"
        size="sm"
        className="gap-2"
        asChild
      >
        <span>
          <Smartphone className="w-3 h-3" />
          {label || `AR ${modelType}`}
        </span>
      </Button>
    </a>
  );
}
