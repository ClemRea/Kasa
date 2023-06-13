import { Navigate, useParams } from "react-router-dom";
import Tag from "./Tag";
import items from "../../datas/logementsList.json";
import Carrousel from "./Carrousel";

function LogmentDisplay() {
  //****RECUPERER LA BONNE FICHE****//
  const { id } = useParams();
  const ficheItem = items.find((item) => item.id === id);

  //****TAG****//
  const tagsItem = ficheItem.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });
  return (
    <>
      {ficheItem ? (
        <div className="fiche_container">
          {/* CARROUSEL */}
          <Carrousel slides={ficheItem.pictures} />
          <section className="fiche_logement">
            <div className="description_info">
              {/* TITRE LOGEMENT */}
              <div className="description_info_title">
                <p className="titre_logement">{ficheItem.title}</p>
                <p className="localisation_logement">{ficheItem.location}</p>
              </div>
              {/* TAGS */}
              <div className="description_info_tags">{tagsItem}</div>
              {/* HOSTING */}
              <div className="hosting_container">
                <p>{ficheItem.host.name}</p>
                <img src={ficheItem.host.picture} alt={ficheItem.host.name} />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <Navigate replace to="/404/" />
      )}
    </>
  );
}

export default LogmentDisplay;
