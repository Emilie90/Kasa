import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

export default function About() {
  return (
    <div className="pageAbout">
      {" "}
      <div className="About_banner_box">
        <Banner />
      </div>
      <div className="About">
        <div className="About__collapse">
          {about.map((item, i) => (
            <Collapse key={i} Title={item.Title} Text={item.Text} />
          ))}
        </div>
      </div>
    </div>
  );
}

const about = [
  {
    Title: "Fiabilité",
    Text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    Title: "Respect",
    Text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    Title: "Service",
    Text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    Title: "Sécurité",
    Text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];
