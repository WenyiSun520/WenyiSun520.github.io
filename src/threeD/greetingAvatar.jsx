import { OrbitControls, useAnimations} from "@react-three/drei";
import { Canvas, useLoader} from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import React, {useEffect, useState } from 'react';
import * as THREE from 'three';



const Scene = (props) => {
 
  const gltf = useLoader(GLTFLoader, "/models/avatar.glb");
  const {actions, names} = useAnimations(gltf.animations, gltf.scene);
  
 

  useEffect(()=>{
    console.log(props.isPlayGreeting);
    if(props.isPlayGreeting){
    actions.greeting.setLoop(THREE.LoopOnce); // Set loop to play only once
    actions.greeting.clampWhenFinished = true;
    actions.greeting.play();
    
    // props.startAnimation();
    }else{
    actions.idle.play();
  }
  // return () => {
  //     actions.greeting.stop();
  //   };
  },[props.isPlayGreeting])
  
  return(
     <primitive object={gltf.scene} snap global scale={0.5} rotation={[Math.PI /50, Math.PI /55, 0]}/>
  )
}


export default function GreetingAvatar() {
   const [playGreeting, setPlayGreeting] = useState(false);
   const startAnimation = () => {
    setPlayGreeting(playGreeting=>!playGreeting);
  }
  
  return (
   <Canvas camera={{ position: [.3, 1, 1.08] }}  style={{ width: "30vw", height: "150vh" }} onClick={startAnimation}>
      <directionalLight
        position={[1, 3.0, 4.4]}
        castShadow
        intensity={Math.PI * 2}
      /> 
      <Scene isPlayGreeting={playGreeting} startAnimation={startAnimation}/> 
      {/* <OrbitControls target={[0, 1, 0]} /> */}
    </Canvas>
  );
}
