'use client';

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const CSS_VAR_CURSOR_BORDER = '--cursor-border-color';
const CSS_VAR_CURSOR_BG = '--cursor-bg-color';

export function CustomCursor() {
    const [isMounted, setIsMounted] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMounted(true);
            setIsDesktop(window.innerWidth >= 1024);
        }, 0);

        const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener('resize', checkDesktop);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', checkDesktop);
        };
    }, []);

    const cursorRef = useRef<HTMLDivElement>(null);
    const isHoveringRef = useRef(false);

    useEffect(() => {
        const cursorEl = cursorRef.current;
        if (!isDesktop || !cursorEl) return;

        const styles = getComputedStyle(document.body);
        const getAccentColor = () => styles.getPropertyValue(CSS_VAR_CURSOR_BORDER).trim() || '#FF4D00';
        const getBgColor = () => styles.getPropertyValue(CSS_VAR_CURSOR_BG).trim() || '#FF4D00';

        gsap.set(cursorRef.current, { 
            xPercent: -50, 
            yPercent: -50,
            opacity: 1,
            borderColor: getAccentColor()
        });

        const quickSetX = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3" });
        const quickSetY = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3" });

        const onMouseMove = (event: PointerEvent) => {
            const { clientX, clientY, target } = event;
            quickSetX(clientX);
            quickSetY(clientY);

            const targetEl = target as HTMLElement;
            const clickable = targetEl.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer, .group');
            
            if (clickable && !isHoveringRef.current) {
                isHoveringRef.current = true;
                gsap.to(cursorRef.current, { 
                    scale: 1.5, 
                    backgroundColor: getBgColor(),
                    borderColor: 'transparent',
                    mixBlendMode: 'normal', 
                    duration: 0.3, 
                    ease: 'power3.out' 
                });
            } else if (!clickable && isHoveringRef.current) {
                isHoveringRef.current = false;
                gsap.to(cursorRef.current, { 
                    scale: 1, 
                    backgroundColor: 'transparent',
                    borderColor: getAccentColor(),
                    mixBlendMode: 'normal',
                    duration: 0.3, 
                    ease: 'power3.out' 
                });
            }
        };

        window.addEventListener('pointermove', onMouseMove);
        document.body.style.cursor = 'none';

        return () => {
            window.removeEventListener('pointermove', onMouseMove);
            document.body.style.cursor = 'auto';
            if (cursorEl) {
                gsap.killTweensOf(cursorEl);
            }
        };
    }, [isDesktop]);

    if (!isMounted || !isDesktop) {
        return null;
    }

    return (
        <div
            ref={cursorRef}
            className="custom-cursor-ring fixed top-0 left-0 w-6 h-6 rounded-full border-2 pointer-events-none z-[9999]"
            style={{
                opacity: 0, 
            }}
        />
    )
}