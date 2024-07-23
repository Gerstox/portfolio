import { roboto } from "@/assets/fonts";
import { FaUniversity } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="bg-gray-100 dark:bg-gray-800 w-full">
      <div className="flex flex-col justify-center items-center p-4 mt-10">
        <FaUniversity className="text-5xl text-teal-500 dark:text-teal-300 mb-4" />
        <h2 className="text-xl dark:text-white font-semibold mb-4">{`Educación`}</h2>
        <article className={`${roboto.className} antialiased`}>
          <h3 className="dark:text-teal-300 mb-4">{`Universidad Centro Occidental 'Lisandro Alvarado’`}</h3>
          <p className="dark:text-gray-300 mb-4">{`Maestría en Ciencias, Ingeniería en Informática.`}</p>
          <span className="w-full block text-right dark:text-white">{`2011 - 2018`}</span>
        </article>
      </div>
    </section>
  );
}
