import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    const points = new Float32Array(2500 * 3);
    for (let i = 0; i < 2000; i++) {
      const x = Math.random() * 2 - 1; // range from -1 to 1
      const y = Math.random() * 2 - 1;
      const z = Math.random() * 2 - 1;
      const length = Math.sqrt(x * x + y * y + z * z);
      const scale = 1.2 / length;
      points[i * 3] = x * scale;
      points[i * 3 + 1] = y * scale;
      points[i * 3 + 2] = z * scale;
    }
    return points;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#cecece"
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[0]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
