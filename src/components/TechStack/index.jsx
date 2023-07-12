import React from 'react'

function TechStack({title,children}) {
  return (
    <>
        <h5 className="text-xl underline underline-offset-4 text-orange-200">▶ {title}:</h5>
        <ul className="grid grid-cols-2 sm:grid-cols-3 min-[1150px]:grid-cols-3 gap-y-4 gap-x-4 lg:gap-x-0 text-lg justify-items-center">
            {children}
        </ul>
    </>
  )
}

export default TechStack