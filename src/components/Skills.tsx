import { roboto } from "@/assets/fonts";
import { FaTools, FaJava, FaPhp, FaJs, FaReact, FaAngular, FaCss3, FaDocker, FaGit, FaAws } from "react-icons/fa";
import { DiMysql, DiPostgresql, DiMongodb } from "react-icons/di";
import { useTranslations } from "next-intl";

export default function Skills() {

  const t = useTranslations("SkillsComponent");
  return (
    <section id="skills" className="bg-gray-100 dark:bg-gray-800 w-full">
      <div className="flex flex-col justify-center items-center p-4 mt-10 mb-6">
        <FaTools className="text-5xl text-teal-500 dark:text-teal-300 mb-4" />
        <h2 className="text-xl dark:text-white font-semibold mb-4">{t('title')}</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <article className={`${roboto.className} antialiased`}>
            <h3 className="text-teal-500 dark:text-teal-300 mb-4">{`Backend`}</h3>
            <div className="flex flex-col gap-4">
              <div className="shadow-lg bg-white dark:bg-gray-800 dark:shadow rounded-lg dark:shadow-teal-300 px-4 py-2 dark:hover:bg-gray-900 cursor-crosshair">
                <h2 className="flex items-center gap-2 dark:text-gray-100 text-xl mb-2">
                  <FaJava className="text-3xl" />
                  Java - Spring Boot
                </h2>
                <span className="dark:text-gray-100">{t('advanced')}</span>
              </div>
              <div className="shadow-lg bg-white dark:bg-gray-800 dark:shadow rounded-lg dark:shadow-teal-300 px-4 py-2 dark:hover:bg-gray-900 cursor-crosshair">
                <h2 className="flex items-center gap-2 dark:text-gray-100 text-xl mb-2">
                  <FaPhp className="text-3xl" />
                  PHP - Laravel
                </h2>
                <span className="dark:text-gray-100">{t('advanced')}</span>
              </div>

              <div className="shadow-lg bg-white dark:bg-gray-800 dark:shadow rounded-lg dark:shadow-teal-300 px-4 py-2 dark:hover:bg-gray-900 cursor-crosshair">
                <h2 className="flex items-center gap-2 dark:text-gray-100 text-xl mb-2">
                  <FaJs className="text-3xl text-gray-800 bg-gray-100" />
                  Javascript - NodeJS
                </h2>
                <span className="dark:text-gray-100">{t('advanced')}</span>
              </div>
            </div>
          </article>
          <article className={`${roboto.className} antialiased`}>
            <h3 className="text-teal-500 dark:text-teal-300 mb-4">{`FrontEnd`}</h3>
            <div className="flex flex-col gap-4">
            <div className="shadow-lg bg-white dark:bg-gray-800 dark:shadow rounded-lg dark:shadow-teal-300 px-4 py-2 dark:hover:bg-gray-900 cursor-crosshair">
                <h2 className="flex items-center gap-2 dark:text-gray-100 text-xl mb-2">
                <FaReact className="text-3xl" />
                  React
                </h2>
                <span className="dark:text-gray-100">{t('advanced')}</span>
              </div>
              <div className="shadow-lg bg-white dark:bg-gray-800 dark:shadow rounded-lg dark:shadow-teal-300 px-4 py-2 dark:hover:bg-gray-900 cursor-crosshair">
                <h2 className="flex items-center gap-2 dark:text-gray-100 text-xl mb-2">
                  <FaAngular className="text-3xl" />
                  Angular
                </h2>
                <span className="dark:text-gray-100">{t('intermediate')}</span>
              </div>
              <div className="shadow-lg bg-white dark:bg-gray-800 dark:shadow rounded-lg dark:shadow-teal-300 px-4 py-2 dark:hover:bg-gray-900 cursor-crosshair">
                <h2 className="flex items-center gap-2 dark:text-gray-100 text-xl mb-2">
                  <FaCss3 className="text-3xl" />
                  TailwinCSS
                </h2>
                <span className="dark:text-gray-100">{t('advanced')}</span>
              </div>
            </div>
          </article>

          <article className={`${roboto.className} antialiased`}>
            <h3 className="text-teal-500 dark:text-teal-300 mb-4">{t('databases')}</h3>
            <div className="flex flex-col gap-4">
            <div className="shadow-lg bg-white dark:bg-gray-800 dark:shadow rounded-lg dark:shadow-teal-300 px-4 py-2 dark:hover:bg-gray-900 cursor-crosshair">
                <h2 className="flex items-center gap-2 dark:text-gray-100 text-xl mb-2">
                <DiMysql className="text-3xl" />
                  MySQL
                </h2>
                <span className="dark:text-gray-100">{t('advanced')}</span>
              </div>
              <div className="shadow-lg bg-white dark:bg-gray-800 dark:shadow rounded-lg dark:shadow-teal-300 px-4 py-2 dark:hover:bg-gray-900 cursor-crosshair">
                <h2 className="flex items-center gap-2 dark:text-gray-100 text-xl mb-2">
                  <DiPostgresql className="text-3xl" />
                  PostgreSQL
                </h2>
                <span className="dark:text-gray-100">{t('advanced')}</span>
              </div>
              <div className="shadow-lg bg-white dark:bg-gray-800 dark:shadow rounded-lg dark:shadow-teal-300 px-4 py-2 dark:hover:bg-gray-900 cursor-crosshair">
                <h2 className="flex items-center gap-2 dark:text-gray-100 text-xl mb-2">
                  <DiMongodb className="text-3xl" />
                  MongoDB
                </h2>
                <span className="dark:text-gray-100">{t('intermediate')}</span>
              </div>
            </div>
          </article>

          <article className={`${roboto.className} antialiased`}>
            <h3 className="text-teal-500 dark:text-teal-300 mb-4">{`${t('knowledge')}`}</h3>
            <div className="flex flex-col gap-4">
            <div className="shadow-lg bg-white dark:bg-gray-800 dark:shadow rounded-lg dark:shadow-teal-300 px-4 py-2 dark:hover:bg-gray-900 cursor-crosshair">
                <h2 className="flex items-center gap-2 dark:text-gray-100 text-xl mb-2">
                <FaAws className="text-3xl" />
                  AWS
                </h2>
                <span className="dark:text-gray-100">{t('intermediate')}</span>
              </div>
              <div className="shadow-lg bg-white dark:bg-gray-800 dark:shadow rounded-lg dark:shadow-teal-300 px-4 py-2 dark:hover:bg-gray-900 cursor-crosshair">
                <h2 className="flex items-center gap-2 dark:text-gray-100 text-xl mb-2">
                  <FaGit className="text-3xl" />
                  Git
                </h2>
                <span className="dark:text-gray-100">{t('advanced')}</span>
              </div>
              <div className="shadow-lg bg-white dark:bg-gray-800 dark:shadow rounded-lg dark:shadow-teal-300 px-4 py-2 dark:hover:bg-gray-900 cursor-crosshair">
                <h2 className="flex items-center gap-2 dark:text-gray-100 text-xl mb-2">
                  <FaDocker className="text-3xl" />
                  Docker
                </h2>
                <span className="dark:text-gray-100">{t('advanced')}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
