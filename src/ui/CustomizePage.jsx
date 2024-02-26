import { useAtom } from "jotai";
import {
  isCustomizeAtom,
  leafColorAtom,
  ringColorAtom,
} from "../state/GlobalState";
import { useCurrentSheet } from "@theatre/r3f";
import { sheetAtom } from "../App";

import { SiOverleaf } from "react-icons/si";
import { FaRegCircle } from "react-icons/fa";
import { TbLeaf } from "react-icons/tb";
import { useEffect, useState } from "react";

const CustomizePage = ({ customClassName }) => {
  const [, setIsCustomize] = useAtom(isCustomizeAtom);
  const [leafColor, setLeafColor] = useAtom(leafColorAtom);
  const [ringColor, setRingColor] = useAtom(ringColorAtom);
  const [sheet] = useAtom(sheetAtom);
  const [isShowLeafColors, setIsShowLeafColors] = useState(true);
  const [isShowRingColors, setIsShowRingColors] = useState(false);
  const [isRingHidden, setIsRingHidden] = useState("hidden");

  useEffect(() => {
    if (isShowRingColors) {
      setIsRingHidden("");
    }
  }, [isShowRingColors]);

  function handleLeafColorsClick() {
    setIsShowLeafColors(!isShowLeafColors);
    setIsShowRingColors(false);
  }

  function handleRingColorsClick() {
    setIsShowRingColors(!isShowRingColors);
    setIsShowLeafColors(false);
  }

  async function handleClick() {
    setIsShowLeafColors(false);
    setIsShowRingColors(false);
    await sheet.sequence.play({ range: [11, 13], direction: "reverse" });
    setIsCustomize(false);

    console.log("exit");
  }
  return (
    <div
      className={`h-screen w-screen absolute flex justify-center pointer-events-none items-center z-10 ${customClassName}`}
    >
      <div className="absolute top-0 flex justify-between w-[80%] mt-10 items-end">
        <p className="text-main font-brush text-4xl">Customize your ring</p>
        <div className="flex gap-5 items-center ">
          <p className="text-main text-sm font-gilroy">
            create by HeHanqing.All rights reserved.
          </p>
          <button
            onClick={handleClick}
            className="bg-white px-8 py-2 rounded-full text-main font-gilroy ml-10 pointer-events-auto transition-all duration-1000  hover:bg-main hover:text-white"
          >
            <p>exit</p>
          </button>
        </div>
      </div>
      <div
        className={`absolute top-[75%] bg-white px-12 py-4 rounded-full border-[1px] border-main flex gap-8 ${
          isShowLeafColors ? "fade-in-fwd" : "fade-out-fwd"
        } ${isShowLeafColors ? "pointer-events-auto" : "pointer-events-none"} `}
      >
        <button
          className="w-10 h-10 bg-[#8ba786] rounded-full hover:scale-125 transition-all duration-500"
          onClick={() => setLeafColor("#8ba786")}
        ></button>
        <button
          className="w-10 h-10 bg-slate-200 rounded-full hover:scale-125 transition-all duration-500"
          onClick={() => setLeafColor("#fff")}
        ></button>
        <button
          className="w-10 h-10 bg-[#eab308] rounded-full hover:scale-125 transition-all duration-500"
          onClick={() => setLeafColor("#eab308")}
        ></button>
        <button
          className="w-10 h-10 bg-[#c6704e] rounded-full hover:scale-125 transition-all duration-500"
          onClick={() => setLeafColor("#c6704e")}
        ></button>
        <button
          className="w-10 h-10 bg-[#6da4c7] rounded-full hover:scale-125 transition-all duration-500"
          onClick={() => setLeafColor("#6da4c7")}
        ></button>
        <button
          className="w-10 h-10 bg-[#ff7e96] rounded-full hover:scale-125 transition-all duration-500"
          onClick={() => setLeafColor("#ff7e96")}
        ></button>
        <button
          className="w-10 h-10 bg-[#fbff7e] rounded-full hover:scale-110 transition-all duration-500"
          onClick={() => setLeafColor("#fbff7e")}
        ></button>
        <button
          className="w-10 h-10 bg-[#8e3636] rounded-full hover:scale-125 transition-all duration-500"
          onClick={() => setLeafColor("#8e3636")}
        ></button>
      </div>
      <div
        className={`absolute top-[75%] bg-white px-12 py-4 rounded-full border-[1px] border-main flex gap-8 ${
          isShowRingColors ? "fade-in-fwd" : "fade-out-fwd"
        } ${isRingHidden} ${
          isShowRingColors ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          className="w-10 h-10 bg-[#ffbd2d] rounded-full hover:scale-110 transition-all duration-500"
          onClick={() => setRingColor("#ffbd2d")}
        ></button>
        <button
          className="w-10 h-10 bg-slate-200 rounded-full hover:scale-125 transition-all duration-500"
          onClick={() => setRingColor("#fff")}
        ></button>
        <button
          className="w-10 h-10 bg-[#b76464] rounded-full hover:scale-125 transition-all duration-500"
          onClick={() => setRingColor("#b76464")}
        ></button>
        <button
          className="w-10 h-10 bg-[#57744b] rounded-full hover:scale-125 transition-all duration-500"
          onClick={() => setRingColor("#57744b")}
        ></button>
      </div>
      <div className="flex absolute top-[90%] justify-center items-center gap-10">
        <div className="flex gap-10 ">
          <button
            className="text-main hover:text-white hover:-translate-y-1 pointer-events-auto transition-all duration-500 "
            onClick={handleLeafColorsClick}
          >
            <TbLeaf size={35} />
          </button>
          <button
            className="text-main hover:text-white hover:-translate-y-1 pointer-events-auto transition-all duration-500"
            onClick={handleRingColorsClick}
          >
            <FaRegCircle size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizePage;
