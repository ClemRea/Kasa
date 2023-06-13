import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./Error";
import Card from "./pages/Card";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="logement/:id" element={<Card />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
