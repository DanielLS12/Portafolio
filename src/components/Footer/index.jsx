import ContactIcons from "@components/ContactIcons"
import LogoItem from "@components/LogoItem";

function Footer() {
  console.log("Footer render")
  return (
    <footer className="bg-gray-900 py-8 relative">
      <div className="max-[1024px]:container xl:container mx-auto flex flex-col px-3 lg:px-10  text-white">
        <div className="mx-auto">
          <LogoItem textSize="text-2xl 2xl:text-3xl"/>
          <ContactIcons className="custom_contact_icons mt-2"/>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0" />
        <section className="text-center text-slate-400">
          <h2>
            MoonTi Dev creado por: <b>Daniel Luna</b>.
          </h2>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
