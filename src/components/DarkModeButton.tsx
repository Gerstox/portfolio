"use client";

import { useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function DarkModeButton({ className }: {className: string}) {

  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <button onClick={() => darkModeHandler()} className={className}>
      {
        dark && <IoSunny className="text-2xl text-yellow-500" /> // render sunny when dark is true
      }
      {
        !dark && <IoMoon className="text-2xl text-gray-900" /> // render moon when dark is false
      }
    </button>
  );
}
