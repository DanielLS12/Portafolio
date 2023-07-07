import { Outlet } from "react-router-dom"
import { Suspense } from "react";
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <>
      <Suspense fallback={null}>
        <Header/>
        <main className="pt-[4.9em] pb-0.5 bg-gradient-to-br from-gray-900 from-50% to-orange-600">
            <Outlet/>
        </main>
        <Footer/>
      </Suspense>
    </>
  )
}

export default Layout