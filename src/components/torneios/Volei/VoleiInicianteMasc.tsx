import Image from "next/image";
import LogoEst from "@/app/assets/logo-est.png";
import LogoDs from "@/app/assets/logo-ds.png";
import QuestionMark from "@/app/assets/question-mark.png";

export default function VoleiInicianteMasc() {
  return (
    <div className="overflow-x-auto">
      <div className="flex mr-3 mt-16">
        <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li className="min-w-[360px] text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image
                src={LogoDs}
                alt="LogoAgn"
                width={40}
                className="ml-4 mr-2"
              />
              <Image
                src={LogoEst}
                alt="LogoAgn"
                width={40}
                className="ml-2 mr-4"
              />
              <h1>Edjunior e Júlio César</h1>
            </div>
          </li>
          <li className="text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image src={LogoDs} alt="LogoAgn" width={40} className="mx-4" />
              <h1>Douglas e Italo</h1>
            </div>
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image src={LogoDs} alt="LogoAgn" width={40} className="mx-4" />
              <h1>Isaac e Gabriel</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">25</h1>
            </div>
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image src={LogoDs} alt="Logo" width={35} className="mx-4" />
              <h1>Chaidisson e Levi</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">18</h1>
            </div>
          </li>
        </ol>
        <ol className="com-connect flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li className="min-w-60 text-xl not-maain com-connect flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4" />
            Vencedor
          </li>
          <li className="text-xl not-maain com-connect flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
              <Image src={LogoDs} alt="LogoAgn" width={40} className="mx-4" />
              <h1>Isaac e Gabriel</h1>
            </div>
            {/* <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">21</h1>
            </div> */}
          </li>
        </ol>
        <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li
            id="round-5"
            className="min-w-44 text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative finish"
          >
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4" />
            Vencedor
          </li>
        </ol>
      </div>
    </div>
  );
}
