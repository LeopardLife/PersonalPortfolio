import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

/**
 * Export Three.js scene to GLTF format
 * This will be used as intermediate format before converting to USDZ
 */
export async function exportSceneToGLTF(scene: THREE.Scene): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const exporter = new GLTFExporter();

    exporter.parse(
      scene,
      (result) => {
        const blob = new Blob([JSON.stringify(result)], { type: 'application/json' });
        resolve(blob);
      },
      (error) => {
        reject(error);
      },
      { binary: false }
    );
  });
}

/**
 * Export specific object to GLTF
 */
export async function exportObjectToGLTF(object: THREE.Object3D): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const exporter = new GLTFExporter();

    exporter.parse(
      object,
      (result) => {
        const blob = new Blob([JSON.stringify(result)], { type: 'application/json' });
        resolve(blob);
      },
      (error) => {
        reject(error);
      },
      { binary: false }
    );
  });
}

/**
 * Create downloadable link for GLTF file
 */
export function downloadGLTF(blob: Blob, filename: string = 'model.gltf') {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

/**
 * Note: USDZ conversion requires server-side processing
 * For now, we'll provide pre-converted USDZ files
 *
 * Options for USDZ conversion:
 * 1. Use Reality Converter (Mac app) - manual
 * 2. Use online service (e.g., Vectary, Sketchfab)
 * 3. Implement server-side conversion with USD Python tools
 */
export const USDZ_MODELS = {
  box: '/models/box.usdz',
  sphere: '/models/sphere.usdz',
  torus: '/models/torus.usdz',
  cone: '/models/cone.usdz',
  combined: '/models/scene.usdz',
};
