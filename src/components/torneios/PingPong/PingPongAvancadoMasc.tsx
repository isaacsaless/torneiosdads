import Image from "next/image";
import LogoAdm from "@/app/assets/logo-adm.png";
import LogoDs from "@/app/assets/logo-ds.png";
import LogoSister from "@/app/assets/logo-sister.png";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function VoleiAvancadoMasc() {
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
        colors: ["#5AA91B", "#FEC847"],
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
    <div className="overflow-x-scroll min-h-[680px] overflow-y-hidden text-nowrap">
      <div className="flex mr-3 mt-16">
        <ol className="flex flex-1 flex-col justify-around mr-5 round">
          <li className="min-w-52 flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector text-xl">
          <div className="flex flex-row items-center justify-center">
            <Image src={LogoSister} alt="Logo" width={40} className="mx-4" />
            <h1>Nauan</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">2</h1>
            </div>
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={LogoSister} alt="Logo" width={40} className="mx-4" />
            <h1>Jessé</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">1</h1>
            </div>
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={LogoDs} alt="Logo" width={40} className="mx-4" />
            <h1>Isaac</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">2</h1>
            </div>
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={LogoDs} alt="Logo" width={40} className="mx-4" />
            <h1>Shinoda</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">0</h1>
            </div>
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={LogoDs} alt="Logo" width={40} className="mx-4" />
            <h1>Eliel</h1>
          </div>
          <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">2</h1>
          </div>
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={LogoAdm} alt="Logo" width={40} className="mx-4" />
            <h1>José</h1>
          </div>
          <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">1</h1>
          </div>
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={LogoSister} alt="Logo" width={40} className="mx-4" />
            <h1>Ary</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">2</h1>
            </div>
          </li>
          <li className="com-connect-especial text-xl text-nowrap flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={LogoSister} alt="Logo" width={40} className="mx-4" />
            <h1>Daniel</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">0</h1>
            </div>
          </li>
        </ol>
        <ol className="text-xl flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li className="min-w-52 com-connect flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={LogoSister} alt="Logo" width={40} className="mx-4" />
            <h1>Nauan</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">2</h1>
            </div>
          </li>
          <li className="com-connect text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={LogoDs} alt="Logo" width={40} className="mx-4" />
            <h1>Isaac</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">0</h1>
            </div>
          </li>
          <li className="com-connect text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={LogoDs} alt="Logo" width={40} className="mx-4" />
            <h1>Eliel</h1>
          </div>
          <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">1</h1>
          </div>
          </li>
          <li className="com-connect text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={LogoSister} alt="Logo" width={40} className="mx-4" />
            <h1>Ary</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">2</h1>
            </div>
          </li>
        </ol>
        <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li className="min-w-52 text-xl com-connect flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={LogoSister} alt="Logo" width={40} className="mx-4" />
            <h1>Nauan</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">2</h1>
            </div>
          </li>
          <li className="com-connect text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={LogoSister} alt="Logo" width={40} className="mx-4" />
            <h1>Ary</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">1</h1>
            </div>
          </li>
        </ol>
        <ol className="min-w-44 flex flex-1 flex-col justify-around mr-5 ml-5 round">
        <motion.li
            id="round-5"
            ref={winnerRef}
            onHoverStart={animateConfetti}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="min-w-52 text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative finish"
          >
            <div className="flex flex-row items-center justify-center">
              <Image
                src={LogoSister}
                alt="LogoSister"
                width={40}
                className="mx-4"
              />
              <h1>Nauan</h1>
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
