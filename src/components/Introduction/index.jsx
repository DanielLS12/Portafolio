function Introduction(props) {
  const {welcomeMessage, title, subtitle, content, urlImg} = props;
  return (
    <>
      <section id="home" className="flex flex-col justify-between gap-20 lg:flex-row items-center">
        <div className="flex flex-col gap-2 w-full">
          <span className="text-gray-200 font-semibold text-4xl  min-[456px]:text-5xl 2xl:text-5xl text-center sm:text-left">
            {welcomeMessage}
          </span>
          <h2 className="text-5xl min-[456px]:text-6xl 2xl:text-7xl text-center sm:text-left font-bold text-[#FF3600]">
            {title}
          </h2>
          <h3 className="text-gray-200 font-semibold text-4xl min-[456px]:text-5xl 2xl:text-5xl text-center sm:text-left">
            {subtitle}
          </h3>   
          <p className="text-orange-100 leading-9 text-[1.2rem] min-[456px]:text-[1.3rem] pt-2">
            {content}
          </p>         
        </div>
        <div className="lg:px-0 hidden lg:block w-full">
          <img
            rel="preload"
            className="ml-auto rounded-md p-6 filter_shadow_orange"
            src={urlImg}
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
