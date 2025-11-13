'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from "react";
import { Mesh } from 'three';

export default function FloatingShape() {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
		<mesh ref={meshRef}>
			<dodecahedronGeometry args={[1, 0]} />
			<meshPhongMaterial
				color="#2563eb"
				wireframe={true}
				opacity={0.6}
				transparent={true}
			/>
		</mesh>
  );
}