"use client"

import { useState } from "react";

const ShakeComponent = () => {
  const [isShaking, setIsShaking] = useState(false);

  const handleMouseEnter = () => setIsShaking(true);
  const handleMouseLeave = () => setIsShaking(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`w-60 h-72 flex items-center justify-center bg-gradient-to-b from-red-500 to-blue-500 ${
        isShaking ? "animate-shake" : ""
      }`}
    >
      <span className="text-white text-5xl font-bold">Shake</span>
    </div>
  );
};

export default ShakeComponent;
