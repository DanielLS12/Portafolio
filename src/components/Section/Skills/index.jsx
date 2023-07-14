import imageFreelancer from "@assets/undraw/freelancer.svg";
import icon_idea from "@assets/icons/icon_idea.svg";

import LanguageDop from "@components/LanguageDop";
import TechStack from "@components/TechStack";

function Skills() {
  return (
    <div className="flex flex-col justify-between gap-20 lg:flex-row items-center w-full">
      <div className="hidden saturate-150 contrast-125 brightness-90 relative lg:block w-full">
        <img
          src={imageFreelancer}
          alt="imageFreelance"
          className="filter_shadow_orange p-6 rounded-md"
          width="655px"
          height="413px"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-col gap-6 w-full">
        <TechStack title="Lenguajes">
          <LanguageDop name="HTML" color="bg-[#E34C26]" />
          <LanguageDop name="CSS" color="bg-[#563D7C]" />
          <LanguageDop name="JavaScript" color="bg-[#F1E05A]" />
          <LanguageDop name="Python" color="bg-[#3572A5]" />
          <LanguageDop name="C#" color="bg-[#178600]" />
        </TechStack>
        <TechStack title="Frameworks y librerías">
          <LanguageDop name="Django" color="bg-[#5F8CB2]" />
          <LanguageDop name="React" color="bg-[#24D1F5]" />
          <LanguageDop name="ASP.NET" color="bg-[#699E87]" />
        </TechStack>
        <TechStack title="Entornos de desarrollo y base de datos">
          <LanguageDop name="Visual Studio" color="bg-[#6495ED]" />
          <LanguageDop name="MySQL" color="bg-[#FF6347]" />
          <LanguageDop name="SQLServer" color="bg-[#B0C4DE]" />
        </TechStack>
        <TechStack title="Otras herramientas">
          <LanguageDop name="Git" color="bg-[#FF5500]" />
          <LanguageDop name="GitHub" color="bg-[#E6EDF3]" />
          <LanguageDop name="Node.js" color="bg-[#659A60]" />
        </TechStack>
      </div>
    </div>
  );
}

export default Skills;
