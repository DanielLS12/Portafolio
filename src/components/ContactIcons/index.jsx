import icon_github from '@assets/icons/icon_github.svg'
import icon_linkedin from '@assets/icons/icon_linkedin.svg'
import icon_email from '@assets/icons/icon_email.svg'

function ContactIcons({ className }) {

  return (
    <div className="flex flex-row gap-3 justify-center">
      <a
        href="https://github.com/DanielLS12"
        className={className}
        target="_blank"
      >
        <img
          src={icon_github}
          width="28px"
          height="28px"
          alt="icon_github"
          loading='lazy'
          decoding='async'
        />
      </a>
      <a
        href="https://www.linkedin.com/in/daniel-josue-luna-sanchez-260126248/"
        className={className}
        target="_blank"
      >
        <img
          src={icon_linkedin}
          width="28px"
          height="28px"
          alt="icon_linkedin"
          loading='lazy'
          decoding='async'
        />
      </a>
      <a
        href="mailto:danielluna03012001@gmail.com"
        className={className}
        target="_blank"
      >
        <img src={icon_email} width="28px" height="28px" alt="icon_email" loading='lazy' decoding='async'/>
      </a>
    </div>
  );
}

export default ContactIcons;

{/* <div className="group hidden absolute p-1.5 md:flex">
          <button className="cursor-pointer left-0 bottom-0 bg-gray-900 bg-opacity-90 hover:bg-opacity-100 rounded-full lg:hover:scale-110 transition duration-500 ease-out">
            <img src="icon_info.svg" alt="icon_code" className="w-8 sm:w-9" />
          </button>
          <span className="group-hover:scale-100 transition-all bg-gray-800 px-2 text-md text-gray-100 rounded-md absolute translate-x-10 translate-y-1.5 scale-0 whitespace-nowrap">
            More information
          </span>
        </div>
        <div className="hidden gap-1.5 absolute left-0 bottom-0 p-1.5 md:flex">
          <div className="group flex">
            <a
              href={githubURL}
              className="cursor-pointer left-0 bottom-0 bg-gray-900 bg-opacity-90 hover:bg-opacity-100 rounded-full lg:hover:scale-110 transition duration-500 ease-out"
            >
              <img src="icon_code.svg" alt="icon_code" className="w-8 sm:w-9" />
            </a>
            <span className="group-hover:scale-100 transition-all bg-gray-800 px-2 text-md text-gray-100 rounded-md absolute translate-x-1 -translate-y-[1.8em] scale-0 whitespace-nowrap">
              Watch Code
            </span>
          </div>
          <div className="group flex">
            <a
              href={githubURL}
              className="cursor-pointer left-0 bottom-0 bg-gray-900 bg-opacity-90 hover:bg-opacity-100  rounded-full lg:hover:scale-110 transition duration-500 ease-out"
            >
              <img src="icon_link.svg" alt="icon_link" className="w-8 sm:w-9" />
            </a>
            <span className="group-hover:scale-100 transition-all bg-gray-800 px-2 text-md text-gray-100 rounded-md absolute translate-x-1 -translate-y-[1.8em] scale-0 whitespace-nowrap">
              Visit Project
            </span>
          </div>
        </div> */}
