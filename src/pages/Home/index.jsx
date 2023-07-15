import Introduction from "@components/Introduction";
import Section from "@components/Section";
import Skills from "@components/Section/Skills";
import About from "@components/Section/About";
import Container from "@components/Container";
import programming from "@assets/undraw/programming.svg";
import imageProject from "@assets/imageProject/testimage11.jpg";
import ProjectItem from "@components/ProjectItem";

function Home() {
  return (
    <Container>
      <Introduction
          welcomeMessage="Bienvenid@ a"
          title="Mi Portafolio Web"
          subtitle="Experiencias digitales increibles"
          content="Descubre mi amplia variedad de proyectos en curso y finalizados. Siempre en constante mejora y dispuesto a compartir y enseñar conocimientos, estableciendo así una relación de colaboración y apoyo mutuo. 🤝 "
          img={programming}
          isAboutPage={false}
        />
      <Section title="Proyectos personales">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-10">
          <ProjectItem title="Titulo 1" imageURL={imageProject} />
          <ProjectItem title="Titulo 2" imageURL={imageProject} />
          <ProjectItem title="Titulo 3" imageURL={imageProject} />
        </div>
      </Section>
      <Section title="Sobre Mí">
        <About/>
      </Section>
      <Section title="Habilidades">
        <Skills/>
      </Section>
    </Container>
  );
}

export default Home;
