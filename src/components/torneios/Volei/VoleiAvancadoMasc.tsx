import Image from "next/image";
import LogoAgn from "@/app/assets/logo-agn.png";
import LogoDs from "@/app/assets/logo-ds.png";
import LogoSister from "@/app/assets/logo-sister.png";
import QuestionMark from "@/app/assets/question-mark.png";

export default function VoleiAvancadoMasc() {
    return (
      <div className="overflow-x-scroll h-screen overflow-y-hidden text-nowrap">
        <div className="flex mr-3 mt-16">
          <ol className="flex flex-1 flex-col round mr-9.5 translate-y-103">
          <li className="min-w-[285px] text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoDs} alt="Logo" width={40} className="mx-4"/>
              Kelton e Pedro
            </li>
            <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoAgn} alt="Logo" width={40} className="ml-4 mr-1"/>
              <Image src={LogoDs} alt="Logo" width={40} className="ml-1 mr-2"/>
              Alysson e Justino
            </li>
          </ol>
          <ol className="flex flex-1 flex-col justify-around mr-5 round">
            <li className="min-w-64 flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector text-xl">
              <Image src={LogoAgn} alt="Logo" width={40} className="mx-4"/>
              Gustavo e Ythalo
            </li>
            <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoDs} alt="Logo" width={40} className="mx-4"/>
              Emanuel e Henzo
            </li>
            <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoSister} alt="Logo" width={40} className="mx-4"/>
              Emanuel e Danilo
            </li>
            <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoDs} alt="Logo" width={40} className="mx-4"/>
              Daniel e Shinoda
            </li>
            <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoAgn} alt="Logo" width={40} className="mx-4"/>
              Kaue e Mikael
            </li>
            <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoDs} alt="Logo" width={40} className="mx-4"/>
              Pablo e Gustavo
            </li>
            <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
              <Image src={LogoSister} alt="Logo" width={40} className="mx-4"/>
              Heytor e Nauâ
            </li>
            <li className="com-connect text-xl text-nowrap flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4"/>
              Vencedor 1° jogo
            </li>
          </ol>
          <ol className="text-xl flex flex-1 flex-col justify-around mr-5 ml-5 round">
            <li className="min-w-44 com-connect flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4"/>
              Vencedor
            </li>
            <li className="com-connect text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4"/>
              Vencedor
            </li>
            <li className="com-connect text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4"/>
              Vencedor
            </li>
            <li className="com-connect text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4"/>
              Vencedor
            </li>
          </ol>
          <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
            <li className="min-w-44 text-xl com-connect flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4"/>
              Vencedor
            </li>
            <li className="com-connect text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4"/>
              Vencedor
            </li>
          </ol>
          <ol className="min-w-44 flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li
              id="round-5"
              className="text-xl min-w-44 flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative finish"
            >
              <Image src={QuestionMark} alt="Logo" width={35} className="mx-4"/>
              Vencedor
            </li>
          </ol>
        </div>
      </div>
    );
  }
  