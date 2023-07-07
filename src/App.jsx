import { Routes,Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home/Home"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

import Layout from './Layout'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Proyectos" element={<Projects />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes> 
    </>
  );
}

export default App;