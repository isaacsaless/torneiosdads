import Image from "next/image";
import LogoAgn from "@/app/assets/logo-agn.png";
import LogoDs from "@/app/assets/logo-ds.png";
import LogoSister from "@/app/assets/logo-sister.png";
import QuestionMark from "@/app/assets/question-mark.png";

export default function FreeFire() {
  return (
    <div className="overflow-x-scroll min-h-96 overflow-y-hidden text-nowrap">
      <div className="flex mr-3 mt-16">
        <ol className="flex flex-1 flex-col round mr-20 translate-y-39">
          <li className="extra-connect min-w-72 text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={LogoDs} alt="Logo" width={40} className="mx-4" />
            <h1>D. Sistemas 3 (Tchê)</h1>
            </div>
            {/* <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">25</h1>
            </div> */}
          </li>
          <li className="extra-connect text-xl flex items-center justify-between m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={LogoDs} alt="Logo" width={40} className="mx-4" />
            <h1>D. Sistemas 2</h1>
            </div>
            {/* <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">16</h1>
            </div> */}
          </li>
        </ol>
        <ol className="flex flex-1 flex-col justify-around mr-5 round">
          <li className="min-w-72 extra-connect text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={LogoSister} alt="Logo" width={40} className="mx-4" />
            S. Energias 3
          </li>
          <li className="extra-connect text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={LogoAgn} alt="Logo" width={40} className="mx-4" />
            Agronegócio 2
          </li>
          <li className="extra-connect text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={LogoDs} alt="Logo" width={40} className="mx-4" />
            D. Sistemas 3 (Ruan)
          </li>
          <li className="extra-connect com-connect-especial text-xl text-nowrap flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <div className="flex flex-row items-center justify-center">
            <Image src={QuestionMark} alt="Logo" width={40} className="mx-4" />
            <h1>Vencedor</h1>
            </div>
            {/* <div className="flex flex-row items-center justify-center">
              <div className="border-1 border-white-700 h-8"></div>
              <h1 className="mr-5 ml-3">25</h1>
            </div> */}
          </li>
        </ol>
        <ol className="text-xl flex flex-1 flex-col justify-around mr-5 ml-5 round">
          <li className="min-w-44 extra-connect2 com-connect text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
            <Image src={QuestionMark} alt="Logo" width={35} className="mx-4" />
            Vencedor
          </li>
          <li className="extra-connect2 com-connect text-xl flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
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
