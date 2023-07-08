
import ContactIcons from "@components/ContactIcons/ContactIcons";
/* import { ProjectItem } from "../../components/ProjectItem"; */
import { LanguageDop } from "@components/LanguageDop";
import photo from '@assets/myphoto/myphoto1.png'
import imageFreelancer from '@assets/undraw/freelancer.svg'
import icon_idea from '@assets/icons/icon_idea.svg'


function Home() {
  return (
    <div className="text-white my-12">
      <section className="xl:container mx-auto flex flex-col justify-between gap-12 lg:gap-4 lg:flex-row items-center px-2 lg:px-0">
        <div className="flex flex-col gap-3 border-2 border-[#FF5733] text-gray-200 rounded-md p-6 m-3 custom_shadow_orange saturate-200">
          <p className="text-2xl min-[345px]:text-4xl min-[456px]:text-5xl 2xl:text-6xl max-[570px]:text-center text-orange-100">
            Hola amigo ✌️
          </p>
          <h2 className="text-4xl min-[345px]:text-5xl min-[456px]:text-6xl 2xl:text-7xl max-[570px]:text-center text-gray-200 font-semibold">
            Me llamo Daniel Luna
          </h2>
          <div className="flex flex-col gap-2 min-[525px]:flex-row justify-start min-[525px]:justify-between min-[525px]:items-center">
            <h3 className="text-orange-200 text-[1.1em] min-[345px]:text-[1.7em] min-[456px]:text-3xl 2xl:text-4xl text-center">
              FullStack Developver 👨‍💻
            </h3>
            <ContactIcons className="custom_contact_icons"/>
          </div>
          <div className="max-w-2xl 2xl:max-w-3xl">
            <p className="2xl:leading-relaxed text-justify text-lg 2xl:text-xl text-gray-300">
              Dedicado a brindar servicios digitales con diferentes tecnologías, en busca de oportunidades para afrontar nuevos retos y resolver problemas de la vida real en código, apasionado por la programación 💻 y la música 🎵.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 justify-between sm:justify-around py-1">
            <button className="p-4 font-semibold tracking-wider sm:p-3 bg-gray-700 rounded-md shadow-gray-500 shadow-[5px_5px_2px_-2px_rgba(0,0,0,0.3)] hover:scale-110 transition duration-300 ease-linear">Ver curriculum</button>
            <button className="p-4 font-semibold tracking-wider sm:p-3 bg-orange-700 rounded-md shadow-orange-400  shadow-[5px_5px_2px_-2px_rgba(0,0,0,0.3)] sm:hover:scale-110 transition duration-300 ease-linear">Ver proyectos</button>
          </div>
        </div>
        <div className="px-5 saturate-150 lg:px-0 contrast-125 brightness-90">
          <img
            className="mx-auto rounded-full filter_shadow_orange custom_shadow_orange border-2 border-[#FF5733]"
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
      <section>
        <h4 className="text-center text-gray-300 font-semibold text-5xl min-[350px]:text-6xl min-[400px]:text-7xl py-24">
          Habilidades
        </h4>
        <div className="xl:container lg:flex justify-between gap-4 xl:gap-10 mx-auto px-2 xl:px-0">
          <div className="hidden lg:relative lg:block">
            <img src={icon_idea} alt="icon_idea" className="absolute top-28 left-44 filter_shadow_yellow" width="45px" height="45px" />
            <img src={imageFreelancer} alt="imageFreelance" width="655px" height="655px" className="filter_shadow_orange"/>
          </div>
          <div className="">

          </div>
          <ul className="grid grid-cols-2 min-[490px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 sm:gap-x-8 2xl:gap-x-20 text-xl py-8 px-2 md:px-8 justify-items-center  rounded-md bg-opacity-90 bg-gray-900">
            <LanguageDop name="HTML" color="bg-[#E34C26]" />
            <LanguageDop name="CSS" color="bg-[#563D7C]" />
            <LanguageDop name="JavaScript" color="bg-[#F1E05A]" />
            <LanguageDop name="Python" color="bg-[#3572A5]" />
            <LanguageDop name="C#" color="bg-[#178600]" />
            <LanguageDop name="SQL" color="bg-[#DAD8D8]" />
            <LanguageDop name="Django" color="bg-[#5F8CB2]" />
            <LanguageDop name="NET 7" color="bg-[#7EC727]" />
            <LanguageDop name="ASP.NET" color="bg-[#699E87]" />
            <LanguageDop name="Xamarin" color="bg-[#3293D4]" />
            <LanguageDop name="React" color="bg-[#24D1F5]" />
            <LanguageDop name="Node.js" color="bg-[#659A60]" />
            <LanguageDop name="Git" color="bg-[#FF5500]" />
            <LanguageDop name="GitHub" color="bg-[#E6EDF3]" />
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
