import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import LanguageDop from "@components/LanguageDop";
import TechStack from "@components/TechStack";
import ProjectItem from "@components/ProjectItem";
import Section from "@components/Section";
import Container from "@components/Container";

import imageProject from "@assets/imageProject/testimage11.jpg";
import Introduction from "../../components/Introduction";
import programming from "@assets/undraw/programming.svg";

function About() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  
  return (
    <Container>
        <Introduction
          welcomeMessage="Bienvenid@ a"
          title="Mi Portafolio Web"
          subtitle="Experiencias digitales increibles"
          content="Descubre mi amplia variedad de proyectos en curso y finalizados. Sé testigo de mi progreso superando desafíos y lograr resultados exitosos. Siempre aprendiendo y dispuesto a compartir conocimientos 🤝. "
          img={programming}
          isAboutPage={false}
        />
        <Section title="Proyectos personales">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-5">
            <ProjectItem title="Titulo 1" imageURL={imageProject} />
            <ProjectItem title="Titulo 2" imageURL={imageProject} />
            <ProjectItem title="Titulo 3" imageURL={imageProject} />
          </div>
        </Section>

      {/* <button
          type="button"
          onClick={openModal}
          className=" p-2 bg-gray-900 bg-opacity-90 hover:bg-opacity-100 rounded-md text-base min-[300px]:text-lg sm:text-xl transition duration-300 ease-out hover:ring-2 hover:ring-[#FF5733]"
        >
          Stack Development
        </button> */}

      {/* <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-20 text-gray-200"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
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
                enterFrom="opacity-0 "
                enterTo="opacity-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="relative rounded-lg bg-white sm:my-8 sm:w-full sm:max-w-lg border-4 border-[#F53F18]">
                  <div className="bg-gray-900 relative p-4 sm:p-6">
                    <div className="text-left">
                      <div className="flex flex-col w-full justify-between">
                        <Dialog.Title
                          as="h4"
                          className="text-5xl text-gray-100"
                        >
                          Mi vida - Stack
                        </Dialog.Title>
                      </div>
                      <div className="flex flex-col gap-4 py-4"> */}
                        {/* <span className="bg-orange-700 p-0.5 px-2 rounded-sm text-lg sm:text-base text-white font-semibold">
                          2015 - 2017
                        </span> */}
                        {/* <TechStack title="Lenguajes">
                          <LanguageDop name="HTML" color="bg-[#E34C26]" />
                          <LanguageDop name="CSS" color="bg-[#563D7C]" />
                          <LanguageDop name="JavaScript" color="bg-[#F1E05A]" />
                          <LanguageDop name="Python" color="bg-[#3572A5]" />
                          <LanguageDop name="C#" color="bg-[#178600]" />
                        </TechStack>
                        <TechStack title="Frameworks">
                          <LanguageDop name="HTML" color="bg-[#E34C26]" />
                          <LanguageDop name="CSS" color="bg-[#563D7C]" />
                          <LanguageDop name="JavaScript" color="bg-[#F1E05A]" />
                          <LanguageDop name="Python" color="bg-[#3572A5]" />
                          <LanguageDop name="C#" color="bg-[#178600]" />
                        </TechStack> */}
                        {/* <div className="flex flex-col gap-2 justify-center mx-auto">
                          <div className="bg-gray-700 p-0.5 px-2 rounded-sm text-lg sm:text-base text-orange-300 font-semibold">
                            Plataform:{" "}
                            <span className="text-orange-100">
                              Windows | Linux{" "}
                            </span>
                          </div>
                        </div> */}
                      {/* </div>
                      <button
                        type="button"
                        className="py-2 px-4 rounded-md w-full text-lg bg-gray-800 hover:bg-red-800 transition duration-300 ease-out"
                        onClick={closeModal}
                      >
                        Salir
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}
    </Container>
  );
}

export default About;
