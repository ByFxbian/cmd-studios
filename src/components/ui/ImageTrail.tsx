'use client';

import { allProjects } from "@/lib/portfolio-data";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import gsap from 'gsap';

interface ImageItem {
    id: number;
    x: number;
    y: number;
    src: string;
    rotation: number;
}

interface ImageTrailProps {
    containerRef: RefObject<HTMLElement>;
}

export function ImageTrail({containerRef}: ImageTrailProps) {
    const [isDesktop] = useState(() => {
        if(typeof window !== 'undefined') return window.innerWidth >= 1024;
        return false;
    });

    const [images, setImages] = useState<ImageItem[]>([]);
    const [imageIndex, setImageIndex] = useState(0);

    const throttleRef = useRef(false);

    const trailContainerRef = useRef<HTMLDivElement>(null);

    const spawnImage = useCallback((e: PointerEvent) => {
        const containerRect = trailContainerRef.current?.getBoundingClientRect();
        if(!containerRect) return;

        const newImage: ImageItem = {
            id: Date.now(),
            x: e.clientX - containerRect.left,
            y: e.clientY - containerRect.top,
            src: allProjects[imageIndex].imageUrl,
            rotation: Math.random() * 20 - 10,
        };

        setImages((prev) => [...prev, newImage]);
        setImageIndex((prev) => (prev + 1) % allProjects.length);

        setTimeout(() => {
            setImages((prev) => prev.filter((img) => img.id !== newImage.id));
        }, 1500);
    }, [imageIndex]);

    useEffect(() => {
        const container = containerRef.current;
        if(!isDesktop || !container) return;

        const throttledSpawn = (e: PointerEvent) => {
            if(throttleRef.current) return;

            throttleRef.current = true;

            spawnImage(e);

            setTimeout(() => {
                throttleRef.current = false;
            }, 400);
        };

        container.addEventListener('pointermove', throttledSpawn);

        return () => {
            container.removeEventListener('pointermove', throttledSpawn);
        };
    }, [isDesktop, spawnImage, containerRef]);

    if(!isDesktop) return null;

    return (
        <div ref={trailContainerRef} className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
            <AnimatePresence>
                {images.map((img) => (
                <motion.div
                    key={img.id}
                    className="absolute"
                    style={{
                        top: 0,
                        left: 0,
                        x: img.x,
                        y: img.y,
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                    initial={{ scale: 0.5, opacity: 0, rotate: img.rotation }}
                    animate={{ scale: 1, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }}
                    exit={{ scale: 0.2, opacity: 0, transition: { duration: 1.5, ease: 'easeOut' } }}
                >
                    <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-lg overflow-hidden shadow-xl opacity-50">
                    <Image
                        src={img.src}
                        alt="Portfolio Image Trail"
                        fill
                        className="object-cover"
                        sizes="160px"
                    />
                    </div>
                </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}