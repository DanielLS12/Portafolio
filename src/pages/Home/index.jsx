import Introduction from "@components/Introduction";
import Section from "@components/Section";
import urlImg from "@assets/undraw/programming.svg";
import Container from "@components/Container";
import links from "@data/links"; 

function Home() {
  return (
    <Container>
      <Introduction
        welcomeMessage="Bienvenid@ a mi"
        title="Portafolio Web"
        subtitle="Diseño y Desarrollo Digital"
        content="Explora mi amplia variedad de proyectos y descubre aquellos que pueden llegar a interesarte. Siempre en constantes mejoras y dispuesto a compartirles mis habilidades y conocimientos. Estableciendo de esta manera una relación de colaboración y apoyo mutuo."
        urlImg={urlImg}
      />
      {links.filter(link => link.content).map(link => (
        <Section key={link.id} id={link.id} title={link.title}>
          {link.content}
        </Section>
      ))}
    </Container>
  );
}

export default Home;
