import ProjectItemMenu from "@components/ProjectItem/Menu"
import imageProject from "@assets/imageProject/testimage11.jpg";

function ProjectItem({ title, imageURL, githubURL }) {
  return (
    <article>
      <h5 className="text-2xl min-[300px]:text-3xl pb-4 text-center text-gray-200">{title}</h5>
      <div className="relative rounded-md bg-gray-800">
        <div className="absolute p-1">
            <ProjectItemMenu githubURL={githubURL} />
        </div>
        <a href="#" title="Ver proyecto">
          <img
            className="absolute right-0 m-1 hover:-rotate-45 transition duration-500 ease-out"
            src="favicon.ico"
            alt="logoEmpresa"
            width="48px"
            height="48px"
            loading="lazy"
            decoding="async"
          />
        </a>
        <div className="saturate-150 contrast-125 brightness-90">
          <img
            src={imageProject}
            alt="project_1"
            className="rounded-md filter_shadow_orange"
            width="800px"
            height="800px"
            loading="lazy"
            decoding="async"
          />
        </div>        
      </div>
    </article>
  );
}

export default ProjectItem;
