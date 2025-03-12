import Image from "next/image";
import LogoAdm from "@/app/assets/logo-adm.png";
import LogoEst from "@/app/assets/logo-est.png";
import QuestionMark from "@/app/assets/question-mark.png";

export default function VoleiAvancadoFem() {
  return (
    <div className="overflow-x-auto text-nowrap">
      <div className="flex mr-3 mt-16">
        <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li className="min-w-72 text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image src={LogoEst} alt="LogoAgn" width={40} className="mx-4" />
              <h1>Laysla e Kaivylane</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">25</h1>
            </div>
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image
                src={LogoEst}
                alt="LogoAgn"
                width={40}
                className="ml-4 mr-2"
              />
              <Image
                src={LogoAdm}
                alt="LogoAgn"
                width={40}
                className="mr-4 ml-2"
              />
              <h1>Beatriz e Sarah</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">21</h1>
            </div>
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image src={LogoEst} alt="LogoAgn" width={40} className="mx-4" />
              <h1>Giovana e Talita</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">16</h1>
            </div>
          </li>
          <li className="text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image
                src={LogoAdm}
                alt="LogoAgn"
                width={40}
                className="ml-2 mr-4"
              />
              <h1>Davyla e Cleiciane</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">25</h1>
            </div>
          </li>
        </ol>
        <ol className="text-xl flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li className="not-maain min-w-64 com-connect flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image src={LogoEst} alt="LogoAgn" width={40} className="mx-4" />
              <h1>Laysla e Kaivylane</h1>
            </div>
            {/* <div className="flex flex-row items-center justify-center">
                <div className="border-1 border-white-700 h-8"></div>
                <h1 className="mr-5 ml-3">25</h1>
              </div>  */}
          </li>
          <li className="not-maain com-connect text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <div className="flex flex-row items-center justify-center">
              <Image
                src={LogoAdm}
                alt="LogoAgn"
                width={40}
                className="ml-2 mr-4"
              />
              <h1>Davyla e Cleiciane</h1>
            </div>
            {/* <div className="flex flex-row items-center justify-center">
                <div className="border-1 border-white-700 h-8"></div>
                <h1 className="mr-5 ml-3">25</h1>
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
