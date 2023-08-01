import LogoItem from "@components/LogoItem";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link as LinkScroll } from "react-scroll";

const links = [
  {
    id: "home",
    name: "Inicio",
  },
  {
    id: "projects",
    name: "Proyectos",
  },
  {
    id: "aboutme",
    name: "Sobre Mí",
  },
  {
    id: "skills",
    name: "Habilidades",
  },
];

function Header() {
  return (
    <header className="max-[1024px]:container xl:container mx-auto right-0 left-0 static lg:fixed z-20 px-3 bg-opacity-90 bg-gray-900">
      <div className=" border-b-2 py-4">
        <div className="flex justify-center sm:justify-between items-center">
          <LogoItem sizeTextNameLogo="text-2xl" />
          <nav className="hidden lg:flex flex-col gap-8 lg:flex-row">
            {links.map((link) => (
              <LinkScroll
                title={link.name}
                href={`#${link.id}`}
                to={`${link.id}`}
                spy={true}
                smooth={true}
                offset={link.id == "home" ? -200 : -20}
                duration={500}
                key={link.id}
                className="text-xl text-gray-200 transition-color duration-300 ease-linear lg:hover:text-[#FF3600]"
              >
                {link.name}
              </LinkScroll>
            ))}
          </nav>
          <Menu
            as="div"
            className="w-12 h-12 fixed bottom-7 right-3 z-10 lg:hidden p-2 rounded-md"
          >
            <Menu.Button aria-label="Abrir menú">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="#FF3600"
                className="w-12 h-12 fixed bottom-7 right-3 lg:hidden bg-gray-200 focus:bg-gray-900 p-2 rounded-md"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
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
              <Menu.Items className="fixed bg-gray-200 rounded-md right-3 bottom-20 text-xl flex flex-col">
                {links.map((link) => (
                    <LinkScroll
                      key={link.id}
                      title={link.name}
                      href={`#${link.id}`}
                      to={`${link.id}`}
                      smooth={true}
                      offset={link.id == "home" ? -150 : 20}
                      duration={500}
                      className="transition-color rounded-md p-4 duration-300 ease-in-out text-gray-900 font-semibold lg:hover:text-gray-300"
                      activeClass="ring-2 ring-[#FF3600]"
                    >
                        {link.name}
                    </LinkScroll>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;