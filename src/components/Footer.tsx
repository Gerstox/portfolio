import DarkModeButton from "./DarkModeButton";
import { roboto } from "@/assets/fonts";
import Navigation from "./Navigation";

export default function Footer() {
  return (
    <div className={`${roboto.className} flex flex-col w-full justify-between items-center p-4 bg-white dark:bg-gray-900 fixed bottom-0 z-10`}>
      <div className={`w-full text-center font-semibold dark:text-gray-100`}>
      Desarrollado por <span className="text-teal-500 dark:text-teal-500">Gerson Pineda</span>
      </div>
      <span className="dark:text-gray-100">© 2024 Todos los derechos reservados</span>
    </div>
  );
}
