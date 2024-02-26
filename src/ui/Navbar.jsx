import { useState } from "react";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";

const Navbar = ({ customClassName, audioRef }) => {
  function handleClick() {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }
  return (
    <div
      className={`w-screen absolute flex justify-center z-10 pointer-events-none ${customClassName}`}
    >
      <div className="w-[80vw] flex justify-between pt-14 ">
        <div className="flex gap-5 items-center">
          <p className="font-gilroy text-3xl text-main ">
            NATURE&apos;S EMBRACE
          </p>
          <p className="font-playfair text-main text-[20px]">BY HEHANQING</p>
        </div>
        <div>
          <button className="pointer-events-auto" onClick={handleClick}>
            <HiOutlineSpeakerWave size={28} color="#233F32" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
