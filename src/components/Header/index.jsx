import LogoItem from "@components/LogoItem";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const infoNavLinks = [
  {
    id: "",
    name: "Inicio",
  },
  {
    id: "projects",
    name: "Proyectos"
  },
  {
    id: "aboutme",
    name: "Sobre Mí"
  },
  {
    id: "skills",
    name: "Habilidades"
  }
];

function Header (){
  return (
    <header className="max-[1024px]:container xl:container mx-auto right-0 left-0 static lg:fixed z-20 px-3 bg-opacity-90 bg-gray-900">
      <div className=" border-b-2 py-4">
        <div className="flex justify-center sm:justify-between items-center">
          <LogoItem sizeTextNameLogo="text-2xl"/>
          <nav className="text-white text-xl hidden lg:flex flex-col gap-8 lg:flex-row">
            {infoNavLinks.map((data) => (
              <a
                href={`#${data.id}`}
                key={data.id}
                className="transition-color duration-300 ease-in-out lg:hover:text-gray-300"
              >
                {data.name}
              </a>
            ))}
          </nav>
          <Menu as="div" className="w-12 h-12 fixed bottom-7 right-3 z-10 lg:hidden bg-white p-2 rounded-md">
            <Menu.Button as="button" aria-label="Abrir menú">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#FF3600" className="w-12 h-12 fixed bottom-7 right-3 lg:hidden bg-white p-2 rounded-md">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items as="nav" className="fixed bg-white rounded-md right-3 bottom-20">
                <div className="text-xl flex flex-col">
                  {infoNavLinks.map((data) => (
                    <Menu.Item key={data.id}>
                      <a
                        href={`#${data.id}`}
                        className="transition-color p-4 duration-300 ease-in-out text-black lg:hover:text-gray-300"
                      >
                        {data.name}
                      </a>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
