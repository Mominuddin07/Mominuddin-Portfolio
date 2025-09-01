"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
  const ref = useRef();

  // Generate positions once using useMemo for better performance
  const positions = useMemo(() => {
    return random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 });
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
    }
  });

  if (!positions.length) return null; // Prevents errors

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>

        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002} // Adjust to make stars visible
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Detect mobile screens
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="w-full h-screen fixed inset-0 z-[-1]" style={{ backgroundColor: "black" }}>
      {!isMobile && (
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default StarsCanvas;
