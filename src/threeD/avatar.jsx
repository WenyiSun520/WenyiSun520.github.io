import { Stats, OrbitControls, Circle ,Center,Text3D, useFBX,useAnimations} from "@react-three/drei";
import { Canvas, useLoader , useFrame} from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from 'three'; // Import Three.js
import React, { useRef, useEffect } from 'react';

const Scene = () => {
   const gltf = useLoader(GLTFLoader, "/models/avatar_animation.glb");
  const {actions, names} = useAnimations(gltf.animations, gltf.scene);

  useEffect(()=>{
    //actions.greeting.play();
    actions.salute.play();

  })
  // console.log(gltf.animations);
  return <primitive object={gltf.scene} position={[0, 0, 0]}
        children-0-castShadow/>;
};


export default function Avatar() {
  
  return (
   <Canvas camera={{ position: [0, 1.4, 1.5] }}>
      <directionalLight
        position={[3.3, 1.0, 4.4]}
        castShadow
        intensity={Math.PI * 2}
      />
      <pointLight position={[1,1,1]} />
     <Scene />
      {/* <OrbitControls target={[0, 1, 0]} /> */}
      {/* <axesHelper args={[5]} /> */}
      {/* <Stats /> */}
    </Canvas>
  );
}
