import AppRoutes from "./Routes";
import Banner from "./banner";
import Footer from "./footer";

function App() {
  return (
    <div>
      {/* <div>
        <Banner />
      </div> */}
      <AppRoutes />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
