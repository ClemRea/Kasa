import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./Error";
import Card from "./pages/Card";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Error />} />
      <Route path="logement/:id" element={<Card />} />
    </Routes>
  );
}

export default AppRoutes;
