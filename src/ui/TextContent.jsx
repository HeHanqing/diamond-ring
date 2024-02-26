import {
  isCustomizeAtom,
  scene1Atom,
  scene2Atom,
  scene3Atom,
  scene4Atom,
} from "../state/GlobalState";
import CustomizePage from "./CustomizePage";
import FirstPageContent from "./FirstPageContent";
import FourthPageContent from "./FourthPageContent";
import Navbar from "./Navbar";
import SecondPageContent from "./SecondPageContent";
import ThirdPageContent from "./ThirdPageContent";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

const TextContent = () => {
  const audioRef = useRef();
  const [scene1] = useAtom(scene1Atom);
  const [scene2] = useAtom(scene2Atom);
  const [scene3] = useAtom(scene3Atom);
  const [scene4] = useAtom(scene4Atom);
  const [isCustomize] = useAtom(isCustomizeAtom);

  const [scene1HiddenState, setScene1HiddenState] = useState("hidden");
  const [scene2HiddenState, setScene2HiddenState] = useState("hidden");
  const [scene3HiddenState, setScene3HiddenState] = useState("hidden");
  const [scene4HiddenState, setScene4HiddenState] = useState("hidden");

  useEffect(() => {
    if (scene1) {
      setScene1HiddenState("");
    }
    if (scene2) {
      setScene2HiddenState("");
    }
    if (scene3) {
      setScene3HiddenState("");
    }
    if (scene4) {
      setScene4HiddenState("");
    }
  }, [scene2, scene3, scene4, scene1]);
  return (
    <>
      <Navbar
        customClassName={`${scene1HiddenState} ${
          scene1 ? "fade-in-top" : "fade-out-top"
        }`}
        audioRef={audioRef}
      />
      <FirstPageContent
        customClassName={`${scene1HiddenState} ${
          scene1 ? "fade-in-bottom" : "fade-out-bottom"
        }`}
        audioRef={audioRef}
      />
      <SecondPageContent
        customClassName={`${scene2HiddenState} ${
          scene2 ? "fade-in-right" : "fade-out-right"
        }`}
      />
      <ThirdPageContent
        customClassName={`${scene3HiddenState} ${
          scene3 ? "fade-in-left" : "fade-out-left"
        }`}
      />
      <FourthPageContent
        customClassName={`${scene4HiddenState} ${
          scene4 ? "fade-in-bottom2" : "fade-out-bottom2"
        }`}
      />
      {isCustomize && <CustomizePage />}
    </>
  );
};

export default TextContent;
