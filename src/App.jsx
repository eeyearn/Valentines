import { useState, useEffect, useRef } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({});

  const noButtonRef = useRef(null);

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleNoHover = () => {
    const randomX = Math.random() * 300;
    const randomY = Math.random() * 300;
    setNoButtonPosition({ top: `${randomY}px`, left: `${randomX}px` });
  };
  
  useEffect(() => {
    // Align No button beside Yes button on first render
    setNoButtonPosition({ top: "0%", left: "150%" });
  }, []);


  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/z-TvY04VNsYAAAAi/pompompurin-vivian-kong.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            YAY!!
          </div>
        </>
      ) : (
        <>
          <img className="h-[230px] rounded-lg shadow-lg" src="https://media.tenor.com/VmOouMXHqTsAAAAi/pom-pom-purin-pompompurin.gif" />
          <h1 className="text-4xl md:text-6xl my-4 text-center">Will you be my Valentine?</h1>
          <div className="relative flex justify-center items-center gap-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg -ml-10"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              ref={noButtonRef}
              onMouseEnter={handleNoHover}
              onClick={handleNoClick}
              style={{
                position: "absolute",
                transition: "all 0.1s ease",
                top: noButtonPosition.top,
                left: noButtonPosition.left,
              }}
              className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              No
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

const Footer = () => {

};
