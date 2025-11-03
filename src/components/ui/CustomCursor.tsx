'use client';

import { pointerRef } from "@/lib/three-store";
import { motion, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
    const [isDesktop] = useState(() => {
        if(typeof window !== 'undefined') {
            return window.innerWidth >= 1024;
        }
        return false;
    });

    const cursorRef = useRef<HTMLDivElement>(null);
    const innerCursorRef = useRef<HTMLDivElement>(null);
    const isHoveringRef = useRef(false);

    useEffect(() => {
        if (!isDesktop || !cursorRef.current) return;

        const accentColor = '#14b8a6';

        gsap.set(cursorRef.current, { 
            x: -100, 
            y: -100, 
            translateX: '-50%', 
            translateY: '-50%',
            opacity: 1 
        });

        const quickSetX = gsap.quickTo(cursorRef.current, "x", { 
            duration: 0.1,
            ease: "power3"
        });
            const quickSetY = gsap.quickTo(cursorRef.current, "y", { 
            duration: 0.1, 
            ease: "power3" 
        });

        const onMouseMove = (event: PointerEvent) => {
            const { clientX, clientY, target } = event;

            quickSetX(clientX);
            quickSetY(clientY);

            const targetEl = target as HTMLElement;
            const isCurrentlyHovering = !!targetEl.closest('a, button, [role="button"], .cursor-pointer');
            if (isCurrentlyHovering && !isHoveringRef.current) {
                isHoveringRef.current = true;

                gsap.to(cursorRef.current, { 
                    scale: 1.3, 
                    backgroundColor: accentColor,
                    duration: 0.2, 
                    ease: 'power3.out' 
                });
            } else if (!isCurrentlyHovering && isHoveringRef.current) {
                isHoveringRef.current = false;

                gsap.to(cursorRef.current, { 
                    scale: 1, 
                    backgroundColor: 'transparent',
                    duration: 0.2, 
                    ease: 'power3.out' 
                });
            }
        };

        window.addEventListener('pointermove', onMouseMove);
        document.body.style.cursor = 'none';

        return () => {
            window.removeEventListener('pointermove', onMouseMove);
            document.body.style.cursor = 'auto';
        };
    }, [isDesktop]);

    if (!isDesktop) {
        return null;
    }

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-accent pointer-events-none"
            style={{
                zIndex: 9999,
                opacity: 0,
                backgroundColor: 'transparent',
            }}
        />
    )
}