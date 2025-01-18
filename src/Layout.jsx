import { Outlet } from "react-router-dom"
import { Suspense } from "react";
import Header from "@components/Header"
import Footer from '@components/Footer'
import Loader from "@components/Loader"

function Layout() {
  return (
    <>
      <Header/>
        <Suspense fallback={<Loader size="w-40 h-40" color1="#FF3600" color2="#FFFFFF"/>}>
          <main className="lg:pt-[4.9rem] pb-0.5 max-[1024px]:container xl:container mx-auto px-3">
              <Outlet/>
          </main>
        </Suspense>
      <Footer/>
    </>
  )
}

export default Layout