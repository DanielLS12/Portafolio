import { Link } from "react-router-dom";

function LogoItem({textSize}) {
  return (
    <Link to="/" className="flex">
      <img
        src="favicon.ico"
        className="logo logo_animate"
        alt="logo"
        width="44px"
        height="44px"
        loading="lazy"
      />
      <div className="my-auto ml-2">
        <h1 className={`${textSize} text-gray-200 transition-all hover:scale-105`}>
          MoonTi Dev
        </h1>
      </div>
    </Link>
  );
}

export default LogoItem;