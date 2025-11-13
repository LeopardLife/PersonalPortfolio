// project-level JSX typings for model-viewer and react-three-fiber primitives

declare module 'model-viewer' {
  const ModelViewer: any;
  export default ModelViewer;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // common react-three-fiber primitives (basic permissive typing)
      mesh: any;
      group: any;
      perspectiveCamera: any;
      ambientLight: any;
      pointLight: any;
      spotLight: any;
      directionalLight: any;
      hemisphericLight: any;
      boxGeometry: any;
      sphereGeometry: any;
      dodecahedronGeometry: any;
      meshStandardMaterial: any;
      meshPhongMaterial: any;
      // allow any other elems to avoid TS errors during migration
      [elemName: string]: any;
    }
  }
}

export {};
