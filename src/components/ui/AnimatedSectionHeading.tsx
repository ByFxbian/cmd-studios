'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLoading } from '@/context/LoadingContext';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionHeadingProps {
  title: string;
  className?: string;
  textClasses?: string;
  outlineColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

export function AnimatedSectionHeading({ title, className, textClasses = 'text-4xl md:text-5xl font-bold tracking-tighter leading-none', outlineColor = 'var(--color-heading)', fillColor = 'var(--color-heading)', strokeWidth = 0.5 }: AnimatedSectionHeadingProps) {
    const { isLoaded } = useLoading();
    const triggerRef = useRef<HTMLDivElement>(null);
    const filledTextRef = useRef<SVGRectElement>(null);

    useLayoutEffect(() => {
        if(!isLoaded || !triggerRef.current || !filledTextRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                filledTextRef.current,
                { attr: { y: '100%', height: '0%' } },
                {
                    attr: { y: '0%', height: '100%' },
                    ease: 'none',
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: 'top 80%',
                        end: 'bottom 60%',
                        scrub: 1,
                    },
                }
            );
        }, triggerRef);

        return () => ctx.revert();
    }, [isLoaded]);

    return (
        <div ref={triggerRef} className={`relative ${className || ''}`}>
            <svg
                role="img"
                aria-label={title}
                style={{ display: 'block', overflow: 'visible' }}
                height="auto"
                width="100%"
            >
                <defs>
                    <filter id="outer-stroke" colorInterpolationFilters="sRGB">
                        <feMorphology in="SourceAlpha" operator="dilate" radius={strokeWidth} result="DILATE" />
                        <feComposite in="DILATE" in2="SourceAlpha" operator="out" result="OUTSIDE" />
                        <feFlood floodColor={outlineColor} result="COLOR" />
                        <feComposite in="COLOR" in2="OUTSIDE" operator="in" result="STROKE" />
                    </filter>

                    <mask id="fill-reveal" maskUnits="objectBoundingBox">
                        <rect ref={filledTextRef} x="0" y="100%" width="100%" height="0%" fill="#fff" />
                    </mask>
                </defs>

                <text
                    x="0"
                    y="1em"
                    filter="url(#outer-stroke)"
                    fill="black"
                    className={textClasses}
                    style={{
                        textRendering: 'geometricPrecision',
                    }}
                >
                    {title}
                </text>

                <g mask="url(#fill-reveal)">
                    <text
                        x="0"
                        y="1em"
                        fill={fillColor}
                        className={textClasses}
                        style={{
                            textRendering: 'geometricPrecision',
                        }}
                    >
                        {title}
                    </text>
                </g>
            </svg>
            </div>
    );
}