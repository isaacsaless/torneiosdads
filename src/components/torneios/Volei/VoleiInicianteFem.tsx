import Image from "next/image";
import LogoAdm from "@/app/assets/logo-adm.png";
import LogoSister from "@/app/assets/logo-sister.png";
import QuestionMark from "@/app/assets/question-mark.png";

export default function VoleiInicianteFem() {
    return (
      <div>
        <div className="flex mr-3 mt-16">
          <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
            <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoAdm} alt="LogoAgn" width={40} className="mx-4"/>
              Julia e Eduarda
            </li>
            <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoSister} alt="LogoAgn" width={40} className="mx-4"/>
              Marjorie e Kemilly
            </li>
            <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoAdm} alt="LogoAgn" width={40} className="mx-4"/>
              Kaylany e Danielle
            </li>
            <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4"/>
              Perdedor do 1° Jogo
            </li>
          </ol>
          <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
            <li className="text-xl com-connect flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4"/>
              Vencedor
            </li>
            <li className="text-xl com-connect flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4"/>
              Vencedor
            </li>
          </ol>
          <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li
              id="round-5"
              className="text-xl com-connect flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative finish"
            >
              <Image src={QuestionMark} alt="Logo" width={35} className="mx-4"/>
              Vencedor
            </li>
          </ol>
        </div>
      </div>
    );
  }
  