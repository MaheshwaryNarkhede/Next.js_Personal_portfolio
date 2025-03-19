"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Pokeball(props) {
  const modelRef = useRef();

  let nodes, materials;
  try {
    ({ nodes, materials } = useGLTF("/models/pokemon_basic_pokeball.glb"));
  } catch (error) {
    console.error("Error loading model:", error);
    return null; 
  }

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.15;
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[0, 1.5, 0]} // Upper middle position
      scale={[0.2, 0.2, 0.2]} // Smaller size
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PokeBall__0.geometry}
        material={materials["Scene_-_Root"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.04}
      />
    </group>
  );
}

useGLTF.preload("/models/pokemon_basic_pokeball.glb");
