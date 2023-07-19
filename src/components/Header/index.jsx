import LogoItem from "@components/LogoItem";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link as LinkScroll } from "react-scroll";

const infoNavLinks = [
  {
    id: "home",
    name : "Inicio"
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
              <LinkScroll
                title={data.name}
                href={`#${data.id}`}
                to={`${data.id}`}
                spy={true}
                smooth={true}
                offset={data.id == 'home' ? -200 : -20}
                duration={500}
                key={data.id}
                className="transition-color duration-300 ease-in-out lg:hover:text-gray-300"
              >
                {data.name}
              </LinkScroll>
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
              <Menu.Items as="ul" className="fixed bg-white rounded-md right-3 bottom-20">
                {infoNavLinks.map((data) => (
                  <Menu.Item as="li" key={data.id} className="text-xl flex flex-col">
                    <LinkScroll
                      title={data.name}
                      href={`#${data.id}`}
                      to={`${data.id}`}
                      spy={true}
                      smooth={true}
                      offset={data.id == 'home' ? -150 : 20}
                      duration={500}
                      className="transition-color rounded-md p-4 duration-300 ease-in-out text-black lg:hover:text-gray-300"
                      activeClass="ring-2 ring-[#FF3600]"
                    >
                      {data.name}
                    </LinkScroll>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
