function Container({children}) {
  return (
    <div className="py-12 sm:py-20">
        <div className="flex flex-col gap-12 sm:gap-20">
            {children}
        </div>
    </div>
  )
}

export default Container