interface SelectorProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Selector({ activePage, setActivePage }: SelectorProps) {
  return (
    <div className="w-full bg-gradient-to-t from-[#3b3b3b] to-[#1f1f1f] max-xs:h-24 pb-5 clip">
      <div className="flex flex-col justify-start items-start ml-5 h-full py-5 overflow-x-auto whitespace-nowrap">
        <h1 className="text-white text-xl font-bold mb-4">
          Selecione uma modalidade:
        </h1>
        <div className="flex mb-4 border-b-2 border-[#4f4f4f] gap-2">
          <button
            onClick={() => setActivePage("volei-masc-avancado")}
            className={`cursor-pointer text-white hover:bg-white hover:text-black rounded-full py-1 px-4 text-lg whitespace-nowrap transition duration-300 ease-in-out ${
              activePage === "volei-masc-avancado" ? "!text-black bg-white" : ""
            }`}
          >
            Vôlei Masc. Avançado
          </button>
          <button
            onClick={() => setActivePage("volei-masc-iniciante")}
            className={`cursor-pointer text-white hover:bg-white hover:text-black rounded-full py-1 px-4 text-lg whitespace-nowrap transition duration-300 ease-in-out ${
              activePage === "volei-masc-iniciante"
                ? "!text-black bg-white"
                : ""
            }`}
          >
            Vôlei Masc. Iniciante
          </button>
          <button
            onClick={() => setActivePage("volei-fem-avancado")}
            className={`cursor-pointer text-white hover:bg-white hover:text-black rounded-full py-1 px-4 text-lg whitespace-nowrap transition duration-300 ease-in-out ${
              activePage === "volei-fem-avancado" ? "!text-black bg-white" : ""
            }`}
          >
            Vôlei Fem. Avançado
          </button>
          <button
            onClick={() => setActivePage("volei-fem-iniciante")}
            className={`cursor-pointer text-white hover:bg-white hover:text-black rounded-full py-1 px-4 text-lg whitespace-nowrap transition duration-300 ease-in-out ${
              activePage === "volei-fem-iniciante" ? "!text-black bg-white" : ""
            }`}
          >
            Vôlei Fem. Iniciante
          </button>
        </div>
        <div className="flex mb-4 border-b-2 border-[#4f4f4f] gap-2">
          {/* <button
              onClick={() => setActivePage("pingpong-masc-avancado")}
              className={`cursor-pointer text-white hover:bg-white hover:text-black rounded-full py-1 px-4 text-lg whitespace-nowrap transition duration-300 ease-in-out ${
                activePage === "pingpong-masc-avancado"
                  ? "!text-black bg-white"
                  : ""
              }`}
            >
              PingPong Masc. Avançado
            </button> */}
            <button
              onClick={() => setActivePage("pingpong-masc-iniciante")}
              className={`cursor-pointer text-white hover:bg-white hover:text-black rounded-full py-1 px-4 text-lg whitespace-nowrap transition duration-300 ease-in-out ${
                activePage === "pingpong-masc-iniciante"
                  ? "!text-black bg-white"
                  : ""
              }`}
            >
              PingPong Masc. Iniciante
            </button>
          <button
            onClick={() => setActivePage("pingpong-feminino")}
            className={`cursor-pointer text-white hover:bg-white hover:text-black rounded-full py-1 px-4 text-lg whitespace-nowrap transition duration-300 ease-in-out ${
              activePage === "pingpong-feminino" ? "!text-black bg-white" : ""
            }`}
          >
            PingPong Feminino
          </button>
        </div>
        {/* <div className="flex border-b-2 border-[#4f4f4f] gap-2">
            <button
              onClick={() => setActivePage("valorant")}
              className={`cursor-pointer text-white hover:bg-white hover:text-black rounded-full py-1 px-4 text-lg whitespace-nowrap transition duration-300 ease-in-out ${
                activePage === "valorant" ? "!text-black bg-white" : ""
              }`}
            >
              Valorant
            </button>
            <button
              onClick={() => setActivePage("lol")}
              className={`cursor-pointer text-white hover:bg-white hover:text-black rounded-full py-1 px-4 text-lg whitespace-nowrap transition duration-300 ease-in-out ${
                activePage === "lol" ? "!text-black bg-white" : ""
              }`}
            >
              LoL
            </button>
            <button
              onClick={() => setActivePage("free-fire")}
              className={`cursor-pointer text-white hover:bg-white hover:text-black rounded-full py-1 px-4 text-lg whitespace-nowrap transition duration-300 ease-in-out ${
                activePage === "free-fire" ? "!text-black bg-white" : ""
              }`}
            >
              Free Fire
            </button>
            <button
              onClick={() => setActivePage("brawl-stars")}
              className={`cursor-pointer text-white hover:bg-white hover:text-black rounded-full py-1 px-4 text-lg whitespace-nowrap transition duration-300 ease-in-out ${
                activePage === "brawl-stars" ? "!text-black bg-white" : ""
              }`}
            >
              Brawl Stars
            </button>
          </div> */}
      </div>
    </div>
  );
}
