'use client';

import { Suspense, useEffect, useRef, useState, type ReactNode } from 'react';
import { Canvas, } from '@react-three/fiber';
import { Environment,Preload, useGLTF } from '@react-three/drei';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLoading } from '@/context/LoadingContext';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

useGLTF.preload('/models/model2.glb');

/*const onPointerMove = (event: PointerEvent) => {
  pointerRef.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointerRef.y = -(event.clientY / window.innerHeight) * 2 + 1;
};*/

function ModelLoader() {
  const { setIsLoaded } = useLoading();
  useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  return null;
}

/*function MeshComponent() {
    const meshRef = useRef<THREE.Mesh>(null!);

    return (
        <mesh ref={meshRef} position={[0, 0, -2]}> 
            <icosahedronGeometry args={[2, 0]} />
            <meshStandardMaterial color="#14b8a6" wireframe />
        </mesh>
    );
}*/

export function HeroCanvas() {
  {/*const { setIsLoaded: setGlobalIsLoaded } = useLoading();

  const [isModelActuallyLoaded, setIsModelActuallyLoaded] = useState(false);
  const [isMinTimePassed, setIsMinTimePassed] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null!);

  const pathname = usePathname();

  const isContactPage = pathname === '/contact';

  function ModelLoaderHelper() {
    useEffect(() => {
      setIsModelActuallyLoaded(true);
    }, []);
    return null;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMinTimePassed(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
      if (isModelActuallyLoaded && isMinTimePassed) {
        setGlobalIsLoaded(true);
      }
    } else {
      if (isMinTimePassed) {
        setGlobalIsLoaded(true);
      }
    }
  }, [isModelActuallyLoaded, isMinTimePassed, setGlobalIsLoaded]);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    const canvasEl = canvasRef.current;

    ScrollTrigger.getAll().forEach(t => t.kill());

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });
    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    if (isDesktop) {
      //window.addEventListener('pointermove', onPointerMove);
      if (isContactPage && canvasEl) {
        gsap.set(canvasEl, { opacity: 0 });
      } else if (pathname === '/' && canvasEl) {
        gsap.to(canvasEl, {
          opacity: 0,
          scrollTrigger: {
            trigger: "body",
            start: "250vh top",
            end: "300vh top",
            scrub: true,
          }
        });
      } else if (canvasEl) {
        gsap.set(canvasEl, { opacity: 0.3 });
      }
    }

    return () => {
      lenis.destroy();
      if (isDesktop) {
        //window.addEventListener('pointermove', onPointerMove);
      }
      ScrollTrigger.getAll().forEach(t => t.kill());
      document.body.classList.remove('on-dark-panel');
    };
  }, [pathname, isContactPage]);
*/}
  return (
    <>
      <Canvas
        //ref={canvasRef}
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
          {/*<Model />*/}
          <Preload all />
          <ModelLoader />
        </Suspense>
      </Canvas>
    </>
  );
}