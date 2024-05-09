import { OrbitControls, useAnimations, PresentationControls} from "@react-three/drei";
import { Canvas, useLoader} from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import React, {useEffect } from 'react';

const Scene = () => {
   const gltf = useLoader(GLTFLoader, "/models/coding.glb");
  const {actions, names} = useAnimations(gltf.animations, gltf.scene);

  useEffect(()=>{
    actions.coding.play();
  })
  //console.log(gltf.animations);
  return <primitive object={gltf.scene} position={[0.4,-0.4,-0.2]} scale={0.9} rotation={[-0.32,0.2,.3]}/>;
};


export default function Avatar() {
  
  return ( 
   <Canvas camera={{ position: [0, 1.4, 1.5] }} style={{ touchAction: 'none'}}>
      <directionalLight
        position={[1, 3.0, 4.4]}
        castShadow
        intensity={Math.PI * 2}
      />
      <pointLight position={[1,1,1]} />

         <PresentationControls snap global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
     <Scene />
         </PresentationControls>
      {/* <OrbitControls target={[0, 1, 0]} /> */}
      {/* <axesHelper args={[5]} /> */}
      {/* <Stats /> */}
    </Canvas>
  );
}
