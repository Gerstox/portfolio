import { roboto } from "@/assets/fonts";
import { GrCertificate } from "react-icons/gr";
import { SiPlatzi } from "react-icons/si";
import { MdDownload } from "react-icons/md";
import { useTranslations } from "next-intl";

export default function Certifications() {

  const t = useTranslations("CertificationsComponent");
  const c = useTranslations("Common");
  return (
    <section
      id="certifications"
      className="bg-white dark:bg-gray-900 w-full"
    >
      <div className="flex flex-col justify-center items-center p-4 mt-10 mb-6">
        <GrCertificate className="text-5xl text-teal-500 dark:text-teal-300 mb-4" />
        <h2 className="text-xl dark:text-white font-semibold mb-4">{t('title')}</h2>
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 max-w-screen-lg">
          <article
            className={`${roboto.className} antialiased flex justify-between bg-gray-100 hover:bg-gray-200 shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700 p-4 rounded-lg`}
          >
            <div className="w-full">
              <h3 className="dark:text-teal-300 mb-4">{t('certs.c1')}</h3>
              <div className="flex justify-between">
                <span className="dark:text-gray-300 flex gap-4">
                  <SiPlatzi className="text-2xl text-teal-500 dark:text-teal-300" />
                  {`Platzi`}
                </span>
                <span className="w-full block text-right dark:text-gray-100">{`${c('months.march')} 2024`}</span>
              </div>
            </div>
            {/* <div className="w-16">
              <MdDownload className="w-16 text-4xl text-teal-500 dark:text-teal-300 cursor-pointer" />
            </div> */}
          </article>
          <article
            className={`${roboto.className} antialiased flex justify-between bg-gray-100 hover:bg-gray-200 shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700 p-4 rounded-lg`}
          >
            <div className="w-full">
              <h3 className="dark:text-teal-300 mb-4">{t('certs.c2')}</h3>
              <div className="flex justify-between">
                <span className="dark:text-gray-300 flex gap-4">
                  <SiPlatzi className="text-2xl text-teal-500 dark:text-teal-300" />
                  {`Platzi`}
                </span>
                <span className="w-full block text-right dark:text-gray-100">{`${c('months.march')} 2024`}</span>
              </div>
            </div>
            {/* <div className="w-16">
              <MdDownload className="w-16 text-4xl text-teal-500 dark:text-teal-300 cursor-pointer" />
            </div> */}
          </article>
          <article
            className={`${roboto.className} antialiased flex justify-between bg-gray-100 hover:bg-gray-200 shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700 p-4 rounded-lg`}
          >
            <div className="w-full">
              <h3 className="dark:text-teal-300 mb-4">{t('certs.c3')}</h3>
              <div className="flex justify-between">
                <span className="dark:text-gray-300 flex gap-4">
                  <SiPlatzi className="text-2xl text-teal-500 dark:text-teal-300" />
                  {`Platzi`}
                </span>
                <span className="w-full block text-right dark:text-gray-100">{`${c('months.march')} 2024`}</span>
              </div>
            </div>
            {/* <div className="w-16">
              <MdDownload className="w-16 text-4xl text-teal-500 dark:text-teal-300 cursor-pointer" />
            </div> */}
          </article>
          <article
            className={`${roboto.className} antialiased flex justify-between bg-gray-100 hover:bg-gray-200 shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700 p-4 rounded-lg`}
          >
            <div className="w-full">
              <h3 className="dark:text-teal-300 mb-4">{t('certs.c4')}</h3>
              <div className="flex justify-between">
                <span className="dark:text-gray-300 flex gap-4">
                  <SiPlatzi className="text-2xl text-teal-500 dark:text-teal-300" />
                  {`Platzi`}
                </span>
                <span className="w-full block text-right dark:text-gray-100">{`${c('months.feb')} 2024`}</span>
              </div>
            </div>
            {/* <div className="w-16">
              <MdDownload className="w-16 text-4xl text-teal-500 dark:text-teal-300 cursor-pointer" />
            </div> */}
          </article>
          <article
            className={`${roboto.className} antialiased flex justify-between bg-gray-100 hover:bg-gray-200 shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700 p-4 rounded-lg`}
          >
            <div className="w-full">
              <h3 className="dark:text-teal-300 mb-4">{t('certs.c5')}</h3>
              <div className="flex justify-between">
                <span className="dark:text-gray-300 flex gap-4">
                  <SiPlatzi className="text-2xl text-teal-500 dark:text-teal-300" />
                  {`Platzi`}
                </span>
                <span className="w-full block text-right dark:text-gray-100">{`${c('months.jan')} 2024`}</span>
              </div>
            </div>
            {/* <div className="w-16">
              <MdDownload className="w-16 text-4xl text-teal-500 dark:text-teal-300 cursor-pointer" />
            </div> */}
          </article>
          <article
            className={`${roboto.className} antialiased lg:flex hidden justify-between bg-gray-100 hover:bg-gray-200 shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700 p-4 rounded-lg`}
          >
            <div className="w-full">
              <h3 className="dark:text-teal-300 mb-4">{t('certs.c6')}</h3>
              <div className="flex justify-between">
                <span className="dark:text-gray-300 flex gap-4">
                  <SiPlatzi className="text-2xl text-teal-500 dark:text-teal-300" />
                  {`Platzi`}
                </span>
                <span className="w-full block text-right dark:text-gray-100">{`${c('months.feb')} 2024`}</span>
              </div>
            </div>
            {/* <div className="w-16">
              <MdDownload className="w-16 text-4xl text-teal-500 dark:text-teal-300 cursor-pointer" />
            </div> */}
          </article>
        </div>
      </div>
      {/* <div className="flex justify-end px-4 mb-4">
        <span className="text-lg dark:text-teal-300 dark:hover:text-teal-500 cursor-pointer">{`Ver más...`}</span>
      </div> */}
    </section>
  );
}
