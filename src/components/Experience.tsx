import { roboto } from "@/assets/fonts";
import { useTranslations } from "next-intl";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { MdWork } from "react-icons/md";

export default function Experience() {
  const t = useTranslations("ExperienceComponent");
  const c = useTranslations("Common");
  return (
    <section id="experience" className="bg-white dark:bg-gray-900 w-full">
      <div className="flex flex-col justify-center items-center p-4  my-10">
        <MdOutlineWorkOutline className="text-5xl text-teal-500 dark:text-teal-300 mb-4" />
        <h2 className="text-xl dark:text-gray-100 font-semibold mb-4">
          {t("title")}
        </h2>
        <article
          className={`${roboto.className} antialiased mx-4 max-w-screen-lg`}
        >
          <ol className="relative text-gray-900 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 z-0">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 text-teal-500 dark:text-teal-300 dark:bg-gray-900">
                <MdWorkHistory />
              </span>
              <h2 className="font-semibold leading-tight">{t("fullstack")}</h2>
              <h3 className="font-medium leading-tight">{`Freelance`}</h3>
              <span className="text-xs">
                {c("months.may")} 2023 - {c("months.currently")}
              </span>
              <div className="my-4">
                <p className="text-sm mb-4">{t("freelance.p1")}</p>
                <p className="text-sm mb-4">{t("freelance.p2")}</p>
                <span className="text-xs">
                  <strong>{`Stack`}</strong> {t("freelance.stack")}
                </span>
              </div>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 text-teal-500 dark:text-teal-300 dark:bg-gray-900">
                <MdWork />
              </span>
              <h2 className="font-semibold leading-tight">{t("fullstack")}</h2>
              <h3 className="font-medium leading-tight">{`Rootstack - Panamá`}</h3>
              <span className="text-xs">
                {c("months.sep")} 2021 - {c("months.march")} 2023
              </span>
              <div className="my-4">
                <p className="text-sm mb-4">{t("rootstack.p1")}</p>
                <p className="text-sm mb-4">{t("rootstack.p2")}</p>
                <span className="text-xs">
                  <strong>{`Stack`}</strong> {t("rootstack.stack")}
                </span>
              </div>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 text-teal-500 dark:text-teal-300 dark:bg-gray-900">
                <MdWork />
              </span>
              <h2 className="font-semibold leading-tight">{t("frontend")}</h2>
              <h3 className="font-medium leading-tight">{`Messangi - Venezuela`}</h3>
              <span className="text-xs">
                {c("months.april")} 2021 - {c("months.aug")} 2021
              </span>
              <div className="my-4">
                <p className="text-sm mb-4">{t("messangi.p1")}</p>
                <span className="text-xs">
                  <strong>{`Stack`}</strong> {t("messangi.stack")}
                </span>
              </div>
            </li>
            <li className="ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 text-teal-500 dark:text-teal-300 dark:bg-gray-900">
                <MdWork />
              </span>
              <h2 className="font-semibold leading-tight">{t("fullstack")}</h2>
              <h3 className="font-medium leading-tight">{`Grupo Mobius - España`}</h3>
              <span className="text-xs">
                {c("months.nov")} 2020 - {c("months.april")} 2021
              </span>
              <div className="my-4">
                <p className="text-sm mb-4">{t("mobius.p1")}</p>
                <span className="text-xs">
                  <strong>{`Stack`}</strong> {t("mobius.stack")}
                </span>
              </div>
            </li>
            <li className="ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 text-teal-500 dark:text-teal-300 dark:bg-gray-900">
                <MdWork />
              </span>
              <h2 className="font-semibold leading-tight">{t("analyst")}</h2>
              <h3 className="font-medium leading-tight">{`Galac Software - Venezuela`}</h3>
              <span className="text-xs">
                {c("months.oct")} 2019 - {c("months.nov")} 2020
              </span>
              <div className="my-4">
                <p className="text-sm mb-4">{t("galac.p1")}</p>
                <span className="text-xs">
                  <strong>{`Stack`}</strong> {t("galac.stack")}
                </span>
              </div>
            </li>
            <li className="ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 text-teal-500 dark:text-teal-300 dark:bg-gray-900">
                <MdWork />
              </span>
              <h2 className="font-semibold leading-tight">{t("fullstack")}</h2>
              <h3 className="font-medium leading-tight">{`Binaural - Venezuela`}</h3>
              <span className="text-xs">
                {c("months.april")} 2017 - {c("months.sep")} 2019
              </span>
              <div className="my-4">
                <p className="text-sm mb-4">{t("binaural.p1")}</p>
                <p className="text-sm mb-4">{t("binaural.p2")}</p>
                <span className="text-xs">
                  <strong>{`Stack`}</strong> {t("binaural.stack")}
                </span>
              </div>
            </li>
          </ol>
        </article>
      </div>
    </section>
  );
}
