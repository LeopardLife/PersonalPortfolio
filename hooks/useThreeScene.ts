import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface UseThreeSceneProps {
  colors: {
    box: string;
    sphere: string;
    torus: string;
    cone: string;
  };
  wireframe: boolean;
  lightIntensity: number;
  animationSpeed: number;
}

export function useThreeScene({
  colors,
  wireframe,
  lightIntensity,
  animationSpeed,
}: UseThreeSceneProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const objectsRef = useRef<THREE.Mesh[]>([]);
  const animationIdRef = useRef<number | null>(null);
  const [fps, setFps] = useState(60);
  const [isARActive, setIsARActive] = useState(false);

  // Initialize scene
  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(5, 5, 10);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.xr.enabled = true; // Enable WebXR
    canvasRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xff00ff, 0.5);
    pointLight.position.set(-10, -10, -5);
    scene.add(pointLight);

    const spotLight = new THREE.SpotLight(0xffffff, 0.8);
    spotLight.position.set(0, 10, 0);
    spotLight.angle = 0.3;
    spotLight.penumbra = 1;
    scene.add(spotLight);

    // Grid helper
    const gridHelper = new THREE.GridHelper(20, 20, 0x444444, 0x222222);
    scene.add(gridHelper);

    // Create 3D objects
    const objects = createObjects(colors);
    objects.forEach(obj => scene.add(obj));
    objectsRef.current = objects;

    // Mouse controls
    const controls = setupMouseControls(renderer, camera);

    // Animation loop
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsUpdateTime = performance.now();

    renderer.setAnimationLoop((time) => {
      const currentTime = performance.now();

      // Update FPS
      frameCount++;
      if (currentTime - fpsUpdateTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        fpsUpdateTime = currentTime;
      }

      // Animate objects
      objectsRef.current.forEach((obj, index) => {
        obj.rotation.x += 0.01 * animationSpeed;
        obj.rotation.y += 0.01 * animationSpeed;

        // Floating effect
        const originalY = [0, 0, 0, 0][index];
        obj.position.y = originalY + Math.sin(currentTime * 0.001 + index) * 0.3;
      });

      renderer.render(scene, camera);
    });

    // Handle window resize
    const handleResize = () => {
      if (!canvasRef.current || !camera || !renderer) return;
      camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      renderer.setAnimationLoop(null);
      controls.cleanup();
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (canvasRef.current && renderer.domElement.parentNode === canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Update wireframe
  useEffect(() => {
    objectsRef.current.forEach((obj) => {
      if (obj.material instanceof THREE.MeshStandardMaterial) {
        obj.material.wireframe = wireframe;
      }
    });
  }, [wireframe]);

  // Update colors
  useEffect(() => {
    const colorMap = [colors.box, colors.sphere, colors.torus, colors.cone];
    objectsRef.current.forEach((obj, index) => {
      if (obj.material instanceof THREE.MeshStandardMaterial) {
        obj.material.color.set(colorMap[index]);
      }
    });
  }, [colors]);

  // Update lighting
  useEffect(() => {
    if (!sceneRef.current) return;
    sceneRef.current.children.forEach((child) => {
      if (child instanceof THREE.AmbientLight) {
        child.intensity = lightIntensity * 0.3;
      } else if (child instanceof THREE.DirectionalLight) {
        child.intensity = lightIntensity;
      } else if (child instanceof THREE.PointLight) {
        child.intensity = lightIntensity * 0.5;
      } else if (child instanceof THREE.SpotLight) {
        child.intensity = lightIntensity * 0.8;
      }
    });
  }, [lightIntensity]);

  const resetCamera = () => {
    if (cameraRef.current) {
      cameraRef.current.position.set(5, 5, 10);
      cameraRef.current.lookAt(0, 0, 0);
    }
  };

  const startAR = async () => {
    if (!rendererRef.current) return;

    try {
      const session = await navigator.xr?.requestSession('immersive-ar', {
        requiredFeatures: ['local-floor', 'hit-test'],
        optionalFeatures: ['dom-overlay'],
        domOverlay: { root: document.body }
      });

      if (session) {
        rendererRef.current.xr.setSession(session);
        setIsARActive(true);

        session.addEventListener('end', () => {
          setIsARActive(false);
        });
      }
    } catch (error) {
      console.error('Failed to start AR session:', error);
    }
  };

  return { canvasRef, fps, resetCamera, startAR, isARActive };
}

// Helper functions
function createObjects(colors: { box: string; sphere: string; torus: string; cone: string }) {
  const objects: THREE.Mesh[] = [];

  // Box
  const boxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5); // Smaller for AR
  const boxMaterial = new THREE.MeshStandardMaterial({
    color: colors.box,
    metalness: 0.5,
    roughness: 0.2,
  });
  const box = new THREE.Mesh(boxGeometry, boxMaterial);
  box.position.set(-1, 0, -2);
  objects.push(box);

  // Sphere
  const sphereGeometry = new THREE.SphereGeometry(0.3, 32, 32);
  const sphereMaterial = new THREE.MeshStandardMaterial({
    color: colors.sphere,
    metalness: 0.5,
    roughness: 0.2,
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(1, 0, -2);
  objects.push(sphere);

  // Torus
  const torusGeometry = new THREE.TorusGeometry(0.25, 0.1, 16, 100);
  const torusMaterial = new THREE.MeshStandardMaterial({
    color: colors.torus,
    metalness: 0.5,
    roughness: 0.2,
  });
  const torus = new THREE.Mesh(torusGeometry, torusMaterial);
  torus.position.set(0, 0, -3);
  objects.push(torus);

  // Cone
  const coneGeometry = new THREE.ConeGeometry(0.3, 0.6, 32);
  const coneMaterial = new THREE.MeshStandardMaterial({
    color: colors.cone,
    metalness: 0.5,
    roughness: 0.2,
  });
  const cone = new THREE.Mesh(coneGeometry, coneMaterial);
  cone.position.set(0, 0, -1);
  objects.push(cone);

  return objects;
}

function setupMouseControls(renderer: THREE.WebGLRenderer, camera: THREE.PerspectiveCamera) {
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };
  const cameraRotation = { x: 0, y: 0 };

  const onMouseDown = (e: MouseEvent) => {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;

    cameraRotation.y += deltaX * 0.005;
    cameraRotation.x += deltaY * 0.005;

    // Limit vertical rotation
    cameraRotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, cameraRotation.x));

    // Update camera position
    const radius = Math.sqrt(
      camera.position.x ** 2 + camera.position.y ** 2 + camera.position.z ** 2
    );
    camera.position.x = radius * Math.sin(cameraRotation.y) * Math.cos(cameraRotation.x);
    camera.position.y = radius * Math.sin(cameraRotation.x);
    camera.position.z = radius * Math.cos(cameraRotation.y) * Math.cos(cameraRotation.x);
    camera.lookAt(0, 0, 0);

    previousMousePosition = { x: e.clientX, y: e.clientY };
  };

  const onMouseUp = () => {
    isDragging = false;
  };

  const onWheel = (e: WheelEvent) => {
    e.preventDefault();
    const zoomSpeed = 0.1;
    camera.position.z += e.deltaY * zoomSpeed * 0.01;
    camera.position.z = Math.max(5, Math.min(20, camera.position.z));
  };

  renderer.domElement.addEventListener('mousedown', onMouseDown);
  renderer.domElement.addEventListener('mousemove', onMouseMove);
  renderer.domElement.addEventListener('mouseup', onMouseUp);
  renderer.domElement.addEventListener('wheel', onWheel);

  return {
    cleanup: () => {
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      renderer.domElement.removeEventListener('mouseup', onMouseUp);
      renderer.domElement.removeEventListener('wheel', onWheel);
    },
  };
}
