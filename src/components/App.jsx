import { HashRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import Banner from "./banner";
import Footer from "./footer";

function App() {
  return (
    <div>
      <HashRouter>
        <Banner />
        <AppRoutes />
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
