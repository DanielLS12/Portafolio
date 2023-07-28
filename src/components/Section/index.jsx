function Section({id,title,children}) {
  return (
    <section id={id} className="border-t-2">
      <div className="flex flex-col gap-10 sm:gap-20">
        <h4 className="text-gray-200 font-semibold underline text-4xl min-[350px]:text-5xl pt-12 sm:pt-20 text-center sm:text-left">
          {title}
        </h4>
        {children}
      </div>
    </section>
  )
}

export default Section