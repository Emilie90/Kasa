import Carrousel from "../components/Carrousel";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/logements.json";
import Collapse from "../components/Collapse";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rate from "../components/Rate";

export default function FicheLogement() {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const [selectedAppart, setSelectedAppart] = useState();
  useEffect(() => {
    const id = params.id;
    const selected = data.find((appart) => appart.id === id);
    data.map(() => setSelectedAppart(selected));
    if (selected === undefined) {
      navigate("/404");
    }
  }, [navigate, params.id]);

  const slidePics = selectedAppart && selectedAppart.pictures;
  const description = selectedAppart && selectedAppart.description;
  const equipments = selectedAppart && selectedAppart.equipments;
  const tags = selectedAppart && selectedAppart.tags;
  console.log(equipments);
  return (
    selectedAppart && (
      <div key={id} className="Home">
        <div className="containerStyles">
          <Carrousel slides={slidePics} />
        </div>
        <div className="logements_top">
          <div className="logements_top__left">
            <h1 className="Appart-title">{selectedAppart.title}</h1>
            <h3 className="Appart-location">{selectedAppart.location}</h3>
            <div className="tag">
              {tags.map((tag) => (
                <Tags key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className="logements_top__right">
            <Host
              hostPic={selectedAppart.host.picture}
              hostName={selectedAppart.host.name}
            />
            <div className="star_box">
              <Rate scoreValue={selectedAppart.rating} />
            </div>
          </div>
        </div>
        <div className="logement_collapse">
          <Collapse Title="Description" Text={description} />
          <Collapse
            Title="Equipements"
            Text={equipments.map((equipment, i) => (
              <ul key={i}>
                <li>{equipment}</li>
              </ul>
            ))}
          />
        </div>
      </div>
    )
  );
}
