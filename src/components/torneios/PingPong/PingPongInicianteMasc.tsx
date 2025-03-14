import Image from "next/image";
import LogoSister from "@/app/assets/logo-sister.png";
import LogoDs from "@/app/assets/logo-ds.png";
import LogoAdm from "@/app/assets/logo-adm.png";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function VoleiInicianteMasc() {
    const winnerRef = useRef<HTMLLIElement>(null);
      const [isShaking, setIsShaking] = useState(false);
    
      const handleMouseEnter = () => setIsShaking(true);
      const handleMouseLeave = () => setIsShaking(false);
  
    const animateConfetti = () => {
      if (!winnerRef.current) return;
  
      const rect = winnerRef.current.getBoundingClientRect();
  
      const myCanvas = document.createElement("canvas");
      myCanvas.style.position = "fixed";
      myCanvas.style.top = "0px";
      myCanvas.style.left = "0px";
      myCanvas.style.pointerEvents = "none";
      myCanvas.style.width = "100%";
      myCanvas.style.height = "100%";
      myCanvas.style.zIndex = "1000";
      document.body.appendChild(myCanvas);
  
      const myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true,
      });
  
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
  
      myConfetti({
        particleCount: 100,
        spread: 70,
        origin: { x, y },
        colors: ["#3B02D1", "#000"],
        disableForReducedMotion: true,
      });
  
      setTimeout(() => {
        document.body.removeChild(myCanvas);
      }, 3000);
    };
  
    useEffect(() => {
      animateConfetti();
    }, []);

  return (
    <div className="overflow-x-auto">
      <div className="flex mr-3 mt-16">
        <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li className="min-w-56 text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image
                src={LogoDs}
                alt="LogoAgn"
                width={40}
                className="ml-4 mr-2"
              />
              <h1>Douglas</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">2</h1>
            </div>
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image src={LogoDs} alt="LogoAgn" width={40} className="mx-4" />
              <h1>Wellington</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">0</h1>
            </div>
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image src={LogoAdm} alt="LogoAgn" width={40} className="mx-4" />
              <h1>Jorge</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">0</h1>
            </div>
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image src={LogoSister} alt="Logo" width={35} className="mx-4" />
              <h1>L. Otávio</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">2</h1>
            </div>
          </li>
        </ol>
        <ol className="com-connect flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li className="min-w-44 text-xl not-maain com-connect flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
              <Image
                src={LogoDs}
                alt="LogoAgn"
                width={40}
                className="ml-4 mr-2"
              />
              <h1>Douglas</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">2</h1>
            </div>
          </li>
          <li className="min-w-56 text-xl not-maain com-connect flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
              <Image src={LogoSister} alt="Logo" width={35} className="mx-4" />
              <h1>L. Otávio</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">1</h1>
            </div>
          </li>
        </ol>
        <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
        <motion.li
            id="round-5"
            ref={winnerRef}
            onHoverStart={animateConfetti}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="min-w-64 text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative finish"
          >
            <div className="flex flex-row items-center justify-center">
              <Image
                src={LogoDs}
                alt="LogoAgn"
                width={40}
                className="mx-4"
              />
              <h1>Douglas</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <h1 className={`mr-5 ml-3 ${
                isShaking ? "animate-shake" : ""
              }`}>🏆</h1>
            </div>
          </motion.li>
        </ol>
      </div>
    </div>
  );
}
