import RingModel from "../models/RingModel";
import {
  currentPageAtom,
  isCustomizeAtom,
  isEnterAtom,
  isStartedAtom,
  scene1Atom,
  scene2Atom,
  scene3Atom,
  scene4Atom,
} from "../state/GlobalState";
import {
  Environment,
  OrbitControls,
  useEnvironment,
  useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  N8AO,
  ToneMapping,
} from "@react-three/postprocessing";
import { val } from "@theatre/core";
import { PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import { useAtom } from "jotai";
import { useCallback, useEffect, useRef, useState } from "react";

const RingScene = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  const [isStarted, setIsStarted] = useAtom(isStartedAtom);
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [isCustomize] = useAtom(isCustomizeAtom);
  const [, setScene1] = useAtom(scene1Atom);
  const [, setScene2] = useAtom(scene2Atom);
  const [, setScene3] = useAtom(scene3Atom);
  const [, setScene4] = useAtom(scene4Atom);
  const [isEnter, setIsEnter] = useAtom(isEnterAtom);

  useEffect(() => {
    const playEnterSequence = async () => {
      await sheet.sequence.play({ range: [0, 2] });
      setIsEnter(true);
    };
    playEnterSequence();
  }, [sheet, setIsEnter]);

  useEffect(() => {
    if (isStarted) {
      scroll.el.scrollTo({ top: 1000 });
    }
    setIsStarted(false);
  }, [isStarted, scroll.el, setIsStarted]);

  const sequenceLength = val(sheet.sequence.pointer.length) - 8;

  const logCurrentPageCallback = useCallback(
    (scroll, callback) => {
      const currentPage = scroll.offset * scroll.pages + 1;

      callback(currentPage);

      if (currentPage >= 1 && currentPage < 1.5) {
        setScene1(true);
      } else {
        setScene1(false);
      }

      if (currentPage >= 2 && currentPage < 2.8) {
        setScene2(true);
      } else {
        setScene2(false);
      }

      if (currentPage >= 3 && currentPage < 3.8) {
        setScene3(true);
      } else {
        setScene3(false);
      }

      if (currentPage >= 4 && !isCustomize) {
        setScene4(true);
      } else {
        setScene4(false);
      }
    },
    [setScene1, setScene2, setScene3, setScene4, isCustomize]
  );

  useFrame(() => {
    if (scroll && isEnter && !isCustomize) {
      logCurrentPageCallback(scroll, setCurrentPage);
      sheet.sequence.position = scroll.offset * sequenceLength + 2;
    }
  });

  const env = useEnvironment({ files: "/images/gem.hdr" });
  const diamondsColor = "#FFF";

  return (
    <>
      <Environment map={env} background blur={1} />
      <PerspectiveCamera
        theatreKey="camera"
        makeDefault
        position={[0, 0, 0]}
        fov={90}
        near={0.1}
        far={70}
      />
      {/* <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      /> */}
      {/* {isCustomize && <OrbitControls />} */}
      <directionalLight intensity={3} />

      <RingModel
        position={[0, 0, 0]}
        scale={1}
        env={env}
        diamonds={diamondsColor}
      />
      <EffectComposer>
        <N8AO aoRadius={0.15} intensity={4} distanceFalloff={2} />
        <Bloom luminanceThreshold={3.5} intensity={3} mipmapBlur />
        <ToneMapping />
      </EffectComposer>
    </>
  );
};

export default RingScene;
