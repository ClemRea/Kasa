import Chezvous from "../sectionChezVous";
import DisplayCard from "../sectionLogement";
import "../../styles/utils/tab_resolution/home_media.css";
import "../../styles/utils/tel_resolution/home_media.css";

function Home() {
  return (
    <div>
      <section className="kasa_sectionChezVous">
        <Chezvous />
      </section>
      <section className="kasa_sectionCard">
        <DisplayCard />
      </section>
    </div>
  );
}

export default Home;
