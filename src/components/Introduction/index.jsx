import ContactIcons from "@components/ContactIcons";

function Introduction({
  welcomeMessage,
  title,
  subtitle,
  content,
  img,
  isHomePage,
}) {
  return (
    <>
      <section className="flex flex-col justify-between gap-20 lg:flex-row items-center">
        <div className="flex flex-col gap-4 sm:gap-5 w-full">
          <span className="text-gray-200  text-4xl  min-[456px]:text-5xl 2xl:text-5xl text-center sm:text-left">
            {welcomeMessage}
          </span>
          <span className="text-5xl min-[456px]:text-6xl 2xl:text-7xl text-center sm:text-left font-bold text-[#FF3600]">
            {isHomePage && <span>Me llamo&nbsp;</span>}
            <h2 className="inline-block">{title}</h2>
          </span>
          <div className="flex flex-col gap-2 sm:flex-row items-center justify-between">
            <h3 className="text-gray-200 font-semibold text-4xl min-[456px]:text-5xl 2xl:text-5xl text-center sm:text-left">
              {subtitle}
            </h3>   
          </div>
          <p className="text-gray-300 leading-10 text-left text-[1.1rem] min-[456px]:text-[1.25rem]">
            {content}
          </p>
          {isHomePage &&           
          <div className="flex flex-col gap-5 sm:flex-row justify-between items-center">
            {isHomePage && <ContactIcons className="custom_contact_icons"/>}   
            <button className="bg-gray-300 font-semibold p-4 text-lg rounded-md hover:ring-2 hover:ring-[#FF3600] transition duration-300 ease-in-out w-full sm:w-auto">Descargar Curriculum</button>   
          </div>
          }
        </div>
        <div className="px-5 saturate-150 lg:px-0 contrast-125 brightness-90 hidden lg:block w-full">
          <img
            className="ml-auto rounded-md filter_shadow_orange p-6"
            src={img}
            width="493px"
            height="507px"
            alt="myphoto"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>
    </>
  );
}

export default Introduction;
