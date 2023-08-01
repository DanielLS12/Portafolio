import ContactIcons from "@components/ContactIcons";
import photo from "@assets/myphoto/photo.webp";

function About() {
  return (
    <div className="flex flex-col justify-between gap-20 lg:flex-row items-center">
      <div className="flex flex-col gap-4 w-full">
        <div className="text-5xl min-[456px]:text-6xl 2xl:text-7xl text-center sm:text-left font-bold text-gray-200">
          <span>Soy&nbsp;</span>
          <h2 className="inline-block">Daniel Luna</h2>
        </div>
        <h3 className="text-[#FF3600] font-bold text-4xl min-[456px]:text-5xl text-center sm:text-left">
          Desarrollador Backend
        </h3>
        <div className="flex flex-col gap-4 text-gray-200 leading-9 text-left text-[1.2rem] min-[456px]:text-[1.3rem]">
          <p>
            Me dedico de manera autónoma al desarrollo, diseño, mantenimiento e implementación de aplicaciones web en diversas tecnologías. Actualmente, mi enfoque principal esta en mejorar mis habilidades en frameworks como <span className="text-[#FF3600]">React</span>, <span className="text-[#FF3600]">Django</span> y <span className="text-[#FF3600]">ASP.NET</span>.
          </p>
          <p>
            En mi búsqueda de nuevas oportunidades tras enfrentar limitaciones en mi carrera anterior, descubrí el fascinante mundo del desarrollo de software. Motivado por esta experiencia, decidí embarcarme en esta disciplina para continuar mi formación profesional. Finalmente, inclinándome al área del <span className="text-[#FF3600]">desarrollo web</span>.
          </p>
          
        </div>
        <div className="flex flex-col gap-6 sm:flex-row justify-between items-center sm:pt-4">
          <ContactIcons />
          <button className="bg-gray-300 font-semibold p-4 text-lg min-[456px]:text-xl rounded-md transition duration-300 ease-in-out w-full sm:w-auto hover:bg-gray-100 hover:ring-2 hover:ring-[#FF3600]">
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
