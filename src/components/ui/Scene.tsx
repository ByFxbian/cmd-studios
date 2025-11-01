'use client';

import { RefObject, Suspense, useEffect, useRef, type ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import * as THREE from 'three';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pointerRef = new THREE.Vector2();

const onPointerMove = (event: PointerEvent) => {
  pointerRef.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointerRef.y = -(event.clientY / window.innerHeight) * 2 + 1;
};

function MeshComponent() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame(({ viewport }) => {
      const x = (pointerRef.x * viewport.width) / 2;
      const y = (pointerRef.y * viewport.height) / 2;

      if (meshRef.current) {
        meshRef.current.position.lerp(new THREE.Vector3(x, y, 0), 0.05);
        meshRef.current.rotation.x += 0.001;
        meshRef.current.rotation.y += 0.005;
      }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, -2]}> 
            <icosahedronGeometry args={[2, 0]} />
            <meshStandardMaterial color="#14b8a6" wireframe />
        </mesh>
    );
}

/*function LenisSync({ lenisRef }: { lenisRef: RefObject<Lenis | null> }) {
  useFrame((state, delta) => {
    lenisRef.current?.raf(delta * 1000);
  });
  return null;
}*/

export function Scene({ children }: { children: ReactNode }) {
  //const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });
    //lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    
    /*const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);*/
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    window.addEventListener('pointermove', onPointerMove);

    return () => {
      lenis.destroy();
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return (
    <>
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 0,
          opacity: 0.5,
        }}
        camera={{ position: [0, 0, 5], fov: 50 }}
        shadows
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <MeshComponent />
          <Preload all />
        </Suspense>
      </Canvas>
      {children}
    </>
  );
}