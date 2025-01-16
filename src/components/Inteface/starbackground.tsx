"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

// Check for WebGL support
const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
};

const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffffff" // Fixed the color value
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false} // Fixed typo from "dethWrite" to "depthWrite"
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // Check WebGL compatibility on component mount
    setIsSupported(isWebGLAvailable());
  }, []);

  if (!isSupported) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black text-white">
        <p>Your device does not support WebGL. Please try on another device.</p>
      </div>
    );
  }

  return (
    <div
      className="w-screen h-screen fixed inset-0 z-[-1]"
      style={{
        backgroundColor: "black", // Fallback background color
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
