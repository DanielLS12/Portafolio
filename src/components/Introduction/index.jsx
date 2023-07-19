function Introduction(props) {
  const {welcomeMessage, title, subtitle, content, img} = props;
  return (
    <>
      <section id="home" className="flex flex-col justify-between gap-20 lg:flex-row items-center">
        <div className="flex flex-col gap-4 sm:gap-5 w-full">
          <span className="text-gray-200 text-4xl  min-[456px]:text-5xl 2xl:text-5xl text-center sm:text-left">
            {welcomeMessage}
          </span>
          <h2 className="text-5xl min-[456px]:text-6xl 2xl:text-7xl text-center sm:text-left font-bold text-[#FF3600]">
            {title}
          </h2>
          <h3 className="text-gray-200 font-semibold text-4xl min-[456px]:text-5xl 2xl:text-5xl text-center sm:text-left">
            {subtitle}
          </h3>   
          <p className="text-gray-200 leading-10 text-left text-[1.1rem] min-[456px]:text-[1.25rem]">
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
          />
        </div>
      </section>
    </>
  );
}

export default Introduction;
