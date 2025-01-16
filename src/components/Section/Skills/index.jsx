import imageFreelancer from "@assets/undraw/freelancer.svg";
import LanguageDop from "@components/LanguageDop";
import TechStack from "@components/TechStack";
import techs from "@data/techs";

const techStacks = [
  {
    id : 1,
    title : 'Lenguajes',
    techs : [
      {
        id : 1,
        name : techs.HTML.name,
        color : techs.HTML.color,
      },
      {
        id : 2,
        name : techs.CSS.name,
        color : techs.CSS.color,
      },
      {
        id : 3,
        name : techs.JS.name,
        color : techs.JS.color,
      },
      {
        id : 4,
        name : techs.Java.name,
        color : techs.Java.color,
      },
      {
        id : 5,
        name : techs.CSharp.name,
        color : techs.CSharp.color,
      },
    ]
  },
  {
    id : 2,
    title : 'Frameworks y Librerías',
    techs : [
      {
        id : 1,
        name : techs.NET.name,
        color : techs.NET.color,
      },
      {
        id : 2,
        name : techs.ASPNET.name,
        color : techs.ASPNET.color,
      },
      {
        id : 3,
        name : techs.NetFramework.name,
        color : techs.NetFramework.color,
      },
      {
        id : 4,
        name : techs.tailwindCSS.name,
        color : techs.tailwindCSS.color,
      },
    ]
  },
  {
    id : 3,
    title : 'Entornos de desarrollo y base de datos',
    techs : [
      {
        id : 1,
        name : techs.SQLServer.name,
        color : techs.SQLServer.color,
      },
      {
        id : 2,
        name : techs.MySQL.name,
        color : techs.MySQL.color,
      },
    ]
  },
  {
    id : 4,
    title : 'Otras herramientas',
    techs : [
      {
        id : 1,
        name : techs.JWT.name,
        color : techs.JWT.color,
      },
      {
        id : 2,
        name : techs.Git.name,
        color : techs.Git.color,
      },
    ]
  }
]

function Skills() {
  return (
    <div className="flex flex-col justify-between gap-20 lg:flex-row items-center">
      <div className="hidden lg:block w-full">
        <img
          src={imageFreelancer}
          alt="imageFreelance"
          className="p-6 filter_shadow_orange rounded-md"
          width="1280px"
          height="720px"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-col gap-5 w-full">
        {techStacks.map(techStack => (
          <TechStack key={techStack.id} title={techStack.title}>
            {techStack.techs.map(tech => (
              <LanguageDop key={tech.id} name={tech.name} color={tech.color} />
            ))}
          </TechStack>
        ))}
        {/* <TechStack title="Lenguajes">
          <LanguageDop name="HTML" color="bg-[#E34C26]" />
          <LanguageDop name="CSS" color="bg-[#563D7C]" />
          <LanguageDop name="JavaScript" color="bg-[#F1E05A]" />
          <LanguageDop name="Java" color="bg-[#B07219]" />
          <LanguageDop name="C#" color="bg-[#178600]" />
        </TechStack>
        <TechStack title="Frameworks y librerías">
          <LanguageDop name="Spring Boot" color="bg-[#754C10]" />
          <LanguageDop name="Angular" color="bg-[#FE0032]" />
          <LanguageDop name="ASP.NET" color="bg-[#699E87]" />
          <LanguageDop name="Tailwind CSS" color="bg-[#4682B4]" />
        </TechStack>
        <TechStack title="Base de datos">
          <LanguageDop name="Visual Studio" color="bg-[#6495ED]" />
          <LanguageDop name="MySQL" color="bg-[#FF6347]" />
          <LanguageDop name="SQLServer" color="bg-[#B0C4DE]" />
        </TechStack>
        <TechStack title="Otras herramientas">
          <LanguageDop name="Git" color="bg-[#FF5500]" />
          <LanguageDop name="GitHub" color="bg-[#E6EDF3]" />
          <LanguageDop name="Node.js" color="bg-[#659A60]" />
        </TechStack> */}
      </div>
    </div>
  );
}

export default Skills;
