"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

export default function Ash(props) {
  const { nodes, materials } = useGLTF('/models/ash_ketchum.glb')

  const modelRef=useRef();
  useFrame((state) => {
    modelRef.current.position.y =
      -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
  });
  return (
    <group {...props} dispose={null}
    ref={modelRef}
    scale={[2,2,2]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.008}>
        <group position={[-81.142, -79.909, -15.634]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.initialShadingGroup}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.lambert2SG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.lambert3SG}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/ash_ketchum.glb')

