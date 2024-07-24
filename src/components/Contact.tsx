import { roboto } from "@/assets/fonts";
import { RiContactsBook3Line } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Contact() {

  const t = useTranslations("ContactComponent");
  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-800 w-full">
      <div className="flex flex-col justify-center items-center p-4 mt-10">
        <RiContactsBook3Line className="text-5xl text-teal-500 dark:text-teal-300 mb-4" />
        <h2 className="text-xl dark:text-gray-100 font-semibold">{t('title')}</h2>
        <h3 className="text-lg dark:text-gray-100 mb-4">{t('subtitle')}</h3>
        <div
          className={`${roboto.className} antialiased dark:text-gray-100 flex flex-col gap-2`}
        >
          <div className="flex gap-4">
            <MdAlternateEmail className="text-3xl text-teal-500 dark:text-teal-300" />
            <Link href={'mailto:pinedagerson1993@gmail.com'} className="text-lg">{`pinedagerson1993@gmail.com`}</Link>
          </div>
          <div className="flex gap-4">
            <FaPhone className="text-2xl text-teal-500 dark:text-teal-300" />
            <Link target="_blank" href={'https://wa.me/584125278897'} className="text-lg">{`+58 (0412) 5278897`}</Link>
          </div>
        </div>
      </div>
        <div className="flex gap-10 justify-center my-4">
          <FaGithub className="text-4xl text-teal-500 dark:text-teal-300" />
          <FaLinkedin className="text-4xl text-teal-500 dark:text-teal-300" />
        </div>
    </section>
  );
}
