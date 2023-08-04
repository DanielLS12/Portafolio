import { useEffect } from "react";
import useObserver from "@hooks/useObserver";

function ProjectItem({ title, content, proyectImage, proyectURL, githubURL }) {
  const [observer,setElements,entries] = useObserver({
    threshold: 0.10,
    root: null
  });

  useEffect(() => {
    const projects = document.querySelectorAll(".loading");
    setElements(projects);
  },[setElements]);

  useEffect(() => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const lazyCard = entry.target;
        lazyCard.classList.remove("loading");
        lazyCard.classList.add("loaded");
        observer.unobserve(lazyCard);
      }
    });
  },[entries,observer]);
  
  return (
    <article className="flex flex-col xl:flex-row-reverse items-center gap-4 xl:gap-10 loading">

      <img
        src={proyectImage}
        alt="proyectImage"
        className="rounded-md filter_shadow_orange object-cover"
        width="840px"
        height="420px"
        loading="lazy"
        decoding="async"
      />

      <div className="flex flex-col h-full">
        <h5 className="text-3xl min-[456px]:text-4xl text-[#FF3600] font-semibold text-center sm:text-left">{title}</h5>
        <p className="leading-8 text-[1.2rem] min-[456px]:text-[1.3rem] text-gray-200 py-2">{content}</p>
        <div className="pb-6 xl:pb-4 flex flex-col gap-4">
          <span className="text-orange-500 underline underline-offset-4 text-2xl font-medium">
            Stack de desarrollo:
          </span>
          <ul className="grid grid-cols-2 justify-items-center list-disc gap-3 text-orange-300 text-xl ">
            <li>
              CSS
            </li>
            <li>
              JavaScript
            </li>
            <li>
              React
            </li>
            <li>
              Tailwind CSS
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 min-[350px]:grid-cols-2 gap-4 mt-auto">
          <a
            title="Visitar proyecto"
            href={proyectURL}
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-900 text-lg min-[456px]:text-xl font-semibold p-[0.93rem] bg-gray-300 hover:bg-gray-100  rounded-md transition duration-300 ease-linear hover:ring-2 hover:ring-[#FF3600] text-center inline-flex items-center justify-center"
          >
            Visitar proyecto
          </a>
          <a
            title="Ver código"
            href={githubURL}
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-900 text-lg min-[456px]:text-xl  font-semibold p-[0.93rem] bg-gray-300 hover:bg-gray-100  rounded-md transition duration-300 ease-linear hover:ring-2 hover:ring-[#FF3600] text-center inline-flex items-center justify-center"
          >
            Ver código
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectItem;
