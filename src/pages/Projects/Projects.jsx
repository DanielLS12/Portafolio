import { useState, Fragment } from "react";
import { Dialog, Transition, Tab } from "@headlessui/react";
import { LanguageDop } from "../../components/LanguageDop";

function About() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="text-gray-200 absolute bottom-0 right-0 m-1 p-2 bg-gray-900 bg-opacity-90 hover:bg-opacity-100 rounded-md text-base min-[300px]:text-lg sm:text-xl transition duration-300 ease-out hover:ring-2 hover:ring-orange-700"
        >
          Stack Development
        </button>
      </div>

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
                    <button
                      type="button"
                      className="absolute right-0 top-0 m-3 rounded-md font-semibold text-gray-900 w-auto hover:scale-110 transition-transform"
                      onClick={closeModal}
                    >
                      <img src="icon_close.svg" alt="icon_close" width="30px" />
                    </button>
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h4"
                          className="text-5xl flex  justify-between items-center font-semibold text-gray-100"
                        >
                          Mi vida - Stack
                        </Dialog.Title>
                        <div className="py-3 flex flex-col gap-2 items-start">
                          {/* <span className="bg-orange-700 p-0.5 px-2 rounded-sm text-lg sm:text-base text-white font-semibold">
                            2015 - 2017
                          </span> */}
                          <Tab.Group>
                            <Tab.List className="text-white">
                              <Tab>Languages</Tab>
                              <Tab>Frameworks</Tab>
                              <Tab>Libraries</Tab>
                              <Tab>Others</Tab>
                            </Tab.List>
                            <Tab.Panels>
                              <Tab.Panel>Content 1</Tab.Panel>
                              <Tab.Panel>Content 2</Tab.Panel>
                              <Tab.Panel>Content 3</Tab.Panel>
                              <Tab.Panel>Content 4</Tab.Panel>
                            </Tab.Panels>
                          </Tab.Group>
                          {/* <div className="flex flex-col gap-2 justify-center mx-auto">
                            <div className="bg-gray-700 p-0.5 px-2 rounded-sm text-lg sm:text-base text-orange-300 font-semibold">
                              Plataform:{" "}
                              <span className="text-orange-100">
                                Windows | Linux{" "}
                              </span>
                            </div>
                          </div> */}
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
    </>
  );
}

export default About;
