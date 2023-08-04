import moontibit from "@assets/imageProject/moontibit.png";
import ProjectItem from "@components/ProjectItem";

function Projects() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-14 xl:gap-20">
      <ProjectItem
        title="MoonTi Bit"
        content="Decidí crear mi primer portafolio de desarrollo web después de inspirarme al ver videos de youtubers revisando portafolios de sus seguidores."
        proyectImage={moontibit}
        proyectURL="https://www.google.com.pe/?hl=es"
        githubURL="https://github.com/DanielLS12/Portafolio"
      />
    </div>
  )
}

export default Projects