import { Routes,Route } from "react-router-dom";

import Layout from './Layout'
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

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