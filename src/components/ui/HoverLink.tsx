'use client';

import { useState, useRef, useEffect } from 'react';
import Link, { type LinkProps } from 'next/link';
import { motion } from 'framer-motion';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

interface HoverLinkProps extends LinkProps {
  children: string;
  className?: string;
}

export function HoverLink({ children, className, ...props }: HoverLinkProps) {
    const [text, setText] = useState(children);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [isHovering, setIsHovering] = useState(false);

    const originalText = children;

    const shuffle = (targetText: string) => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
        const newText = targetText
            .split('')
            .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
                return targetText[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('');

        setText(newText);

        if (iteration >= targetText.length) {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }

        iteration += 1 / 3;
        }, 30);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
        shuffle(originalText);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
        setText(originalText);
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <Link
        {...props}
        className={`relative inline-block ${className || ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <span className="relative z-10">{text}</span>

        <motion.span
            className="absolute left-0 -bottom-0.5 h-[1px] bg-accent"
            style={{
            width: '100%',
            originX: 0.5,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovering ? 1 : 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        />
        </Link>
    );
}