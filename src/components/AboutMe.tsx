import { roboto } from "@/assets/fonts";
import Image from "next/image";
import { FaCode } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section id="about-me" className="mt-20">
      <div className="flex flex-col justify-center items-center mb-10">
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
            src="/images/avatar-1.png"
            width={180}
            height={180}
            className="rounded-lg mb-8 block md:hidden shadow-lg dark:shadow-teal-300"
            alt="Foto de Gerson Pineda"
          />
          <Image
            src="/images/avatar-1.png"
            width={240}
            height={240}
            className="rounded-lg mb-8 hidden md:block shadow-lg dark:shadow-teal-300"
            alt="Foto de Gerson Pineda"
          />
        </div>
      </div>
    </section>
  );
}
