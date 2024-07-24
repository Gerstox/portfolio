import { roboto } from "@/assets/fonts";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import DownloadCV from "./DownloadCV";
import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations("AboutMeComponent");

  return (
    <section id="about-me">
      <div className="flex flex-col justify-center items-center mb-10">
        <FaCode className="text-5xl text-teal-500 dark:text-teal-300 mb-4" />
        <h1 className="text-3xl mb-4 font-semibold dark:text-gray-300">
          {t("greeting")}
          <span className="dark:text-teal-300">{`Gerson`}</span>
        </h1>
        <div className="flex flex-col items-center lg:flex-row">
          <article
            className={`${roboto.className} antialiased p-4 dark:text-gray-300 max-w-screen-md`}
          >
            <p className="mb-4">
              {t("paragraph.one")}
              <span className="text-teal-500 dark:text-teal-300">
                {t("paragraph.two")}
              </span>
              {t("paragraph.three")}
            </p>
            <p className="mb-4">
              {t("paragraph.four")}
              <span className="text-teal-500 dark:text-teal-300">
                {t("paragraph.five")}
              </span>
              {t("paragraph.six")}
            </p>

            <p className="mb-4">
              {t("paragraph.seven")}
              <span className="text-teal-500 dark:text-teal-300">
                {t("paragraph.eight")}
              </span>
              {t("paragraph.nine")}
            </p>
          </article>
          <div>
            <Image
              src="/images/avatar-1.png"
              width={180}
              height={180}
              className="rounded-lg mb-8 block md:hidden shadow-lg dark:shadow-teal-300"
              alt={t("image.alt")}
            />
            <Image
              src="/images/avatar-1.png"
              width={240}
              height={240}
              className="rounded-lg mb-8 hidden md:block shadow-lg dark:shadow-teal-300"
              alt={t("image.alt")}
            />
            <DownloadCV />
          </div>
        </div>
      </div>
    </section>
  );
}
