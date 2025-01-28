function Section({id,title,children}) {
  return (
    <section id={id} className="border-gray-900 dark:border-[#E5E7EB] border-t-2">
      <div className="flex flex-col gap-10 sm:gap-20">
        <h4 className="text-title dark:text-dark-title font-semibold underline underline-offset-4 text-4xl min-[456px]:text-5xl pt-12 lg:pt-20 text-center lg:text-left">
          {title}
        </h4>
        {children}
      </div>
    </section>
  )
}

export default Section