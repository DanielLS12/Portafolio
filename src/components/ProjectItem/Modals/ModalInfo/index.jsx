import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";

function ModalInfo() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
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
                  <button
                    className="absolute right-0 p-0.5 bg-gray-300 rounded-md hover:bg-gray-200 hover:ring-2 hover:ring-[#FF3600] transition duration-300 ease-out"
                    onClick={openModal}
                  >
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#FF3600"
                      className="w-6 h-6 min-[360px]:w-8 min-[360px]:h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
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
                      <p className="text-sm min-[360px]:text-lg text-left text-gray-300 leading-relaxed">
                        Este proyecto tiene la finalidad de brindar un sistema
                        de gestión de usuarios, con el fin de que puedan
                        sentirse comodos al momento de realizar el pago de sus
                        servicios en tiempo real.
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
  );
}

export default ModalInfo;
