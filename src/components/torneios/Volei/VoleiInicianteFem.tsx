import Image from "next/image";
import LogoAdm from "@/app/assets/logo-adm.png";
import LogoSister from "@/app/assets/logo-sister.png";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function VoleiInicianteFem() {
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
          colors: ["#00469C", "#EBEBEB"],
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
      <div className="overflow-x-auto text-nowrap">
        <div className="flex mr-3 mt-16">
          <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
            <li className="min-w-80 text-xl flex justify-between items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <div className="flex flex-row items-center justify-center">
              <Image src={LogoAdm} alt="LogoAgn" width={40} className="mx-4"/>
              <h1>Julia e Eduarda</h1>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="border-1 border-white-700 h-8"></div>
                <h1 className="mr-5 ml-3">21</h1>
              </div>
            </li>
            <li className="text-xl flex justify-between items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image src={LogoSister} alt="LogoAgn" width={40} className="mx-4"/>
              <h1>Marjorie e Kemilly</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
                <div className="border-1 border-white-700 h-8"></div>
                <h1 className="mr-5 ml-3">12</h1>
              </div>
            </li>
            <li className="text-xl flex justify-between items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image src={LogoAdm} alt="LogoAgn" width={40} className="mx-4"/>
              <h1>Kaylany e Danielle</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
                <div className="border-1 border-white-700 h-8"></div>
                <h1 className="mr-5 ml-3">21</h1>
              </div>
            </li>
            <li className="text-xl flex justify-between items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
            <Image src={LogoSister} alt="Logo" width={35} className="mx-4"/>
              <h1>Marjorie e Kemilly</h1>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="border-1 border-white-700 h-8"></div>
                <h1 className="mr-5 ml-3">13</h1>
              </div>
            </li>
          </ol>
          <ol className="min-w-72 flex flex-1 flex-col justify-around mr-5 ml-5 round">
            <li className="text-xl com-connect flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={LogoAdm} alt="Logo" width={35} className="mx-4"/>
              Julia e Eduarda
            </li>
            <li className="text-xl com-connect flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={LogoAdm} alt="Logo" width={35} className="mx-4"/>
            Kaylany e Danielle
            </li>
          </ol>
          <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <motion.li
            id="round-5"
            ref={winnerRef}
            onHoverStart={animateConfetti}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="min-w-72 text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative finish"
          >
            <div className="flex flex-row items-center justify-center">
              <Image
                src={LogoAdm}
                alt="LogoAdm"
                width={40}
                className="mx-4"
              />
              <h1>Julia e Eduarda</h1>
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
  