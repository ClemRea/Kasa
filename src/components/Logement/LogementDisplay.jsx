import { Navigate, useParams } from "react-router-dom";
import Tag from "./Tag";
import items from "../../datas/logementsList.json";
import Carrousel from "./Carrousel";
import Rate from "./Rate";
import Collapse from "../Collapse";
import "../../styles/utils/tab_resolution/logementDisplay_media.css";
import "../../styles/utils/tel_resolution/logementDisplay_media.css";

function LogmentDisplay() {
  //****RECUPERER LA BONNE FICHE****//
  const { id } = useParams();
  const ficheItem = items.find((item) => item.id === id);

  if (!ficheItem) {
    return <Navigate replace to="/notfound" />;
  }

  //****TAG****//
  const tagsItem = ficheItem.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  //****EQUIPEMENT****//
  const stuffItem = ficheItem.equipments.map((stuff, i) => {
    return (
      <ul key={i}>
        <li>{stuff}</li>
      </ul>
    );
  });

  return (
    <>
      <div className="fiche_container">
        {/* CARROUSEL */}
        <Carrousel slides={ficheItem.pictures} />
        <section className="fiche_logement">
          <div className="description_info">
            {/* TITRE LOGEMENT */}
            <div className="description_info_title">
              <p className="titre_logement">{ficheItem.title}</p>
              <p className="localisation_logement">{ficheItem.location}</p>
              {/* TAGS */}
              <div className="description_info_tag">{tagsItem}</div>
            </div>
            {/* HOSTING */}
            <div className="host_container">
              <div className="host_info">
                <p className="host_name">{ficheItem.host.name}</p>
                <img
                  className="host_picture"
                  src={ficheItem.host.picture}
                  alt={ficheItem.host.name}
                />
              </div>
              {/* RATE */}
              <Rate score={ficheItem.rating} />
            </div>
          </div>
          {/* STUFF */}
          <div className="collapse_logement_container">
            <div className="collapse_logement_description">
              <Collapse content={ficheItem.description} title="Description" />
            </div>
            <div className="collapse_logement_equipement">
              <Collapse content={stuffItem} title="Équipements" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LogmentDisplay;
