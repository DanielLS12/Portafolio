import ContactIcons from "../ContactIcons/ContactIcons"
import {LogoPage} from "../LogoPage";

function Footer() {
  console.log("Footer render")
  return (
    <footer className="bg-gray-900 py-8 relative">
      <div className="xl:container mx-auto flex flex-col px-3 md:px-6 sm:px-8 text-white">
        <div className="mx-auto">
          <LogoPage textSize="text-2xl 2xl:text-3xl"/>
          <ContactIcons className="custom_contact_icons mt-2"/>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0" />
        <section className="text-center text-slate-400">
           Demo MoonTi created by: <b>Daniel Luna</b>.
        </section>
      </div>
    </footer>
  );
}

export default Footer;
