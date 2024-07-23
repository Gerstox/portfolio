import { roboto } from "@/assets/fonts";
import { RiContactsBook3Line } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-800 w-full">
      <div className="flex flex-col justify-center items-center p-4 mt-10">
        <RiContactsBook3Line className="text-5xl text-teal-500 dark:text-teal-300 mb-4" />
        <h2 className="text-xl dark:text-gray-100 font-semibold">{`Contacto`}</h2>
        <h3 className="text-lg dark:text-gray-100 mb-4">{`y redes sociales`}</h3>
        <div
          className={`${roboto.className} antialiased dark:text-gray-100 flex flex-col gap-2`}
        >
          <div className="flex gap-4">
            <MdAlternateEmail className="text-3xl text-teal-500 dark:text-teal-300" />
            <span className="text-lg">{`pinedagerson1993@gmail.com`}</span>
          </div>
          <div className="flex gap-4">
            <FaPhone className="text-2xl text-teal-500 dark:text-teal-300" />
            <span className="text-lg">{`+58 (0412) 5278897`}</span>
          </div>
        </div>
      </div>
        <div className="flex gap-4 justify-center my-4">
          <FaGithub className="text-4xl text-teal-500 dark:text-teal-300" />
          <FaLinkedin className="text-4xl text-teal-500 dark:text-teal-300" />
        </div>
    </section>
  );
}
