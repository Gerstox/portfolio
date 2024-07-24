import DarkModeButton from "./DarkModeButton";
import { orbitron } from "@/assets/fonts";
import Navigation from "./Navigation";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  return (
    <div className="flex w-full justify-between items-center p-4 bg-white dark:bg-gray-900 fixed z-10 top-0">
      <span
        className={`${orbitron.className} antialiased text-4xl text-teal-500 dark:text-teal-300 font-semibold`}
      >
        G
      </span>
      <div className="flex gap-4">
        <LocaleSwitcher className="block lg:hidden"  />
        <DarkModeButton className="block lg:hidden" />
        <Navigation />
        <LocaleSwitcher className="hidden lg:block" />
        <DarkModeButton className="hidden lg:block" />
      </div>
    </div>
  );
}
