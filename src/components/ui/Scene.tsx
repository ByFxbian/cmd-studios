'use client';

import { RefObject, Suspense, useEffect, useRef, type ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Model } from './Model';
import { pointerRef } from '@/lib/three-store';

gsap.registerPlugin(ScrollTrigger);

useGLTF.preload('/models/model2.glb');

const onPointerMove = (event: PointerEvent) => {
  pointerRef.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointerRef.y = -(event.clientY / window.innerHeight) * 2 + 1;
};

function MeshComponent() {
    const meshRef = useRef<THREE.Mesh>(null!);

    return (
        <mesh ref={meshRef} position={[0, 0, -2]}> 
            <icosahedronGeometry args={[2, 0]} />
            <meshStandardMaterial color="#14b8a6" wireframe />
        </mesh>
    );
}

export function Scene({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });
    lenis.on('scroll', ScrollTrigger.update);
    
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
          opacity: 0.3,
        }}
        camera={{ position: [0, 0, 5], fov: 50 }}
        shadows={false}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1}/>
          <Environment preset="apartment"/>
          <Model />
          <Preload all />
        </Suspense>
      </Canvas>
      {children}
    </>
  );
}