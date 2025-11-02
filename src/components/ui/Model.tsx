'use client';

import { useEffect, useRef, type JSX } from 'react';
import { useFrame, type ThreeElements } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { pointerRef } from '@/lib/three-store';

export function Model(props: ThreeElements['group']): JSX.Element {
    const groupRef = useRef<THREE.Group>(null!);
    const { scene } = useGLTF('/models/model2.glb');

    useEffect(() => {
        const newMaterial = new THREE.MeshStandardMaterial({
            color: new THREE.Color().setHex(0x74E2D4FF),
            metalness: 0.5,
            roughness: 0.5,
        });
        scene.traverse((child) => {
            if(child instanceof THREE.Mesh) {
                child.material = newMaterial;
            }
        });
    }, [scene]);

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
        <primitive 
            object={scene} 
        />
        </group>
    );
}