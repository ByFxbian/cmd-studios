'use client';

import { useRef, type JSX } from 'react';
import { useFrame, type ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';
import { pointerRef } from '@/lib/three-store';

export function Model(props: ThreeElements['group']): JSX.Element {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame(({ viewport }) => {
        const x = (pointerRef.x * viewport.width) / 2.5;
        const y = (pointerRef.y * viewport.height) / 2.5;

        if (groupRef.current) {
        groupRef.current.position.lerp(new THREE.Vector3(x, y, 0), 0.05);
        
        groupRef.current.rotation.y += 0.001;
        groupRef.current.rotation.x += 0.0005;
        }
    });

    return (
        <group 
            ref={groupRef} 
            {...props} 
            dispose={null}
            scale={0.4}
            position={[0, 0, 0]}
        >
        </group>
    );
}
