import LogoItem from "@components/LogoItem";
import { NavLink } from "react-router-dom";

const infoNavLinks = [
  {
    title: "Proyectos",
  },
];

const Header = () => {
  console.log("Header render");
  return (
    <header className="max-[1024px]:container xl:container mx-auto right-0 left-0 fixed z-20 px-3 bg-opacity-90 bg-gray-900">
      <div className=" border-b-2 py-4">
        <div className="flex justify-between">
          <LogoItem textSize="text-base min-[295px]:text-lg min-[350px]:text-xl"/>
          <nav className="flex items-center">
            <div className="text-white text-base min-[295px]:text-lg sm:text-xl flex flex-col gap-6 lg:gap-8 lg:flex-row">
              {infoNavLinks.map((data, index) => (
                <NavLink
                  to={`/${data.title}`}
                  key={index}
                  className={({ isActive }) => (isActive ? "bg-orange-700 rounded-md py-2 px-4" : "transition duration-300 ease-in-out bg-gray-700 hover:bg-orange-700 rounded-md py-2 px-4")}
                >
                  {data.title}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
