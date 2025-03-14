import Image from "next/image";
import LogoSister from "@/app/assets/logo-sister.png";
import LogoDs from "@/app/assets/logo-ds.png";
import LogoAdm from "@/app/assets/logo-adm.png";
import QuestionMark from "@/app/assets/question-mark.png";

export default function VoleiInicianteMasc() {
  return (
    <div className="overflow-x-auto">
      <div className="flex mr-3 mt-16">
        <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li className="min-w-52 text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image
                src={LogoDs}
                alt="LogoAgn"
                width={40}
                className="ml-4 mr-2"
              />
              <h1>Douglas</h1>
            </div>
            {/* <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">18</h1>
            </div> */}
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image src={LogoDs} alt="LogoAgn" width={40} className="mx-4" />
              <h1>Wellington</h1>
            </div>
            {/* <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">25</h1>
            </div> */}
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image src={LogoAdm} alt="LogoAgn" width={40} className="mx-4" />
              <h1>Jorge</h1>
            </div>
            {/* <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">25</h1>
            </div> */}
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image src={LogoSister} alt="Logo" width={35} className="mx-4" />
              <h1>L. Otávio</h1>
            </div>
            {/* <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">18</h1>
            </div> */}
          </li>
        </ol>
        <ol className="com-connect flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li className="min-w-44 text-xl not-maain com-connect flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
              <Image src={QuestionMark} alt="LogoAgn" width={40} className="mx-4" />
              <h1>Vencedor</h1>
            </div>
            {/* <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">25</h1>
            </div> */}
          </li>
          <li className="text-xl not-maain com-connect flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
              <Image src={QuestionMark} alt="LogoAgn" width={40} className="mx-4" />
              <h1>Vencedor</h1>
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
