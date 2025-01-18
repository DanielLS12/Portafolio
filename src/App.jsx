import { Routes,Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

import Layout from './Layout'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Portafolio" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes> 
    </>
  );
}

export default App;