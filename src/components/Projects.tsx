import { roboto } from "@/assets/fonts";
import Image from "next/image";
import { FaTasks } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 dark:bg-gray-800 w-full">
      <div className="flex flex-col justify-center items-center p-4 mt-10 mb-2">
        <FaTasks className="text-5xl text-teal-500 dark:text-teal-300 mb-4" />
        <h2 className="text-xl dark:text-white font-semibold mb-10">{`Proyectos`}</h2>
        <article className={`${roboto.className} antialiased max-w-screen-lg lg:pl-6 lg:pr-2`}>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="border-2 dark:border shadow-xl dark:shadow-md dark:shadow-teal-300 dark:hover:border-teal-300 hover:bg-gray-200 hover:border-gray-200 border-gray-100 rounded-lg p-6 dark:bg-gray-700">
              <h3 className="dark:text-gray-100 mb-4">{`Proyecto #1`}</h3>
              <Image
                src={"/vercel.svg"}
                width={300}
                height={500}
                alt="Imagen Proyecto #1"
                className="my-10"
              />
              <p className="dark:text-gray-300 my-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit...
              </p>
              <div className="flex gap-4 justify-end">
              <FaGithub className="text-3xl hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-500" />
              <TfiWorld className="text-3xl hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-500" />
              </div>
            </div>
            <div className="border-2 dark:border shadow-xl dark:shadow-md dark:shadow-teal-300 dark:hover:border-teal-300 hover:bg-gray-200 hover:border-gray-200 border-gray-100 rounded-lg p-6 dark:bg-gray-700">
              <h3 className="dark:text-gray-100 mb-4">{`Proyecto #1`}</h3>
              <Image
                src={"/vercel.svg"}
                width={300}
                height={500}
                alt="Imagen Proyecto #1"
                className="my-10"
              />
              <p className="dark:text-gray-300 my-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit...
              </p>
              <div className="flex gap-4 justify-end">
              <FaGithub className="text-3xl hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-500" />
              <TfiWorld className="text-3xl hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-500" />
              </div>
            </div>
            <div className="border-2 dark:border shadow-xl dark:shadow-md dark:shadow-teal-300 dark:hover:border-teal-300 hover:bg-gray-200 hover:border-gray-200 border-gray-100 rounded-lg p-6 dark:bg-gray-700">
              <h3 className="dark:text-gray-100 mb-4">{`Proyecto #1`}</h3>
              <Image
                src={"/vercel.svg"}
                width={300}
                height={500}
                alt="Imagen Proyecto #1"
                className="my-10"
              />
              <p className="dark:text-gray-300 my-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit...
              </p>
              <div className="flex gap-4 justify-end">
              <FaGithub className="text-3xl hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-500" />
              <TfiWorld className="text-3xl hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-500" />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <span className="text-lg dark:text-teal-300 dark:hover:text-teal-500 cursor-pointer">{`Ver más...`}</span>
          </div>
        </article>
      </div>
    </section>
  );
}
