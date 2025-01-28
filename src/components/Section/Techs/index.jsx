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
        name : techs.XAML.name,
        color : techs.XAML.color,
      },
      {
        id : 5,
        name : techs.Java.name,
        color : techs.Java.color,
      },
      {
        id : 6,
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
    title : 'Base de datos',
    techs : [
      {
        id : 1,
        name : techs.SQLServer.name,
        color : techs.SQLServer.color,
      },
      {
        id : 2,
        name : techs.PostgreSQL.name,
        color : techs.PostgreSQL.color,
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
      {
        id : 3,
        name : techs.GitHub.name,
        color : techs.GitHub.color,
      },
      {
        id : 4,
        name : techs.Postman.name,
        color : techs.Postman.color,
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
      </div>
    </div>
  );
}

export default Skills;
