import Image from "next/image";
import LogoAdm from "@/app/assets/logo-adm.png";
import LogoSister from "@/app/assets/logo-sister.png";
import QuestionMark from "@/app/assets/question-mark.png";

export default function VoleiInicianteFem() {
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
          <li
              id="round-5"
              className="min-w-44 text-xl com-connect flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative finish"
            >
              <Image src={QuestionMark} alt="Logo" width={35} className="mx-4"/>
              Vencedor
            </li>
          </ol>
        </div>
      </div>
    );
  }
  