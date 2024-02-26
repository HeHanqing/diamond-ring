import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";
import { SheetProvider } from "@theatre/r3f";
import { getProject } from "@theatre/core";
import state from "./ring1.json";
import { atom, useAtom } from "jotai";
import { isEnterAtom, ringLoadedAtom } from "./state/GlobalState.js";
import RingScene from "./ui/RingScene";
import TextContent from "./ui/TextContent";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Loader from "./components/Loader.jsx";

// studio.initialize();
// studio.extend(extension);

const project = getProject("Diamonds Ring", { state: state });
const sheet = project.sheet("ring");

export const sheetAtom = atom(sheet);

const HomePage = () => {
  const [ringLoaded] = useAtom(ringLoadedAtom);
  const [isEnter] = useAtom(isEnterAtom);

  return (
    <div className="h-screen relative">
      {ringLoaded && <TextContent />}
      <Canvas
        gl={{ physicallyCorrentLights: true, preserveDrawingBuffer: true }}
      >
        {/* <Perf /> */}
        <ScrollControls pages={4} enabled={isEnter}>
          <SheetProvider sheet={sheet}>
            <RingScene />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default HomePage;
