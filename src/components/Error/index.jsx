import "../../styles/error.css";
import { Link } from "react-router-dom";
import "../../styles/utils/tab_resolution/error_media.css";
import "../../styles/utils/tel_resolution/error_media.css";

function Error() {
  return (
    <div className="kasa_error">
      <h1 className="kasa_error_code">404</h1>
      <p className="kasa_error_message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="kasa_error_main_link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
