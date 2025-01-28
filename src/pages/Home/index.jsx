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
        content="Explora mis proyectos que pueden llegar a interesarte. Estoy enfocado en ofrecer soluciones útiles y bien diseñadas, con atención al detalle y a las necesidades de los usuarios, además de estar dispuesto a compartir mis habilidades y conocimientos. Siempre abierto a nuevos retos que impulsen la innovación y la colaboración."
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
