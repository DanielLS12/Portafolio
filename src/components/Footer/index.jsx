import ContactIcons from "@components/ContactIcons"

function Footer() {
  return (
    <footer className="max-[1024px]:container xl:container mx-auto px-3">
      <div className="border-t-2 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xl text-slate-400">Contactos:</span><ContactIcons className="custom_contact_icons"/>
          </div>
          <div className="text-center text-lg text-slate-400">  
              MoonTi Bit creado por: <b>Daniel Luna</b>.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
