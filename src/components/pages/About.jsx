import "../../styles/about.css";
import Banner from "../banner";
import Footer from "../footer";
import Collapse from "../Collapse";
import CollapsesData from "../../datas/collapsesData.json";

function About() {
  return (
    <div>
      <header>
        <Banner />
      </header>
      <div>
        <div className="background_about">
          <div className="background_about_filtre"></div>
        </div>
        <div className="collapse">
          <div className="collapse_dropDown">
            {CollapsesData.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <footer className="kasa_footer">
        <Footer />
      </footer>
    </div>
  );
}

export default About;
