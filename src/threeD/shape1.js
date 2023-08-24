import { Canvas } from "@react-three/fiber";
import { Text3D, OrbitControls,Center } from "@react-three/drei";
const Shape1 = () => {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <Center rotation={[-0.5, -0.25, 0]}>
        <Text3D
        color={["white","red","pink"]}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1.5}
          font={"/Pacifico_Regular.json"}
        >
          {`Hello`}
          <meshNormalMaterial />
        </Text3D>
      </Center>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default Shape1;
