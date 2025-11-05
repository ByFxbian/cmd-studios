'use client';

interface SectionMaskProps {
    bgColor: string;
}

export function SectionMask({bgColor}: SectionMaskProps) {
    return (
        <div 
            className={`absolute top-0 left-0 w-full h-16 md:h-24 
                ${bgColor} 
                mask-wave 
                -mt-16 md:-mt-24
                z-10`}
        />
    )
}