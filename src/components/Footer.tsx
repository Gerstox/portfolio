import DarkModeButton from "./DarkModeButton";
import { roboto } from "@/assets/fonts";
import Navigation from "./Navigation";
import { useTranslations } from "next-intl";

export default function Footer() {

  const t = useTranslations("FooterComponent");
  return (
    <div className={`${roboto.className} flex flex-col w-full justify-between items-center p-4 bg-white dark:bg-gray-900 fixed bottom-0 z-10`}>
      <div className={`w-full text-center font-semibold dark:text-gray-100`}>
      {t('developedby')} <span className="text-teal-500 dark:text-teal-500">Gerson Pineda</span>
      </div>
      <span className="dark:text-gray-100">{t('rights')}</span>
    </div>
  );
}
