import Image from "next/image";
import LogoAdm from "@/app/assets/logo-adm.png";
import LogoEst from "@/app/assets/logo-est.png";
import QuestionMark from "@/app/assets/question-mark.png";

export default function VoleiAvancadoFem() {
    return (
      <div className="overflow-x-auto text-nowrap">
        <div className="flex mr-3 mt-16">
          <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
            <li className="min-w-72 text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoEst} alt="LogoAgn" width={40} className="mx-4"/>
              Laysla e Kaivylane
            </li>
            <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoAdm} alt="LogoAgn" width={40} className="mx-4"/>
              Davyla e Cleiciane
            </li>
            <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoEst} alt="LogoAgn" width={40} className="mx-4"/>
              Giovana e Talita
            </li>
            <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoEst} alt="LogoAgn" width={40} className="ml-4 mr-2"/>
              <Image src={LogoAdm} alt="LogoAgn" width={40} className="ml-2 mr-4"/>
              Beatriz e Sarah
            </li>
          </ol>
          <ol className="text-xl flex flex-1 flex-col justify-around mr-5 ml-5 round">
            <li className="not-maain min-w-44 com-connect flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4"/>
              Vencedor
            </li>
            <li className="not-maain com-connect text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4"/>
              Vencedor
            </li>
          </ol>
          <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li
              id="round-5"
              className="min-w-44 text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative finish"
            >
              <Image src={QuestionMark} alt="Logo" width={35} className="mx-4"/>
              Vencedor
            </li>
          </ol>
        </div>
      </div>
    );
  }
  