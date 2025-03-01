import { Roboto } from "next/font/google";
import LogoDS from "..@/public/logo-ds.png";
import Image from "next/image";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default async function Header() {
  return (
    <div className="max-w-screen bg-[#1f1f1f] h-16 max-xs:h-24 z-50 overflow-hidden border-b-2 border-[#3b3b3b]">
      <nav
        className={`${roboto.className} flex justify-center items-center h-full px-8 max-xs:flex-col`}
      >
        <a
          href="https://www.instagram.com/ds3psvs/"
          target="_blank"
          className="flex flex-row items-center gap-2 relative group"
        >
          <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none w-[150%]">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400/30 via-gray-500/30 to-transparent blur-[20px]"></div>
            <div className="absolute inset-0 bg-gradient-radial from-gray-400/30 to-transparent blur-[60px]"></div>
          </div>

          <div className="flex flex-row items-center relative z-10 transition-transform duration-400 hover:-translate-y-[2px]">
            <Image src={LogoDS} alt="Logo da DS" width={50} height={50} />
          <h1 className="text-white text-xl font-bold relative z-10">
            Toneios da DS
          </h1>
          </div>
        </a>
      </nav>
    </div>
  );
}
