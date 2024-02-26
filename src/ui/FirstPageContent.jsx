import { useAtom } from "jotai";
import Buttom from "../components/Buttom";
import { isStartedAtom, scene1Atom } from "../state/GlobalState";

const FirstPageContent = ({ customClassName, audioRef }) => {
  const [, setIsStarted] = useAtom(isStartedAtom);
  const [activeButtom] = useAtom(scene1Atom);

  function handlerClick() {
    setIsStarted(true);
    audioRef.current.play();
  }

  return (
    <div
      className={`h-screen w-screen absolute flex justify-center pointer-events-none items-center z-10 ${customClassName}`}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-main font-playfair text-9xl">NATURE&apos;S </h1>
        <h1 className="text-main font-playfair text-9xl">EMBRACE </h1>
        <p className="w-5/12 font-gilroy text-main text-sm text-center mb-10 mt-8">
          This ring symbolizes a profound connection with nature, where each
          leaf pays unique homage to the beauty of the natural world. Wearing
          &quot;Nature&apos;s Embrace&quot;, you carry with you the timeless
          power and pure beauty of nature, making it an integral part of your
          life.
        </p>
        <audio ref={audioRef} preload="auto" src="./music.mp4" />
        <Buttom
          title={"Start now"}
          click={handlerClick}
          disabled={!activeButtom}
        />
      </div>
    </div>
  );
};

export default FirstPageContent;
