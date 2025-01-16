import { useEffect } from "react";
import useObserver from "@hooks/useObserver";
import LanguageDop from "@components/LanguageDop";
import TechStack from "@components/TechStack";

function ProjectItem({ title, content, projectImage, techs, urlWeb, urlGitHub }) {
  const [observer, setElements, entries] = useObserver({
    threshold: 0.1,
    root: null,
  });

  useEffect(() => {
    const projects = document.querySelectorAll(".loading");
    setElements(projects);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyCard = entry.target;
        lazyCard.classList.replace("loading", "loaded");
        observer.unobserve(lazyCard);
      }
    });
  }, [entries, observer]);
  return (
    <article className="flex flex-col xl:flex-row-reverse items-center gap-4 xl:gap-10 loading">
      <div className="hidden xl:block">
        <img
          src={projectImage}
          alt="projectImage"
          className="rounded-md border-2 border-[#FF3600] object-fill"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-col h-full xl:h-auto xl:max-w-md 2xl:max-w-2xl">
        <h5 className="text-4xl min-[456px]:text-5xl text-[#FF3600] text-center xl:text-left font-extrabold">
          {title}
        </h5>
        <div className="block my-4 xl:hidden">
          <img
            src={projectImage}
            alt="projectImage"
            className="rounded-md border-2 border-[#FF3600] object-fill"
            height="470px"
            width="840px"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="leading-8 text-[1.2rem] min-[456px]:text-[1.3rem] text-orange-100 py-2">
          {content}
        </p>
        <div className="pb-6 flex flex-col gap-4">
          <TechStack title="Stack de desarrollo">
            {techs.map(tech => (
              <LanguageDop key={tech.id} name={tech.name} color={tech.color} />
            ))}
          </TechStack>
        </div>
        <div className="grid grid-cols-1 min-[350px]:grid-cols-2 gap-4">
          <a
            title="Visitar proyecto"
            href={urlWeb}
            target="_blank"
            rel="noreferrer noopener"
            className={`text-gray-900 text-lg min-[456px]:text-xl font-extrabold p-[0.93rem] bg-gray-200 hover:bg-white  rounded-md transition duration-300 ease-linear hover:ring-2 hover:ring-[#FF3600] text-center ${urlWeb ? "inline-flex" : "hidden"} items-center justify-center`}
          >
            Visitar proyecto
          </a>
          <a
            title="Ver código"
            href={urlGitHub}
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-900 text-lg min-[456px]:text-xl font-extrabold p-[0.93rem] bg-gray-200 hover:bg-white  rounded-md transition duration-300 ease-linear hover:ring-2 hover:ring-[#FF3600] text-center inline-flex items-center justify-center"
          >
            Ver código
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectItem;
