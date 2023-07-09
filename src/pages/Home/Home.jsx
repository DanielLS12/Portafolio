
import ContactIcons from "@components/ContactIcons/ContactIcons";
/* import { ProjectItem } from "../../components/ProjectItem"; */
import { LanguageDop } from "@components/LanguageDop";
import photo from '@assets/myphoto/myphoto1.png'
import imageFreelancer from '@assets/undraw/freelancer.svg'
import icon_idea from '@assets/icons/icon_idea.svg'


function Home() {
  return (
    <div className="text-white py-12">
      <section className="xl:container mx-auto flex flex-col justify-between gap-12 lg:gap-4 lg:flex-row items-center px-2 lg:px-10">
        <div className="flex flex-col gap-3 text-gray-200 m-3 saturate-200">     
          <p className="text-3xl min-[345px]:text-4xl min-[456px]:text-5xl 2xl:text-6xl max-[570px]:text-center text-orange-100">
            Hola amigo 
          </p>
          <h2 className="text-4xl min-[345px]:text-5xl min-[456px]:text-6xl 2xl:text-7xl max-[570px]:text-center text-gray-200 min-[456px]:font-semibold">
            Me llamo Daniel Luna
          </h2>
          <div className="brightness-90 contrast-125">
            <img
              className="mx-auto rounded-full filter_shadow_orange lg:hidden"
              src={photo}
              width="250px"
              height="250px"
              alt="myphoto"
            />
          </div>
          <div className="flex flex-col gap-2 min-[525px]:flex-row justify-start min-[525px]:justify-between min-[525px]:items-center">
            <h3 className="text-orange-200 text-[1.3em] min-[345px]:text-[1.7em] min-[456px]:text-3xl 2xl:text-4xl text-center">
              FullStack Developver 👨‍💻
            </h3>
            <ContactIcons className="custom_contact_icons"/>
          </div>
          <div className="max-w-2xl 2xl:max-w-3xl">
            <p className="leading-8 2xl:leading-relaxed text-left text-lg 2xl:text-xl text-gray-300">
              Dedicado a brindar servicios digitales con diferentes tecnologías, en busca de oportunidades para afrontar nuevos retos y resolver problemas de la vida real en código, apasionado por la programación 💻 y la música 🎵.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 justify-between sm:justify-around py-2">
            <button className="p-4 text-lg tracking-wider sm:p-3 bg-gray-700 rounded-md shadow-gray-500 shadow-[5px_5px_2px_-2px_rgba(0,0,0,0.3)] sm:hover:scale-105 transition duration-300 ease-out">Ver curriculum</button>
            <button className="p-4 text-lg tracking-wider sm:p-3 bg-orange-700 rounded-md shadow-orange-400  shadow-[5px_5px_2px_-2px_rgba(0,0,0,0.3)] sm:hover:scale-105 transition duration-300 ease-out">Ver proyectos</button>
          </div>
        </div>
        <div className="px-5 saturate-150 lg:px-0 contrast-125 brightness-90 hidden lg:block">
          <img
            className="mx-auto rounded-full filter_shadow_orange"
            src={photo}
            width="500px"
            height="500px"
            alt="myphoto"
          />
        </div>
      </section>
{/*       <section>
        <h4 className="text-center text-gray-200 font-semibold text-3xl min-[320px]:text-4xl md:text-5xl py-24 text_title_shadow">
          Personal Projects
        </h4>
        <div className="xl:container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-5 px-2 text-center">
          <ProjectItem
            title="Title"
            imageURL="testimage11.jpg"
          />
          <ProjectItem
            title="Title"
            imageURL="testimage11.jpg"
          />
          <ProjectItem
            title="Title"
            imageURL="testimage11.jpg"
          />
        </div>
      </section>
      <section>
        <h4 className="text-center text-gray-200 font-semibold text-3xl min-[320px]:text-4xl md:text-5xl py-24 text_title_shadow">
          Work Experience
        </h4>
        <div className="xl:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-5 px-2 text-center">
          <ProjectItem
            title="Title"
            imageURL="testimage11.jpg"
          />
          <ProjectItem
            title="Title"
            imageURL="testimage11.jpg"
          />
          <ProjectItem
            title="Title"
            imageURL="testimage11.jpg"
          />
        </div>
      </section> */}
      <section className="xl:container mx-auto flex lg:block flex-col gap-12 lg:gap-4 lg:flex-row items-center px-2 lg:px-10">
        <h4 className="text-center text-gray-300 font-semibold text-5xl min-[350px]:text-6xl min-[400px]:text-7xl pt-12 lg:py-24">
          Habilidades
        </h4>
        <div className="flex flex-col justify-between gap-12 lg:gap-4 lg:flex-row items-center sm:w-[70%] lg:w-full">
          <div className="hidden relative min-[1150px]:block">
            <img src={icon_idea} alt="icon_idea" className="absolute w-10 2xl:w-[45px] top-24 left-40 2xl:top-28 2xl:left-44 filter_shadow_yellow" width="45px" height="45px" />
            <img src={imageFreelancer} alt="imageFreelance" className="filter_shadow_orange w-[600px] 2xl:w-full" width="650px" height="650px"/>
          </div>
          <div className="rounded-md bg-opacity-90 bg-gray-900 w-full min-[1150px]:w-[45%] p-5 min-[1150px]:p-8">
            <h5 className="text-2xl xl:text-xl underline underline-offset-4 text-orange-200">▶ Lenguajes:</h5>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 min-[1150px]:grid-cols-3 gap-y-4 gap-x-4 lg:gap-x-0 text-xl xl:text-lg justify-items-center py-5 text-gray-200">
              <LanguageDop name="HTML" color="bg-[#E34C26]" />
              <LanguageDop name="CSS" color="bg-[#563D7C]" />
              <LanguageDop name="JavaScript" color="bg-[#F1E05A]" />
              <LanguageDop name="Python" color="bg-[#3572A5]" />
              <LanguageDop name="C#" color="bg-[#178600]" />
            </ul>
            <h5 className="text-2xl xl:text-xl underline underline-offset-4 text-orange-200">▶ Frameworks y Librerias:</h5>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 min-[1150px]:grid-cols-3 gap-y-4 gap-x-4 lg:gap-x-0 text-xl xl:text-lg justify-items-center text-center py-5 text-gray-200">
              <LanguageDop name="Django" color="bg-[#5F8CB2]" />
              <LanguageDop name="React" color="bg-[#24D1F5]" />
              <LanguageDop name="ASP.NET" color="bg-[#699E87]" />
            </ul>
            <h5 className="text-2xl xl:text-xl underline underline-offset-4 text-orange-200">▶ Entornos de desarrollo y base de datos:</h5>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 min-[1150px]:grid-cols-3 gap-y-4 gap-x-4 lg:gap-x-0 text-xl xl:text-lg justify-items-center text-center py-5 text-gray-200">
              {/* <LanguageDop name="npm" color="bg-[#F4A460]" /> */}
              <LanguageDop name="Visual Studio" color="bg-[#6495ED]"/>
              <LanguageDop name="MySQL" color="bg-[#FF6347]" />
              <LanguageDop name="SQLServer" color="bg-[#B0C4DE]" />
            </ul>
            <h5 className="text-2xl xl:text-xl underline underline-offset-4 text-orange-200">▶ Otras herramientas:</h5>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 min-[1150px]:grid-cols-3 gap-y-4 gap-x-4 lg:gap-x-0 text-xl xl:text-lg justify-items-center text-center py-5 text-gray-200">
              <LanguageDop name="Git" color="bg-[#FF5500]" />
              <LanguageDop name="GitHub" color="bg-[#E6EDF3]" /> 
              <LanguageDop name="Node.js" color="bg-[#659A60]" />
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
