import Projects from "@components/Section/Projects";
import Techs from "@components/Section/Techs";
import About from "@components/Section/About";
import Contact from "@components/Section/Contact";

const links = [
  {
    id: "home",
    title: "Inicio",
  },
  {
    id: "projects",
    title: "Proyectos",
    content: <Projects />,
  },
  {
    id: "aboutme",
    title: "Sobre Mí",
    content: <About />
  },
  {
    id: "techs",
    title: "Tecnologías",
    content: <Techs />
  },
  {
    id: "contact",
    title: "Contacto",
    content: <Contact />
  },
];

export default links;