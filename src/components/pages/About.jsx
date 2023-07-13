import "../../styles/about.css";
import Banner from "../banner";
import Collapse from "../Collapse";
import CollapsesData from "../../datas/collapsesData.json";
import "../../styles/utils/tel_resolution/about_media.css";
import Footer from "../footer";

function About() {
  return (
    <div>
      <Banner />
      <div>
        <div className="background_about">
          <div className="background_about_filtre"></div>
        </div>
        <div className="collapse">
          <div className="collapse_dropDown">
            {CollapsesData.map((item) => {
              return (
                <div className="about_collapse" key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
