'use client';

import { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLoading } from '@/context/LoadingContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}


function ModelLoader() {
  const { setIsLoaded } = useLoading();
  useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  return null;
}

export function HeroCanvas() {
  return (
    <>
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          opacity: 0.3,
        }}
        camera={{ position: [0, 0, 5], fov: 50 }}
        shadows
        className='fade-in hidden lg:block'
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1}/>
          <Environment preset="apartment"/>
          <Preload all />
          <ModelLoader />
        </Suspense>
      </Canvas>
    </>
  );
}