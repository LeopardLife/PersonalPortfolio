import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function InfoCards() {
  return (
    <div className="mt-12 grid md:grid-cols-3 gap-6">
      <Card className="border-2 hover:border-primary/50 transition-all bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-base">Camera Controls</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>• <strong>Left Click + Drag:</strong> Rotate camera</p>
          <p>• <strong>Scroll Wheel:</strong> Zoom in/out</p>
          <p>• <strong>Reset Button:</strong> Return to default</p>
        </CardContent>
      </Card>

      <Card className="border-2 hover:border-primary/50 transition-all bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-base">Technologies Used</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>• <strong>Three.js:</strong> 3D graphics library</p>
          <p>• <strong>React:</strong> UI framework</p>
          <p>• <strong>TypeScript:</strong> Type safety</p>
        </CardContent>
      </Card>

      <Card className="border-2 hover:border-primary/50 transition-all bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-base">Features</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>• Real-time lighting adjustments</p>
          <p>• Customizable object colors</p>
          <p>• Performance monitoring (FPS)</p>
        </CardContent>
      </Card>
    </div>
  );
}
