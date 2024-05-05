import {
  OrbitControls,
  RenderTexture,
  PerspectiveCamera,
  Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Three = () => {
  return (
    <div className="container vh-100 loading">
      <Canvas camera={{position:[5,5,5]}}>
        {/* only threejs element inside of <Canvas></Canvas> */}
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Cube />
      </Canvas>
    </div>
  );
};

const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime))
  );

  return (
    <mesh>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="pink">
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["orange"]} />
     
            <Text
              ref={textRef}
              fontSize={2}
              color="#555"
                          >
              Hello
            </Text>
   
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Three;
