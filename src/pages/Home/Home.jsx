import ContactIcons from "../../components/ContactIcons/ContactIcons";
/* import { ProjectItem } from "../../components/ProjectItem"; */
import { LanguageDop } from "../../components/LanguageDop";
import photo from '../../assets/myphoto/myphoto1.png'

function Home() {
  return (
    <div className="text-white my-12">
      <section className="xl:container mx-auto flex flex-col justify-between gap-12 lg:gap-4 lg:flex-row items-center px-2 lg:px-0">
        <div className="border-2 border-orange-700 text-gray-200 rounded-md saturate-200 p-6 m-3 custom_shadow_orange">
          <p className="text-2xl min-[345px]:text-4xl min-[456px]:text-5xl 2xl:text-6xl max-[570px]:text-center">
            Hola amigo <span>✌️</span>
          </p>
          <h2 className="text-4xl min-[345px]:text-5xl min-[456px]:text-6xl 2xl:text-7xl max-[570px]:text-center pb-5 pt-1">
            Me llamo Daniel Luna
          </h2>
          <div className="flex flex-col gap-2 min-[525px]:flex-row justify-start min-[525px]:justify-between min-[525px]:items-center">
            <h3 className="text-[1.1em] min-[345px]:text-[1.7em] min-[456px]:text-3xl 2xl:text-4xl text-center">
              FullStack Developver
            </h3>
            <ContactIcons className="custom_contact_icons" />
          </div>
        </div>
        <div className="px-5 lg:px-0 saturate-150 contrast-125 brightness-90">
          <img
            className="mx-auto rounded-full img_photo custom_shadow_orange border-2 border-orange-700"
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
        <h4 className="text-center text-gray-200 font-semibold text-5xl min-[350px]:text-6xl min-[400px]:text-7xl py-24">
          Habilidades
        </h4>
        <div className="xl:container lg:flex justify-between gap-4 xl:gap-10 mx-auto px-2 xl:px-0">
          <div className="hidden lg:relative lg:block">
            <img src="icon_idea.svg" alt="icon_idea" className="absolute top-28 left-44" width="45px" height="45px"/>
            <img src="freelancer.svg" alt="imageFreelance" width="655px" height="655px"/>
          </div>
          <ul className="grid grid-cols-2 min-[490px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 sm:gap-x-8 2xl:gap-x-20 text-xl py-8 px-2 md:px-8 justify-items-center  rounded-lg bg-opacity-90 bg-gray-900">
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
