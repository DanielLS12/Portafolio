import { Outlet } from "react-router-dom"
import { Suspense } from "react";
import Header from "@components/Header"
import Footer from '@components/Footer'

function Layout() {
  return (
    <>
      <Header/>
        <Suspense fallback={null}>
          <main className="pt-[4.9em] pb-0.5 bg-gradient-to-br from-gray-900 from-50% to-orange-700 text-gray-200">
              <Outlet/>
          </main>
        </Suspense>
      <Footer/>
    </>
  )
}

export default Layout