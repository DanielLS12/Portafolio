import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectItemMenu() {
  return (
    <Menu
      as="div"
      className="relative inline-block text-left z-10 text-gray-900 font-semibold"
    >
      <Menu.Button as="button" className="inline-flex justify-center gap-x-1.5 rounded-md bg-gray-300 bg-opacity-90 hover:bg-opacity-100 p-[15px] text-base font-semibold hover:ring-2 hover:ring-orange-700 transition duration-300 ease-out" aria-label="Abrir opciones">
        Options
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
        <Menu.Items className="mt-1 origin-top-left rounded-md bg-gray-900 bg-opacity-90 shadow-lg p-2">
          <div className="grid grid-cols-2 gap-2 text-center text-base">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`${classNames(
                    active &&
                      "hover:ring-2 hover:ring-orange-700"
                  )} block p-[0.93rem] bg-gray-300 bg-opacity-90 rounded-md transition duration-300 ease-out`}
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
                      "hover:ring-2 hover:ring-orange-700"
                  )} block p-[0.93rem] bg-gray-300 bg-opacity-90 rounded-md transition duration-300 ease-out`}
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
                      "hover:ring-2 hover:ring-orange-700"
                  )} block p-[0.93rem] bg-gray-300 rounded-md transition duration-300 ease-out`}
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
                      "hover:ring-2 hover:ring-orange-700"
                  )} block p-[0.93rem] bg-gray-300 rounded-md transition duration-300 ease-out`}
                >
                  Stack Tecnológico
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
