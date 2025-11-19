import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Box, Lightbulb, RotateCw, Sparkles } from 'lucide-react';

type ColorShape = 'box' | 'sphere' | 'torus' | 'cone';

interface ControlPanelProps {
  wireframe: boolean;
  setWireframe: (value: boolean) => void;
  showStats: boolean;
  setShowStats: (value: boolean) => void;
  lightIntensity: number;
  setLightIntensity: (value: number) => void;
  animationSpeed: number;
  setAnimationSpeed: (value: number) => void;
  colors: {
    box: string;
    sphere: string;
    torus: string;
    cone: string;
  };
  onColorChange: (shape: ColorShape, color: string) => void;
  onResetCamera: () => void;
}

export function ControlPanel({
  wireframe,
  setWireframe,
  showStats,
  setShowStats,
  lightIntensity,
  setLightIntensity,
  animationSpeed,
  setAnimationSpeed,
  colors,
  onColorChange,
  onResetCamera,
}: ControlPanelProps) {
  return (
    <div className="space-y-6">
      {/* Display Controls */}
      <Card className="border-2 hover:border-primary/50 transition-all bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-lg">Display Controls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="wireframe" className="flex items-center gap-2">
              <Box className="w-4 h-4" />
              Wireframe Mode
            </Label>
            <Switch
              id="wireframe"
              checked={wireframe}
              onCheckedChange={setWireframe}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="stats" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Show FPS
            </Label>
            <Switch
              id="stats"
              checked={showStats}
              onCheckedChange={setShowStats}
            />
          </div>

          <div className="pt-2">
            <Button
              onClick={onResetCamera}
              className="w-full gap-2"
              variant="outline"
            >
              <RotateCw className="w-4 h-4" />
              Reset Camera
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Lighting Controls */}
      <Card className="border-2 hover:border-primary/50 transition-all bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Lighting
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Intensity</Label>
              <Badge variant="secondary">{lightIntensity.toFixed(1)}</Badge>
            </div>
            <Slider
              value={[lightIntensity]}
              onValueChange={(value) => setLightIntensity(value[0])}
              min={0}
              max={3}
              step={0.1}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Animation Controls */}
      <Card className="border-2 hover:border-primary/50 transition-all bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-lg">Animation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Speed</Label>
              <Badge variant="secondary">{animationSpeed.toFixed(1)}x</Badge>
            </div>
            <Slider
              value={[animationSpeed]}
              onValueChange={(value) => setAnimationSpeed(value[0])}
              min={0}
              max={3}
              step={0.1}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Color Controls */}
      <Card className="border-2 hover:border-primary/50 transition-all bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-lg">Object Colors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {Object.entries(colors).map(([shape, color]) => (
            <div key={shape} className="flex items-center justify-between">
              <Label className="capitalize">{shape}</Label>
              <input
                type="color"
                value={color}
                onChange={(e) => onColorChange(shape as ColorShape, e.target.value)}
                className="w-12 h-8 rounded border-2 border-border cursor-pointer"
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
