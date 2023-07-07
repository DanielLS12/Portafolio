import { Link } from "react-router-dom";

export function LogoPage({textSize}) {
  return (
    <Link to="/" className="flex">
      <img
        src="https://images-ext-1.discordapp.net/external/LtwJ8huSL0_DMVTbCulPSwLfjfIZ5C6UL-YLDmNXDmo/https/static.ssb.ee/images/companies/14943484_moonfox-ou_16233542_a_xl.png"
        className="logo logo_animate"
        alt="logo"
        width="44px"
        height="44px"
      />
      <div className="my-auto ml-2">
        <h1 className={`${textSize} text-white transition-all hover:scale-105`}>
          Demo MoonTi
        </h1>
      </div>
    </Link>
  );
}
