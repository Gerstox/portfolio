import { roboto } from "@/assets/fonts";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { MdWork } from "react-icons/md";

export default function Experience() {
  return (
    <section id="experience" className="bg-white dark:bg-gray-900 w-full">
      <div className="flex flex-col justify-center items-center p-4  my-10">
        <MdOutlineWorkOutline className="text-5xl text-teal-500 dark:text-teal-300 mb-4" />
        <h2 className="text-xl dark:text-gray-100 font-semibold mb-4">{`Experiencia`}</h2>
        <article className={`${roboto.className} antialiased mx-4 max-w-screen-lg`}>
          <ol className="relative text-gray-900 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 z-0">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 text-teal-500 dark:text-teal-300 dark:bg-gray-900">
                <MdWorkHistory />
              </span>
              <h2 className="font-semibold leading-tight">{`Desarrollador Full Stack`}</h2>
              <h3 className="font-medium leading-tight">{`Freelance`}</h3>
              <span className="text-xs">{`Mayo 2023 - Actualidad`}</span>
              <div className="my-4">
                <p className="text-sm mb-4">{`Desarrollo de microservicios para aplicación de gestion de cuentas bancarias.`}</p>
                <p className="text-sm mb-4">
                  {`Desarrollo de web para servicios de streaming tales como Netflix, Disney y más.`}
                </p>
                <span className="text-xs">
                  <strong>{`Stack`}</strong>
                  {` Java, Spring Boot, ReactJS, NextJS, TailwindCSS, Mysql`}
                </span>
              </div>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 text-teal-500 dark:text-teal-300 dark:bg-gray-900">
                <MdWork />
              </span>
              <h2 className="font-semibold leading-tight">{`Desarrollador Full Stack`}</h2>
              <h3 className="font-medium leading-tight">{`Rootstack - Panamá`}</h3>
              <span className="text-xs">{`Septiembre 2021 - Marzo 2023`}</span>
              <div className="my-4">
                <p className="text-sm mb-4">{`Desarrollo de funcionalidad para web gubernamental usando, Python con Flask, PHP Legacy y Laravel.`}</p>
                <p className="text-sm mb-4">
                  {`Desarrollo de Ecommerce, usando Python 3 con Odoo.`}
                </p>
                <span className="text-xs">
                  <strong>{`Stack`}</strong>
                  {` Python, Flask, PHP, Laravel, C#, .NET Framework Drupal, Laravel, MySQL`}
                </span>
              </div>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 text-teal-500 dark:text-teal-300 dark:bg-gray-900">
                <MdWork />
              </span>
              <h2 className="font-semibold leading-tight">{`Desarrollador Front End`}</h2>
              <h3 className="font-medium leading-tight">{`Messangi - Venezuela`}</h3>
              <span className="text-xs">{`Abril 2021 - Agosto 2021`}</span>
              <div className="my-4">
                <p className="text-sm mb-4">{`Desarrollo de interfaces de usuarios de sistema de mensajería online, usando Angular 8 y Angular Material.`}</p>
                <span className="text-xs">
                  <strong>{`Stack`}</strong>
                  {` Javascript, Angular, Angular MAterial`}
                </span>
              </div>
            </li>
            <li className="ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 text-teal-500 dark:text-teal-300 dark:bg-gray-900">
                <MdWork />
              </span>
              <h2 className="font-semibold leading-tight">{`Desarrollador Full Stack`}</h2>
              <h3 className="font-medium leading-tight">{`Grupo Mobius - España`}</h3>
              <span className="text-xs">{`Noviembre 2020 - Abril 2021`}</span>
              <div className="my-4">
                <p className="text-sm mb-4">{`Desarrollo de interfaces y lógica de negocios para sistema de control y administración de repuestos para automóviles, usando PHP con Laravel`}</p>
                <span className="text-xs">
                  <strong>{`Stack`}</strong> {`PHP, Laravel, MySQL`}
                </span>
              </div>
            </li>
            <li className="ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 text-teal-500 dark:text-teal-300 dark:bg-gray-900">
                <MdWork />
              </span>
              <h2 className="font-semibold leading-tight">{`Analista Programador`}</h2>
              <h3 className="font-medium leading-tight">{`Galac Software - Venezuela`}</h3>
              <span className="text-xs">{`Octubre 2019 - Noviembre 2020`}</span>
              <div className="my-4">
                <p className="text-sm mb-4">{`Desarrollo y soporte de funcionalidades a sistema administrativo contable`}</p>
                <span className="text-xs">
                  <strong>{`Stack`}</strong> {`Visual Basic 6, C#, .NET Framework, Raw SQL, SQL server`}
                </span>
              </div>
            </li>
            <li className="ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 text-teal-500 dark:text-teal-300 dark:bg-gray-900">
                <MdWork />
              </span>
              <h2 className="font-semibold leading-tight">{`Desarrollador Full Stack`}</h2>
              <h3 className="font-medium leading-tight">{`Binaural - Venezuela`}</h3>
              <span className="text-xs">{`Abril 2017 - Septiembre 2019`}</span>
              <div className="my-4">
                <p className="text-sm mb-4">{`Desarrollo de tienda online para empresa de distribución de alimentos, usando Python con Odoo y OpenStreetMap.`}</p>
                <p className="text-sm mb-4">{`Desarrollo de funcionalidades para aplicación web de compra y venta de inmuebles, usando Angular, NodeJS, MongoDB, Express y OpenStreetMap.`}</p>
                <span className="text-xs">
                  <strong>{`Stack`}</strong> {`PHP, Python, Flask, Django, Odoo, OpenStreetMap, NodeJS, Express, Angular, MySQL, PostgreSQL, MongoDB`}
                </span>
              </div>
            </li>
          </ol>
        </article>
      </div>
    </section>
  );
}
