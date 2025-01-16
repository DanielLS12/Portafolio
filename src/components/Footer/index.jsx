import ContactIcons from "@components/ContactIcons"

function Footer() {
  return (
    <footer className="max-[1024px]:container xl:container mx-auto px-3 mt-auto w-full">
      <div className="border-t-2 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 flex-col md:flex-row">
            <div className="text-xl text-slate-400">Contactos:</div>
            <ContactIcons/>
          </div>
          <div className="text-center text-xl text-slate-400">  
              MoonTi Bit creado por: <span className="font-bold">Daniel Luna</span>.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
