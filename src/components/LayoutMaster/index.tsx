import { NextComponentType } from 'next'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import { FiUsers, FiFile, FiTarget } from 'react-icons/fi'
import { FaFileCode } from 'react-icons/fa'

const LayoutMaster: NextComponentType = ({ children }: any) => {
  const router = useRouter()

  const isActiveLink = (path: string) => {
    return router?.pathname == path
  }
  return (
    <div className="main-application flex h-screen bg-gray-50 dark:bg-gray-900 ">
      <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <Link href="/">
            <a
              className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200 slogan"
              href="#"
            >
              DSI - CLIPPING
            </a>
          </Link>

          <ul className="mt-6">
            <li className="relative px-6 py-3">
              <span
                className={`absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg ${
                  isActiveLink('/') ? 'bg-purple-600' : ''
                }`}
              ></span>
              <Link href="/">
                <a
                  className={`inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100`}
                >
                  <FiUsers className="w-5 h-5" />
                  <span className="ml-4">Lista de Usuários</span>
                </a>
              </Link>
            </li>

            <li className="relative px-6 py-3">
              <span
                className={`absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg ${
                  isActiveLink('/documents') ? 'bg-purple-600' : ''
                }`}
              ></span>
              <Link href="/documents">
                <a className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100">
                  <FiFile className="w-5 h-5" />
                  <span className="ml-4">Documentos</span>
                </a>
              </Link>
            </li>
            <li className="relative px-6 py-3">
              <span
                className={`absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg ${
                  isActiveLink('/campaigns') ? 'bg-purple-600' : ''
                }`}
              ></span>
              <Link href="/campaigns">
                <a className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100">
                  <FiTarget className="w-5 h-5" />
                  <span className="ml-4">Campanhas</span>
                </a>
              </Link>
            </li>
            <li className="relative px-6 py-3">
              <span
                className={`absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg ${
                  isActiveLink('/templates') ? 'bg-purple-600' : ''
                }`}
              ></span>
              <Link href="/templates">
                <a className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100">
                  <FaFileCode className="w-5 h-5" />
                  <span className="ml-4">Templates</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="flex flex-col flex-1 w-full">
        <header className="z-1 py-4 bg-white shadow-md dark:bg-gray-800">
          <div className="container flex items-center justify-end h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
            <ul className="flex items-center flex-shrink-0 space-x-6 ">
              <li className="relative">
                <button className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none">
                  <img
                    className="object-cover w-9 h-9  p-1 rounded-full bg-gray-200 border-gray-400 border-2"
                    src="https://avatars.dicebear.com/4.5/api/bottts/carlos-o-carvalho.svg"
                    alt=""
                    aria-hidden="true"
                  />
                </button>
                <div className="hidden">
                  <ul
                    className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                    aria-label="submenu"
                  >
                    <li className="flex">
                      <a
                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                        href="#"
                      >
                        <svg
                          className="w-4 h-4 mr-3"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        <span>Profile</span>
                      </a>
                    </li>
                    <li className="flex">
                      <a
                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                        href="#"
                      >
                        <svg
                          className="w-4 h-4 mr-3"
                          aria-hidden="true"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span>Settings</span>
                      </a>
                    </li>
                    <li className="flex">
                      <a
                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                        href="#"
                      >
                        <svg
                          className="w-4 h-4 mr-3"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                        </svg>
                        <span>Log out</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <main className="h-full overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}

export default LayoutMaster
