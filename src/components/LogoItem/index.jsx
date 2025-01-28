import { Link as LinkScroll } from "react-scroll";

function LogoItem({sizeTextNameLogo}) {
  return (
    <LinkScroll title="Inicio" href="#home" to={`home`}
    spy={true}
    smooth={true}
    offset={-200}
    duration={500} className="flex">
      <img
        src="favicon.ico"
        className="logo logo_animate"
        alt="logo"
        width="44px"
        height="44px"
        loading="lazy"
      />
      <div className="my-auto ml-2">
        <h1 className={`${sizeTextNameLogo} text-gray-900 dark:text-gray-200`}>
          Daniel JL
        </h1>
      </div>
    </LinkScroll>
  );
}

export default LogoItem;