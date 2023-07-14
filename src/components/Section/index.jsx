function Section({title,children}) {
  return (
    <section className="border-t-2">
      <div className="flex flex-col gap-12">
        <h4 className=" text-gray-200 text-4xl min-[350px]:text-5xl lg:text-6xl pt-12 text-center sm:text-left">
          {title}
        </h4>
        {children}
      </div>
    </section>
  )
}

export default Section