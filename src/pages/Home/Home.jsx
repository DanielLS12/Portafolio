import Introduction from "@components/Introduction";
import Section from "@components/Section";
import Skills from "@components/Section/Skills"

function Home() {
  return (
    <div className="py-4 sm:py-12">
      <div className="flex flex-col gap-12">
        <Introduction />
        <Section title="Habilidades">
          <Skills/>
        </Section>
      </div>
    </div>
  );
}

export default Home;
