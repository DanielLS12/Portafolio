import { Outlet } from "react-router-dom"
import { Suspense } from "react";
import Header from "@components/Header"
import Footer from '@components/Footer'

function Layout() {
  return (
    <>
      <Header/>
        <Suspense fallback={null}>
          <main className="pt-[4.9rem] pb-0.5 max-[1024px]:container xl:container mx-auto px-3">
              <Outlet/>
          </main>
        </Suspense>
      <Footer/>
    </>
  )
}

export default Layout