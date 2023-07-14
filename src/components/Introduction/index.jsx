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
        <div className="flex flex-col gap-3 text-white w-full">
          <span className="text-4xl min-[345px]:text-4xl min-[456px]:text-5xl 2xl:text-6xl text-center sm:text-left">
            {welcomeMessage}
          </span>
          <span className="text-5xl min-[345px]:text-6xl min-[456px]:text-6xl 2xl:text-7xl text-center sm:text-left min-[456px]:font-bold text-[#FF3600]">
            {isHomePage && <span>Me llamo&nbsp;</span>}
            <h2 className="inline-block">{title}</h2>
          </span>
          <div className="flex flex-col gap-2 sm:flex-row items-center justify-between">
            <h3 className="text-gray-300 font-semibold text-[1.3em] min-[345px]:text-[1.7em] min-[456px]:text-3xl 2xl:text-4xl">
              {subtitle}
            </h3>
            {isHomePage && <ContactIcons className="custom_contact_icons"/>}
          </div>
          <p className="leading-8 2xl:leading-relaxed text-left text-lg 2xl:text-xl">
            {content}
          </p>
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
