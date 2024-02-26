import { Html, useProgress } from "@react-three/drei";
import { useEffect } from "react";

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html className="w-screen h-screen bg-main" center>
      <p className="h-screen font-gilroy flex justify-center items-center text-white">
        Loading... Please Wait
      </p>
    </Html>
  );
};

export default Loader;
