import DarkModeButton from "./DarkModeButton";
import { orbitron } from "@/assets/fonts";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="flex w-full justify-between items-center p-4 bg-white dark:bg-gray-900 fixed">
      <span
        className={`${orbitron.className} antialiased text-4xl text-teal-500 dark:text-teal-300 font-semibold`}
      >
        G
      </span>
      <div className="flex gap-4">
        <DarkModeButton className="block lg:hidden" />
        <Navigation />
        <DarkModeButton className="hidden lg:block" />
      </div>
    </div>
  );
}
