"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="relative flex justify-between items-center bg-white dark:bg-gray-900">
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-gray-900 dark:text-teal-300 dark:bg-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="block h-8 w-8 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <Link className="text-sm text-gray-900 hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-300" href="#about-me">
              Sobre mí
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link className="text-sm text-teal-500 dark:text-teal-300 font-bold" href="#projects">
              Proyectos
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link className="text-sm text-gray-900 hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-300" href="#experience">
              Experiencia
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link className="text-sm text-gray-900 hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-300" href="#education">
              Educación
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link className="text-sm text-gray-900 hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-300" href="#certifications">
              Certificaciones
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link className="text-sm text-gray-900 hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-300" href="#contact">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={clsx(
          "navbar-menu relative z-50 transition-width ease-in-out duration-500",
          { block: isOpen === true, hidden: isOpen === false }
        )}
      >
        <div
          className="navbar-backdrop fixed inset-0 bg-black dark:bg-gray-100 opacity-25"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-11/12 max-w-sm py-4 px-2 bg-white dark:bg-gray-900 border-r dark:border-none overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none px-2" href="#">
              <span className={` text-4xl text-teal-500 dark:text-teal-300 font-semibold`}>
                G
              </span>
            </a>
            <button className="navbar-close px-2" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="h-6 w-6 text-gray-900 dark:text-teal-300 cursor-pointer hover:text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block px-2 py-4 text-sm font-semibold text-gray-900 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-gray-700 dark:bg-gray-800 hover:text-teal-500 rounded"
                  href="#about-me" onClick={() => setIsOpen(!isOpen)}
                >
                  Sobre mí
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block px-2 py-4 text-sm font-semibold text-gray-900 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-gray-700 dark:bg-gray-800 hover:text-teal-500 rounded"
                  href="#projects" onClick={() => setIsOpen(!isOpen)}
                >
                  Proyectos
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block px-2 py-4 text-sm font-semibold text-gray-900 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-gray-700 dark:bg-gray-800 hover:text-teal-500 rounded"
                  href="#experience" onClick={() => setIsOpen(!isOpen)}
                >
                  Experiencia
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block px-2 py-4 text-sm font-semibold text-gray-900 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-gray-700 dark:bg-gray-800 hover:text-teal-500 rounded"
                  href="#education" onClick={() => setIsOpen(!isOpen)}
                >
                  Educación
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block px-2 py-4 text-sm font-semibold text-gray-900 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-gray-700 dark:bg-gray-800 hover:text-teal-500 rounded"
                  href="#certifications" onClick={() => setIsOpen(!isOpen)}
                >
                  Certificaciones
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block px-2 py-4 text-sm font-semibold text-gray-900 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-gray-700 dark:bg-gray-800 hover:text-teal-500 rounded"
                  href="#contact" onClick={() => setIsOpen(!isOpen)}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
