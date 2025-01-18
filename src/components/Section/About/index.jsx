import ContactIcons from "@components/ContactIcons";
import photo from "@assets/myphoto/photo.webp";

function About() {
  return (
    <div className="flex flex-col justify-between gap-20 lg:flex-row items-center">
      <div className="flex flex-col gap-2 sm:gap-4 w-full">
        <div className="text-5xl min-[456px]:text-6xl 2xl:text-7xl text-center sm:text-left font-bold text-gray-200">
          <span>Soy&nbsp;</span>
          <h2 className="inline-block">Daniel Luna</h2>
        </div>
        <h3 className="text-[#FF3600] font-bold text-4xl min-[456px]:text-5xl text-center sm:text-left">
          Desarrollador FullStack
        </h3>
        <div className="mx-auto sm:ml-0 block lg:hidden pt-2">
          <img
            className="rounded-md filter_shadow_orange"
            src={photo}
            width="560px"
            height="690px"
            alt="myphoto"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex flex-col gap-4 text-orange-100 leading-9 text-[1.2rem] min-[456px]:text-[1.3rem] py-2">
          <p>
            Me dedico de manera autónoma al desarrollo, diseño, mantenimiento e implementación de aplicaciones web en diversas tecnologías. Actualmente, mi enfoque principal esta en mejorar mis habilidades en frameworks como <span className="text-[#FF5800] font-bold">.NET Framework</span>, <span className="text-[#FF5800] font-bold">.NET</span> y <span className="text-[#FF5800] font-bold">ASP.NET</span>.
          </p>
          <p>
            En mi búsqueda de nuevas oportunidades tras enfrentar limitaciones en mi carrera anterior, descubrí el fascinante mundo del desarrollo de software. Motivado por esta experiencia, decidí embarcarme en esta disciplina para continuar mi formación profesional, inclinándome más al área de la tecnología .NET.
            Sin embargo, estoy abierto a explorar y aprender otras tecnologías como Java, Spring Boot o cualquier otra tecnología que me permita crecer profesionalmente y aportar valor a los proyectos en los que participe.
          </p>      
        </div>
        <div className="pt-4">
          <ContactIcons />
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
