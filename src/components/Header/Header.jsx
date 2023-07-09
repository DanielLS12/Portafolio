import Navbar from "../Navegation/Navbar";
import {LogoPage} from "../LogoPage";

const Header = () => {
  console.log("Header render");
  return (
    <header className="bg-opacity-90 bg-gray-900 backdrop-blur-md py-4 fixed w-full z-20 top-0">
      <div className="xl:container mx-auto flex justify-between px-4 lg:px-10">
        <LogoPage textSize="text-base min-[295px]:text-lg min-[350px]:text-xl"/>
        <Navbar/>
      </div>
    </header>
  );
};

export default Header;
