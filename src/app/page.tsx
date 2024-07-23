import { montserrat, roboto } from "@/assets/fonts";
import Header from "@/components/Header";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between bg-white dark:bg-gray-900">
      <Header />
      <section id="about-me" className="mt-20">
        <div className="flex flex-col justify-center items-center">
          <FaCode className="text-5xl text-teal-500 dark:text-teal-300 mb-4" />
          <h1 className="text-3xl mb-4 font-semibold dark:text-gray-300">
            {`Hola! soy `}
            <span className="dark:text-teal-300">{`Gerson`}</span>
          </h1>
          <div className="flex flex-col items-center lg:flex-row">
            <article
              className={`${roboto.className} antialiased p-4 dark:text-gray-300 max-w-screen-md`}
            >
              <p className="mb-4">
                {`💻 Soy ingeniero en informática con más de 5 años de`}
                <span className="text-teal-500 dark:text-teal-300">
                  {` experiencia `}
                </span>
                {`como desarrollador, he estado involucrado en todo el ciclo de vida
                del desarrollo de software.`}
              </p>
              <p className="mb-4">
                {`🔍 Aquí podrás visualizar algunos de los`}
                <span className="text-teal-500 dark:text-teal-300">
                  {` proyectos `}
                </span>
                {`en los que he estado involucrado a lo largo de mi trayectoria
                profesional.`}
              </p>

              <p className="mb-4">
                {`🛠 He trabajado con diversos lenguajes de programación tales como`}
                <span className="text-teal-500 dark:text-teal-300">
                  {` Java, Javascript, PHP, C# y Python y mucho más `}
                </span>
                {`, entre mis habilidades se encuentra la capacidad de adaptarme a
                los cambios de la industria.`}
              </p>
            </article>
            <Image
              src="/images/avatar-1.jpg"
              width={180}
              height={180}
              className="rounded-lg mb-8 block md:hidden shadow-lg dark:shadow-teal-300"
              alt="Foto de Gerson Pineda"
            />
            <Image
              src="/images/avatar-1.jpg"
              width={240}
              height={240}
              className="rounded-lg mb-8 hidden md:block shadow-lg dark:shadow-teal-300"
              alt="Foto de Gerson Pineda"
            />
          </div>
        </div>
      </section>
      <section id="projects"></section>
      <section id="experience"></section>

      <section id="education" className="bg-gray-100 dark:bg-gray-800 w-full">
        <div className="flex flex-col justify-center items-center p-4">
          <FaUniversity className="text-5xl text-teal-500 dark:text-teal-300 mb-4" />
          <h2 className="text-xl dark:text-white font-semibold mb-4">{`Educación`}</h2>
          <article className={`${roboto.className} antialiased`}>
            <h3 className="dark:text-teal-300 mb-4">{`Universidad Centro Occidental 'Lisandro Alvarado’`}</h3>
            <p className="dark:text-gray-300 mb-4">{`Maestría en Ciencias, Ingeniería en Informática.`}</p>
            <span className="w-full block text-right dark:text-white">{`2011 - 2018`}</span>
          </article>

        </div>
      </section>
      <section id="contact"></section>
    </main>
  );
}
