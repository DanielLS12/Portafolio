import { NavLink } from "react-router-dom";

const infoNavLinks = [
  {
    title: "Proyectos",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center">
        <div className="text-white text-base min-[295px]:text-lg sm:text-xl flex flex-col gap-6 lg:gap-8 lg:flex-row">
          {infoNavLinks.map((data, index) => (
            <NavLink
              to={`/${data.title}`}
              key={index}
              className={({ isActive }) => (isActive ? "active" : "desactive")}
            >
              {data.title}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
