"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import Image from "next/image";
import LogoDs from "@/app/assets/logo-ds.png";
import LogoSister from "@/app/assets/logo-sister.png";

export default function PingPongFem() {
  const winnerRef = useRef<HTMLLIElement>(null);

  // Função para animar o confete
  const animateConfetti = () => {
    if (!winnerRef.current) return;
    
    // Obter a posição do elemento vencedor
    const rect = winnerRef.current.getBoundingClientRect();
    
    // Criar um canvas temporário para o confetti
    const myCanvas = document.createElement('canvas');
    myCanvas.style.position = 'fixed';
    myCanvas.style.top = '0px';
    myCanvas.style.left = '0px';
    myCanvas.style.pointerEvents = 'none';
    myCanvas.style.width = '100%';
    myCanvas.style.height = '100%';
    myCanvas.style.zIndex = '1000';
    document.body.appendChild(myCanvas);
    
    const myConfetti = confetti.create(myCanvas, {
      resize: true,
      useWorker: true
    });
    
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    
    myConfetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
      colors: ["#5AA91B", "#FEC847"],
      disableForReducedMotion: true
    });
    
    setTimeout(() => {
      document.body.removeChild(myCanvas);
    }, 3000);
  };

  // Usar useEffect para disparar o confete quando a página carregar
  useEffect(() => {
    animateConfetti();
  }, []);

  return (
    <div className="overflow-x-auto text-nowrap">
      <div className="flex mr-3 mt-16">
        <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li className="min-w-60 text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image
                src={LogoSister}
                alt="LogoAgn"
                width={40}
                className="mx-4"
              />
              <h1>Fernanda</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">2</h1>
            </div>
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image
                src={LogoSister}
                alt="LogoAgn"
                width={40}
                className="mx-4"
              />
              <h1>Keully</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">0</h1>
            </div>
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image src={LogoDs} alt="LogoAgn" width={40} className="mx-4" />
              <h1>Maira</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">2</h1>
            </div>
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image
                src={LogoSister}
                alt="LogoAgn"
                width={40}
                className="ml-4 mr-2"
              />
              <h1>Eyshila</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">0</h1>
            </div>
          </li>
        </ol>
        <ol className="text-xl flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li className="not-maain min-w-56 com-connect flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
              <Image
                src={LogoSister}
                alt="LogoAgn"
                width={40}
                className="mx-4"
              />
              <h1>Fernanda</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">2</h1>
            </div>
          </li>
          <li className="not-maain com-connect text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
              <Image src={LogoDs} alt="LogoAgn" width={40} className="mx-4" />
              <h1>Maira</h1>
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
            className="min-w-64 text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative finish"
          >
            <div className="flex flex-row items-center justify-center">
              <Image
                src={LogoSister}
                alt="LogoAgn"
                width={40}
                className="mx-4"
              />
              <h1>Fernanda</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <h1 className="mr-5 ml-3">🏆</h1>
            </div>
          </motion.li>
        </ol>
      </div>
    </div>
  );
}