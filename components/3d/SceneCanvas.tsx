import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Box } from 'lucide-react';

interface SceneCanvasProps {
  canvasRef: React.RefObject<HTMLDivElement>;
  showStats: boolean;
  fps: number;
}

export function SceneCanvas({ canvasRef, showStats, fps }: SceneCanvasProps) {
  return (
    <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all bg-card/50 backdrop-blur">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Box className="w-5 h-5 text-primary" />
          3D Scene
          {showStats && (
            <Badge variant="secondary" className="ml-auto">
              {fps} FPS
            </Badge>
          )}
        </CardTitle>
        <CardDescription>
          Drag to rotate • Scroll to zoom
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          ref={canvasRef}
          className="w-full h-[600px] rounded-lg overflow-hidden"
          style={{ cursor: 'grab' }}
        />
      </CardContent>
    </Card>
  );
}
