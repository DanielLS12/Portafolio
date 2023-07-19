import { Menu, Transition,Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProjectItemMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <Menu
      as="div"
      className="relative inline-block text-left z-10 text-gray-900 font-semibold"
    >
      <Menu.Button as="button" className="inline-flex justify-center gap-x-1.5 rounded-md bg-gray-300 hover:bg-gray-200 p-[15px] text-base font-semibold  hover:ring-2 hover:ring-[#FF3600] transition duration-300 ease-out" aria-label="Abrir opciones">
        Opciones
        <svg className=" h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
        </svg>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
      >
        <Menu.Items className="mt-1 origin-top-left rounded-md bg-gray-900 shadow-lg p-2">
          <div className="grid grid-cols-2 gap-2 text-center text-base">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`${classNames(
                    active &&
                      "ring-2 ring-[#FF3600]"
                  )} block p-[0.93rem] bg-gray-300 hover:bg-gray-200 rounded-md transition duration-300 ease-out`}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Ver proyecto
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`${classNames(
                    active &&
                      "ring-2 ring-[#FF3600]"
                  )} block p-[0.93rem] bg-gray-300 hover:bg-gray-200 rounded-md transition duration-300 ease-out`}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Ver código
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${classNames(
                    active &&
                      "ring-2 ring-[#FF3600]"
                  )} block p-[0.93rem] bg-gray-300 hover:bg-gray-200  rounded-md transition duration-300 ease-out`}
                  onClick={openModal}
                >
                  Más información
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${classNames(
                    active &&
                      "ring-2 ring-[#FF3600]"
                  )} block p-[0.93rem] bg-gray-300 hover:bg-gray-200 rounded-md transition duration-300 ease-out`}
                >
                  Stack Tecnológico
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
      <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-20 " onClose={openModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900 bg-opacity-90" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center text-center px-3">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="rounded-md sm:my-8 sm:max-w-lg border-2 p-6 bg-[#111827] border-[#FF3600]">
                    <div className="relative sm:flex sm:items-start">
                      <button className="absolute right-0 p-0.5 bg-gray-300 rounded-md hover:bg-gray-200 hover:ring-2 hover:ring-[#FF3600] transition duration-300 ease-out" onClick={openModal}>
                        <svg  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF3600" className="w-6 h-6 min-[360px]:w-8 min-[360px]:h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <div className="text-left ">
                        <Dialog.Title
                          as="h5"
                          className="text-4xl min-[360px]:text-5xl text-gray-100 font-semibold"
                        >
                          Titulo
                        </Dialog.Title>
                        <div className="py-3 flex flex-col gap-4 items-start">
                          <span className="bg-[#FF3600] p-0.5 px-2 rounded-sm text-sm min-[360px]:text-base text-white font-semibold">
                            2015 - 2017
                          </span>
                          <p className="text-sm min-[360px]:text-lg text-left text-gray-200 leading-relaxed">
                            Este proyecto tiene la finalidad de brindar un
                            sistema de gestión de usuarios, con el fin de que
                            puedan sentirse comodos al momento de realizar el
                            pago de sus servicios en tiempo real.
                          </p>
                          <div className="bg-gray-800 py-0.5 px-2 rounded-sm text-sm min-[360px]:text-base text-orange-400 font-semibold">
                            Plataformas:
                            <span className="pl-1 text-orange-200">
                              Windows | Linux
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
    </Menu>
  );
}

export default ProjectItemMenu;