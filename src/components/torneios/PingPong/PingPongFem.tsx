import Image from "next/image";
import LogoDs from "@/app/assets/logo-ds.png";
import LogoSister from "@/app/assets/logo-sister.png";
import QuestionMark from "@/app/assets/question-mark.png";

export default function PingPongFem() {
    return (
      <div className="overflow-x-auto text-nowrap">
        <div className="flex mr-3 mt-16">
          <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
            <li className="min-w-48 text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoSister} alt="LogoAgn" width={40} className="mx-4"/>
              Fernanda
            </li>
            <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoSister} alt="LogoAgn" width={40} className="mx-4"/>
              Keully
            </li>
            <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoDs} alt="LogoAgn" width={40} className="mx-4"/>
              Maira
            </li>
            <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoSister} alt="LogoAgn" width={40} className="ml-4 mr-2"/>
              Eyshila
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
  