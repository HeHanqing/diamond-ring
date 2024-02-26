import React, { useEffect, useRef } from "react";
import { MeshRefractionMaterial, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useAtom } from "jotai";
import {
  isCustomizeAtom,
  leafColorAtom,
  ringColorAtom,
  ringLoadedAtom,
} from "../state/GlobalState";
import { useFrame } from "@react-three/fiber";

export default function RingModel({ diamonds, env, ...props }) {
  const [, setRingLoaded] = useAtom(ringLoadedAtom);
  const [isCustomize] = useAtom(isCustomizeAtom);
  const [leafColor] = useAtom(leafColorAtom);
  const [ringColor] = useAtom(ringColorAtom);
  const { nodes, materials } = useGLTF("./models/scene.glb");
  const ringRef = useRef();
  // const { nodes, materials } = useLoader(GLTFLoader, "./models/scene.glb");

  useEffect(() => {
    materials.liscie.color = new THREE.Color(leafColor);
    materials["default"].color = new THREE.Color(ringColor);
  }, [leafColor, materials, ringColor]);

  useFrame(() => {
    if (isCustomize) {
      ringRef.current.rotation.y += 0.005;
    } else {
      ringRef.current.rotation.y = 0;
    }
  });

  useEffect(() => {
    setRingLoaded(true);

    return () => {
      setRingLoaded(false);
    };
  }, [setRingLoaded]);

  const materialProps = {
    color: diamonds,
    // side: THREE.DoubleSide,
    envMap: env,
    envMapIntensity: 2,
    aberrationStrength: 0.03,
    toneMapped: false,
  };

  return (
    <group {...props} dispose={null} ref={ringRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.12}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-5.267, 5.612, 14.657]}
            rotation={[0.003, -0.292, 0.183]}
            scale={0.669}
          >
            <mesh
              geometry={nodes.krysztalek_low_krysztal_0.geometry}
              position={[-0.152, 0, -2.945]}
            >
              <MeshRefractionMaterial {...materialProps} />
            </mesh>
          </group>

          {/* <mesh
            geometry={nodes.krysztalki_low_krysztalki2_0.geometry}
            position={[14.651, 5.094, -0.373]}
            rotation={[-1.621, 1.467, 1.274]}
            scale={0.109}
          >
            <MeshRefractionMaterial {...materialProps} />
          </mesh>

          <mesh
            geometry={nodes.krysztalkimale_low_male_krysztalki_0.geometry}
            position={[-10.54, 2.827, 8.33]}
            rotation={[-0.809, -0.818, -1.212]}
            scale={0.067}
          >
            <MeshRefractionMaterial {...materialProps} />
          </mesh> */}
          <mesh
            geometry={nodes.listki_low_liscie_0.geometry}
            material={materials.liscie}
            position={[-41.243, -68.919, -58.016]}
            rotation={[-0.691, -1.138, 0.665]}
          />
          <mesh
            geometry={nodes.obrecze_low_default_0.geometry}
            material={materials["default"]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <group
            position={[-4.688, 5.611, 12.641]}
            rotation={[0.026, -0.311, -0.072]}
            scale={[0.669, 0.669, 0.48]}
          >
            <mesh
              geometry={nodes.przylepka_low_fgh_0.geometry}
              material={materials.liscie}
              position={[-0.151, 0, -0.833]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/scene.glb");
