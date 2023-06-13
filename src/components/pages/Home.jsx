import Banner from "../banner";
import Footer from "../footer";
import Chezvous from "../sectionChezVous";
import DisplayCard from "../sectionLogement";

function Home() {
  return (
    <div>
      <header>
        <Banner />
      </header>
      <section className="kasa_sectionChezVous">
        <Chezvous />
      </section>
      <section className="kasa_sectionCard">
        <DisplayCard />
      </section>
      <footer className="kasa_footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
