"use client";

import { useState } from "react";
import Selector from "@/components/Selector";
import VoleiAvancadoFem from "@/components/torneios/Volei/VoleiAvancadoFem";
import VoleiAvancadoMasc from "@/components/torneios/Volei/VoleiAvancadoMasc";
import VoleiInicianteFem from "@/components/torneios/Volei/VoleiInicianteFem";
import VoleiInicianteMasc from "@/components/torneios/Volei/VoleiInicianteMasc";
import PingPongAvancadoMasc from "@/components/torneios/PingPong/PingPongAvancadoMasc";
import PingPongInicianteMasc from "@/components/torneios/PingPong/PingPongInicianteMasc";
import PingPongFem from "@/components/torneios/PingPong/PingPongFem";
import Valorant from "@/components/torneios/eGames/Valorant";
import LoL from "@/components/torneios/eGames/LoL";
import BrawlStars from "@/components/torneios/eGames/BrawlStars";
import FreeFire from "@/components/torneios/eGames/FF";

export default function Index() {
  const [activePage, setActivePage] = useState("volei-masc-avancado");

  return (
    <div className="w-full overflow-x-hidden flex flex-col">
      <Selector activePage={activePage} setActivePage={setActivePage} />
      <div>
        {activePage === "volei-masc-avancado" && (
          <div>
            <VoleiAvancadoMasc />
          </div>
        )}

        {activePage === "volei-fem-avancado" && (
          <div>
            <VoleiAvancadoFem />
          </div>
        )}

        {activePage === "volei-masc-iniciante" && (
          <div>
            <VoleiInicianteMasc />
          </div>
        )}

        {activePage === "volei-fem-iniciante" && (
          <div>
            <VoleiInicianteFem />
          </div>
        )}

        {activePage === "pingpong-masc-avancado" && (
          <div>
            <PingPongAvancadoMasc />
          </div>
        )}

        {activePage === "pingpong-masc-iniciante" && (
          <div>
            <PingPongInicianteMasc />
          </div>
        )}

        {activePage === "pingpong-feminino" && (
          <div>
            <PingPongFem />
          </div>
        )}

        {activePage === "valorant" && (
          <div>
            <Valorant />
          </div>
        )}

        {activePage === "lol" && (
          <div>
            <LoL />
          </div>
        )}

        {activePage === "brawl-stars" && (
          <div>
            <BrawlStars />
          </div>
        )}

        {activePage === "free-fire" && (
          <div>
            <FreeFire />
          </div>
        )}
      </div>
    </div>
  );
}