import Image from "next/image";
import LogoAdm from "@/app/assets/logo-adm.png";
import LogoDs from "@/app/assets/logo-ds.png";
import LogoSister from "@/app/assets/logo-sister.png";
import QuestionMark from "@/app/assets/question-mark.png";

export default function VoleiAvancadoMasc() {
  return (
    <div className="overflow-x-scroll min-h-[680px] overflow-y-hidden text-nowrap">
      <div className="flex mr-3 mt-16">
        <ol className="flex flex-1 flex-col justify-around mr-5 round">
          <li className="min-w-52 flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector text-xl">
            <Image src={LogoSister} alt="Logo" width={40} className="mx-4" />
            Nauan
          </li>
          <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={LogoSister} alt="Logo" width={40} className="mx-4" />
            Jessé
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
          <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={40} className="mx-4" />
            --
          </li>
          <li className="com-connect-especial text-xl text-nowrap flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={QuestionMark} alt="Logo" width={40} className="mx-4" />
            <h1>--</h1>
            </div>
            {/* <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">25</h1>
            </div> */}
          </li>
        </ol>
        <ol className="text-xl flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li className="min-w-60 com-connect flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4" />
            Vencedor
          </li>
          <li className="com-connect text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={LogoDs} alt="Logo" width={40} className="mx-4" />
            <h1>Isaac</h1>
            </div>
            {/* <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">2</h1>
            </div> */}
          </li>
          <li className="com-connect text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={LogoDs} alt="Logo" width={40} className="mx-4" />
            <h1>Eliel</h1>
          </div>
          {/* <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">2</h1>
          </div> */}
          </li>
          <li className="com-connect text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4" />
            Melhor perdedor
          </li>
        </ol>
        <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li className="min-w-44 text-xl com-connect flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4" />
            Vencedor
          </li>
          <li className="com-connect text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4" />
            Vencedor
          </li>
        </ol>
        <ol className="min-w-44 flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li
            id="round-5"
            className="text-xl min-w-44 flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative finish"
          >
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4" />
            Vencedor
          </li>
        </ol>
      </div>
    </div>
  );
}
