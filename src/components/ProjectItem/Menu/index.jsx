import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectItemMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="relative inline-block text-left z-10">
      <Menu.Button
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-900 bg-opacity-90 hover:bg-opacity-100  px-3 py-2 text-md font-semibold shadow-sm hover:ring-2 hover:ring-orange-700 transition duration-300 ease-out"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        Options
        <svg className="-mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
        </svg>
      </Menu.Button>

      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform scale-90"
        enterTo="transform scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform scale-100"
        leaveTo="transform opacity-0 scale-0"
      >
        <Menu.Items
          className="absolute mt-0.5 w-40 origin-top-left rounded-md bg-gray-900 bg-opacity-90 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`${classNames(
                    active &&
                      "hover:ring-2 rounded-md hover:ring-orange-700 transition duration-300 ease-out"
                  )} block px-4 py-2 text-md`}
                >
                  Visit project
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`${classNames(
                    active &&
                      "hover:ring-2 rounded-md hover:ring-orange-700 transition duration-300 ease-out"
                  )} block px-4 py-2 text-md`}
                >
                  Watch code
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${classNames(
                    active &&
                      "hover:ring-2 rounded-md hover:ring-orange-700 transition duration-300 ease-out"
                  )} block px-4 py-2 text-md`}
                >
                  More information
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
