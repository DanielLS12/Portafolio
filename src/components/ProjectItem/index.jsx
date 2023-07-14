import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ProjectItemMenu from "@components/ProjectItem/Menu"

function ProjectItem({ title, imageURL, githubURL }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <article>
      <h5 className="text-2xl min-[300px]:text-3xl pb-4 text-center text-gray-200">{title}</h5>
      <div className="relative rounded-md bg-gray-800 border-4 border-gray-900">
        <div className="absolute p-2">
            <ProjectItemMenu githubURL={githubURL} />
        </div>
        <img
          className="absolute right-0 m-1.5 hover:-rotate-45 transition duration-500 ease-out"
          src="favicon.ico"
          alt="logoEmpresa"
          width="48px"
          height="48px"
          loading="lazy"
        />
        <img
          src="https://neoattack.com/wp-content/uploads/2019/04/logotipo.jpg"
          alt="project_1"
          className="rounded-md"
          width="800px"
          height="800px"
          loading="lazy"
        />
        <button
          type="button"
          onClick={openModal}
          className="text-gray-200 absolute bottom-0 right-0 m-1 p-2 bg-gray-900 bg-opacity-90 hover:bg-opacity-100 rounded-md text-base min-[300px]:text-lg sm:text-xl transition duration-300 ease-out hover:ring-2 hover:ring-orange-700"
        >
          Stack Development
        </button>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-20" onClose={closeModal}>
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
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="relative rounded-lg bg-white sm:my-8 sm:w-full sm:max-w-lg border-4 border-orange-700 saturate-150">
                    <div className="bg-gray-800 relative p-4 sm:p-6">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                          <Dialog.Title
                            as="h4"
                            className="text-5xl text-gray-100 font-semibold"
                          >
                            Mi vida
                          </Dialog.Title>
                          <div className="py-3 flex flex-col gap-2 items-start">
                            <span className="bg-orange-700 p-0.5 px-2 rounded-sm text-lg sm:text-base text-white font-semibold">
                              2015 - 2017
                            </span>
                            <p className="text-xl sm:text-lg text-justify text-gray-300 leading-relaxed">
                              Este proyecto tiene la finalidad de brindar un
                              sistema de gestión de usuarios, con el fin de que
                              puedan sentirse comodos al momento de realizar el
                              pago de sus servicios en tiempo real.
                            </p>
                            <div className="flex flex-col gap-2 justify-center mx-auto">
                              <div className="bg-gray-700 p-0.5 px-2 rounded-sm text-lg sm:text-base text-orange-300 font-semibold">
                                Plataformas:
                                <span className="pl-1 text-orange-100">
                                  Windows | Linux
                                </span>
                              </div>
                            </div>
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
      </div>
    </article>
  );
}

export default ProjectItem;
