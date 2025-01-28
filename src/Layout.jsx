import { Outlet } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";

function Layout() {
  return (
    <>
      <Header />
      <main className="lg:pt-[4.9rem] pb-0.5 max-[1024px]:container xl:container mx-auto px-3 bg-orange-50 dark:bg-gray-900">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
