function Section({title,children}) {
  return (
    <section className="max-[1024px]:container xl:container mx-auto flex flex-col items-center gap-12 px-2 lg:px-10">
        <h4 className="text-center text-gray-100 font-semibold text-4xl min-[350px]:text-5xl lg:text-6xl">
          {title}
        </h4>
        {children}
    </section>
  )
}

export default Section