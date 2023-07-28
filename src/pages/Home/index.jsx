import Introduction from "@components/Introduction";
import Section from "@components/Section";
import Skills from "@components/Section/Skills";
import About from "@components/Section/About";
import Container from "@components/Container";
import programming from "@assets/undraw/programming.svg";
import imageProject from "@assets/imageProject/testimage11.jpg";
import moontibit from "@assets/imageProject/moontibit.png";
import ProjectItem from "@components/ProjectItem";

function Home() {
  return (
    <Container>
      <Introduction
        welcomeMessage="Bienvenid@ a"
        title="Mi Portafolio Web"
        subtitle="Experiencias digitales increibles"
        content="Explora mi amplia variedad de proyectos y descubre aquellos que pueden llegar a interesarte. Siempre en constantes mejoras y dispuesto a compartirles mis habilidades y conocimientos. Estableciendo de esta manera una relación de colaboración y apoyo mutuo."
        img={programming}
      />
      <Section id="projects" title="PROYECTOS PERSONALES">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 sm:gap-8">
          <ProjectItem
            title="MoonTi Bit"
            content="Este es mi primer portafolio para comenzar mi camino en el desarrollo web. Inspirado al ver algunos videos sobre youtubers revisando portafolios de sus seguidores, decidí hacerme el mío."
            proyectImage={moontibit}
            proyectURL="https://www.google.com.pe/?hl=es"
            githubURL="https://github.com/DanielLS12/Portafolio"
          />
        </div>
      </Section>
      <Section id="aboutme" title="SOBRE MÍ">
        <About />
      </Section>
      <Section id="skills" title="HABILIDADES">
        <Skills />
      </Section>
    </Container>
  );
}

export default Home;
