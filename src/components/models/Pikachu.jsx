"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

export default function pikachu(props) {
  const { nodes, materials } = useGLTF('/models/pikachu.glb')
  const modelRef=useRef();
  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });
  return (
    <group {...props} dispose={null}
    ref={modelRef}
    position={[1,-2,-3.5]}
    scale={[0.4,0.4,0.4]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.20627}>
          <primitive object={nodes.Armature_rootJoint} />
          <skinnedMesh
          castShadow
          receiveShadow
            geometry={nodes.bd0001_00_tailSkin_vis_0.geometry}
            material={materials.bodyA}
            skeleton={nodes.bd0001_00_tailSkin_vis_0.skeleton}
          />
          <skinnedMesh
          castShadow
          receiveShadow
            geometry={nodes.bd0001_00_eyeSkin_0.geometry}
            material={materials.material}
            skeleton={nodes.bd0001_00_eyeSkin_0.skeleton}
          />
          <skinnedMesh
          castShadow
          receiveShadow
            geometry={nodes.bd0001_00_eyeSkin_1.geometry}
            material={materials['Material.001']}
            skeleton={nodes.bd0001_00_eyeSkin_1.skeleton}
          />
          <skinnedMesh
          castShadow
          receiveShadow
            geometry={nodes.bd0001_00_tongueSkin_0.geometry}
            material={materials.mouth}
            skeleton={nodes.bd0001_00_tongueSkin_0.skeleton}
          />
          <skinnedMesh
          castShadow
          receiveShadow
            geometry={nodes.bd0001_00_bodySkin_0.geometry}
            material={materials.bodyA}
            skeleton={nodes.bd0001_00_bodySkin_0.skeleton}
          />
          <skinnedMesh
          castShadow
          receiveShadow
            geometry={nodes.bd0001_00_bodySkin_1.geometry}
            material={materials.mouth}
            skeleton={nodes.bd0001_00_bodySkin_1.skeleton}
          />
          <skinnedMesh
          castShadow
          receiveShadow
            geometry={nodes.bd0001_00_bodySkin_2.geometry}
            material={materials.bodyB}
            skeleton={nodes.bd0001_00_bodySkin_2.skeleton}
          />
          <skinnedMesh
          castShadow
          receiveShadow
            geometry={nodes.bd0001_00_bodySkin_3.geometry}
            material={materials.material_5}
            skeleton={nodes.bd0001_00_bodySkin_3.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/pikachu.glb')
