import { useState, Fragment, useEffect } from "react";
import { Transition, Dialog } from "@headlessui/react";
import LanguageDop from "@components/LanguageDop";
import TechStack from "@components/TechStack";
import useObserver from "@hooks/useObserver";

function ProjectItem({ title, content, proyectImage, proyectURL, githubURL }) {
  const [showStackModal, setShowStackModal] = useState(false);
  const [observer,setElements,entries] = useObserver({
    threshold: 0.10,
    root: null
  });

  useEffect(() => {
    const projects = document.querySelectorAll(".loading");
    setElements(projects);
  },[setElements]);

  useEffect(() => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const lazyCard = entry.target;
        lazyCard.classList.remove("loading");
        lazyCard.classList.add("loaded");
        observer.unobserve(lazyCard);
      }
    });
  },[entries,observer]);
  
  const openStackModal = () => {
    setShowStackModal(!showStackModal);
  };
  return (
    <article className="flex flex-col rounded-md bg-gray-800 filter_shadow_orange loading">
      <div className="saturate-150">
        <img
          src={proyectImage}
          alt="proyectImage"
          className="rounded-t-md"
          width="1080px"
          height="520px"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-4 sm:p-5 flex flex-col gap-4 h-full">
        <h5 className="text-3xl min-[456px]:text-4xl text-[#FF3600] font-semibold">{title}</h5>
        <p className="text-[1.1rem] min-[456px]:text-[1.3rem] text-gray-200 ">{content}</p>
        <div className="grid gap-4 mt-auto">
          <a
            title="Visitar proyecto"
            href={proyectURL}
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-900 text-lg min-[456px]:text-xl font-semibold p-[0.93rem] bg-gray-300 hover:bg-gray-100  rounded-md transition duration-300 ease-out hover:ring-2 hover:ring-[#FF3600] text-center inline-flex items-center justify-center"
          >
            Visitar proyecto
          </a>
          <a
            title="Ver código"
            href={githubURL}
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-900 text-lg min-[456px]:text-xl  font-semibold p-[0.93rem] bg-gray-300 hover:bg-gray-100  rounded-md transition duration-300 ease-out hover:ring-2 hover:ring-[#FF3600] text-center inline-flex items-center justify-center"
          >
            Ver código
          </a>
          <button className="text-gray-900 text-lg min-[456px]:text-xl font-semibold p-[0.93rem] bg-gray-300 hover:bg-gray-100  rounded-md transition duration-300 ease-out hover:ring-2 hover:ring-[#FF3600] min-[368px]:col-span-2" onClick={openStackModal}>
            Stack de desarrollo
          </button>
        </div>
      </div>
      <Transition appear show={showStackModal} as={Fragment}>
        <Dialog as="div" className="relative z-20 " onClose={openStackModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300 "
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
                enter="ease-linear duration-300"
                enterFrom="opacity-0 -translate-x-16"
                enterTo="opacity-100"
                leave="ease-linear duration-200 -translate-x-16"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="rounded-md sm:my-8 sm:max-w-lg w-full border-2 p-6 min-[360px]:p-8 bg-gray-800 border-[#FF3600]">
                  <div className="relative sm:flex sm:items-start">
                    <button
                      className="absolute right-0 p-0.5 bg-gray-300 rounded-md hover:bg-gray-200 hover:ring-2 hover:ring-[#FF3600] transition duration-300 ease-out"
                      onClick={openStackModal}
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
                    <div className="text-left w-full flex flex-col gap-4">
                      <Dialog.Title
                        as="h5"
                        className="text-4xl text-gray-100"
                      >
                        {title}
                      </Dialog.Title>
                      <div className="flex flex-col gap-4 items-start">
                        <div className="flex flex-col gap-6 w-full">
                          <TechStack title="Lenguajes">
                            <LanguageDop name="HTML" color="bg-[#E34C26]" />
                            <LanguageDop name="CSS" color="bg-[#563D7C]" />
                            <LanguageDop
                              name="JavaScript"
                              color="bg-[#F1E05A]"
                            />
                          </TechStack>
                          <TechStack title="Frameworks y librerías">
                            <LanguageDop name="React" color="bg-[#24D1F5]" />
                            <LanguageDop
                              name="Tailwind CSS"
                              color="bg-[#4682B4]"
                            />
                          </TechStack>
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
    </article>
  );
}

export default ProjectItem;
