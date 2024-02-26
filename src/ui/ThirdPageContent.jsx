const ThirdPageContent = ({ customClassName }) => {
  return (
    <>
      <p
        className={`pointer-events-none font-savoye absolute text-[#9B9B9B] z-10 text-[300px] left-0 top-[20%] ml-10 ${customClassName}`}
      >
        Blossom
      </p>
      <div
        className={`h-screen w-screen absolute flex flex-col pointer-events-none justify-center items-center z-20 ${customClassName}`}
      >
        <div className="flex flex-col gap-4 items-start justify-center w-[80vw]">
          <p className="font-brush text-main text-2xl ml-32">
            share a beam of light with you
          </p>
          <h1 className="text-main font-playfair text-8xl">BLOSSOM</h1>
          <h1 className="text-main font-playfair text-8xl">RING</h1>
          <p className="w-5/12 font-gilroy text-main text-sm mt-3 text-left ">
            The ring is studded with many small crushed diamonds, resembling the
            sight of flowers in full bloom in nature. It symbolizes light and
            hope!
          </p>
        </div>
      </div>
    </>
  );
};

export default ThirdPageContent;
