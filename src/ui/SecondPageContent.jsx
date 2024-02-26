const SecondPageContent = ({ customClassName }) => {
  return (
    <>
      <p
        className={`font-savoye absolute text-[#9B9B9B] z-10 text-[300px] right-0 top-[20%] mr-10 pointer-events-none ${customClassName}`}
      >
        Timeless
      </p>
      <div
        className={`h-screen w-screen absolute flex flex-col pointer-events-none justify-center items-center z-20 ${customClassName}`}
      >
        <div className="flex flex-col gap-4 items-end justify-center w-[80vw]">
          <p className="font-brush text-main text-2xl mr-32">
            give a gift to nature
          </p>
          <h1 className="text-main font-playfair text-8xl">TIMELESS</h1>
          <h1 className="text-main font-playfair text-8xl">NATURE</h1>
          <p className="w-5/12 font-gilroy text-main text-sm mt-3 text-right ">
            The design of this ring is inspired by the beauty of nature, The
            design of this ring is not only fashionable but also a manifestation
            of timeless beauty that transcends time.
          </p>
        </div>
      </div>
    </>
  );
};

export default SecondPageContent;
