import { useAtom } from "jotai";
import Buttom from "../components/Buttom";
import { isCustomizeAtom, scene4Atom } from "../state/GlobalState";
import { useCurrentSheet } from "@theatre/r3f";
import { sheetAtom } from "../App";

const FourthPageContent = ({ customClassName }) => {
  const [activeButtom] = useAtom(scene4Atom);
  const [, setIsCustomize] = useAtom(isCustomizeAtom);
  const [, setScene4] = useAtom(scene4Atom);
  const [sheet] = useAtom(sheetAtom);

  async function handleClick() {
    setScene4(false);
    setIsCustomize(true);

    await sheet.sequence.play({ range: [11, 13] });
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <p
        className={`pointer-events-none font-savoye absolute text-[#9B9B9B] z-10 text-[400px] top-0 ${customClassName}`}
      >
        Costomize
      </p>
      <div
        className={`h-screen w-screen absolute flex flex-col pointer-events-none top-[10%]  justify-start items-center z-20 ${customClassName}`}
      >
        <div className="flex flex-col gap-4 items-center justify-center w-[80vw]">
          <p className="font-brush text-main text-2xl">
            give you a colorful lift
          </p>
          <h1 className="text-main font-playfair text-9xl">COLORFUL</h1>
          <p className="w-5/12 font-gilroy text-main text-sm text-center mb-4">
            Click on the buttons below to experience or develop a
            &quot;Nature&apos;s Embrace&quot; ring that is uniquely yours!
          </p>
          <Buttom
            title={"Costomize it"}
            disabled={!activeButtom}
            click={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default FourthPageContent;
