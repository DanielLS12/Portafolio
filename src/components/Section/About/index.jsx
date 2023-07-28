import ContactIcons from "@components/ContactIcons";
import photo from "@assets/myphoto/photo.webp";

function About() {
  return (
    <div className="flex flex-col justify-between gap-20 lg:flex-row items-center">
      <div className="flex flex-col gap-4 sm:gap-5 w-full">
        <div className="text-5xl min-[456px]:text-6xl 2xl:text-7xl text-center sm:text-left font-bold text-gray-200">
          <span>Soy&nbsp;</span>
          <h2 className="inline-block">Daniel Luna</h2>
        </div>
        <h3 className="text-[#FF3600] font-bold text-4xl min-[456px]:text-5xl text-center sm:text-left">
          Desarrollador Backend
        </h3>
        <div className="flex flex-col gap-4 text-gray-200 leading-10 text-left text-[1.2rem] min-[456px]:text-[1.3rem]">
          <p>
            Actualmente me dedico a desarrollar, diseñar, mantener, implementar
            y brindar aplicaciones web en diferentes tecnologías de manera
            independiente. Siempre afrontando nuevos retos y resolviendo
            problemas del mundo real en código.
          </p>
          <p>
            Mi interés y dedicación por este mundo surgen de la búsqueda de nuevas oportunidades después de enfrentar limitaciones en mi carrera anterior. Al encontrar esta fascinante disciplina, decidí embarcarme en el desarrollo de software para continuar mi formación profesional y abrirme a un campo más accesible y prometedor.
          </p>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row justify-between items-center">
          <ContactIcons />
          <button className="bg-gray-300 font-semibold p-4 text-lg rounded-md transition duration-300 ease-in-out w-full sm:w-auto hover:bg-gray-200 hover:ring-2 hover:ring-[#FF3600]">
            Descargar Curriculum
          </button>
        </div>
      </div>
      <div className="px-5 lg:px-0 hidden lg:block w-full">
        <img
          className="ml-auto rounded-md filter_shadow_orange"
          src={photo}
          width="560px"
          height="690px"
          alt="myphoto"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

export default About;
