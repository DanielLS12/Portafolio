import React from 'react'

function TechStack({title,children}) {
  return (
    <>
        <span className="text-xl min-[350px]:text-2xl underline underline-offset-4 text-[#FF5800] font-bold">- {title}:</span>
        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 lg:gap-x-0 text-lg min-[350px]:text-xl justify-items-center text-center">
            {children}
        </ul>
    </>
  )
}

export default TechStack