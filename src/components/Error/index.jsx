import "../../styles/error.css";
import { Link } from "react-router-dom";
import Banner from "../banner";
import Footer from "../footer";

function Error() {
  return (
    <div className="kasa_error">
      <header>
        <Banner />
      </header>
      <h1 className="kasa_error_code">404</h1>
      <p className="kasa_error_message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="kasa_error_main_link">
        Retourner sur la page d’accueil
      </Link>
      <footer className="kasa_footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Error;
