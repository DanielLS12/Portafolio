import Introduction from "@components/Introduction";
import Section from "@components/Section";
import Skills from "@components/Section/Skills";
import Container from "@components/Container";
import photo from "@assets/myphoto/photo.webp";
import programming from "@assets/undraw/programming.svg";


function Home() {
  return (
    <Container>
      <Introduction
        welcomeMessage="Hola comunidad"
        title="Daniel Luna"
        subtitle="Desarrollador Front end"
        content="Dedicado a brindar servicios digitales con diferentes tecnologías.
          En busca de oportunidades para afrontar nuevos retos y resolver
          problemas del mundo real en código. Apasionado por la programación
          💻, la música 🎵 y las películas de ciencia ficción y sobrenatural
          🎬."
        img={photo}
        isHomePage={true}
      />
      <Section title="Habilidades">
        <Skills />
      </Section>
    </Container>
  );
}

export default Home;
