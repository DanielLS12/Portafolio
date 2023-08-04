import Introduction from "@components/Introduction";
import Section from "@components/Section";
import Skills from "@components/Section/Skills";
import About from "@components/Section/About";
import Container from "@components/Container";
import programming from "@assets/undraw/programming.svg";
import Projects from "@components/Section/Projects";

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
        <Projects/>
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
