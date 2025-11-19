'use client';

import { ControlPanel } from '@/components/3d/ControlPanel';
import { InfoCards } from '@/components/3d/InfoCards';
import { SceneCanvas } from '@/components/3d/SceneCanvas';
import { useThreeScene } from '@/hooks/useThreeScene';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useState } from 'react';

type ColorShape = 'box' | 'sphere' | 'torus' | 'cone';

export default function ThreeDemoPage() {
  // State management
  const [wireframe, setWireframe] = useState(false);
  const [colors, setColors] = useState({
    box: '#3b82f6',
    sphere: '#10b981',
    torus: '#f59e0b',
    cone: '#ef4444',
  });
  const [lightIntensity, setLightIntensity] = useState(1);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [showStats, setShowStats] = useState(true);

  // Three.js scene hook
  const { canvasRef, fps, resetCamera } = useThreeScene({
    colors,
    wireframe,
    lightIntensity,
    animationSpeed,
  });

  const handleColorChange = (shape: ColorShape, color: string) => {
    setColors(prev => ({ ...prev, [shape]: color }));
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      <div className="absolute top-32 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-64 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Interactive 3D Experience</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Three.js Demo
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Interactive 3D scene with camera controls, real-time lighting adjustments, and customizable animations.
            Built with vanilla Three.js.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <SceneCanvas
              canvasRef={canvasRef}
              showStats={showStats}
              fps={fps}
            />
          </motion.div>

          {/* Control Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ControlPanel
              wireframe={wireframe}
              setWireframe={setWireframe}
              showStats={showStats}
              setShowStats={setShowStats}
              lightIntensity={lightIntensity}
              setLightIntensity={setLightIntensity}
              animationSpeed={animationSpeed}
              setAnimationSpeed={setAnimationSpeed}
              colors={colors}
              onColorChange={handleColorChange}
              onResetCamera={resetCamera}
            />
          </motion.div>
        </div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <InfoCards />
        </motion.div>
      </div>
    </div>
  );
}
