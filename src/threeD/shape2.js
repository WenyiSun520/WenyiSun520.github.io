import * as THREE from "three";
import {
  MeshPortalMaterial,
  OrbitControls,
  RoundedBox,
  useTexture,
  Center,
  Text3D
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


const Shape2 = () => {
  return (
    <div className="container vh-100 loading">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <View />
      </Canvas>
    </div>
  );
};

const View = () => {
  const view = useTexture("./imgs/IMG_8678.png");
  return (
    <>
      <RoundedBox args={[2, 3, 0.1]}>
        <planeGeometry args={[5, 10, 2, 2]} />
        <MeshPortalMaterial side={THREE.DoubleSide}>
          <ambientLight intensity={3} />
          <OrbitControls />
          <Center rotation={[-0.3, 0.5, -0.25]}>
            <Text3D
            position={[1,6,0]}
            
              curveSegments={32}
              bevelEnabled
              bevelSize={0.04}
              bevelThickness={0.1}
              height={0.5}
              lineHeight={0.5}
              letterSpacing={-0.06}
              size={0.8}
              font={"/Pacifico_Regular.json"}
            >
              Hi
              <meshNormalMaterial />
            </Text3D>
          </Center>
          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial map={view} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </>
  );
};

export default Shape2;
