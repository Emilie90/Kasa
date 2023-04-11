import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="error404">
      <p className="error404__chiffre">404</p>
      <p className="error404__text">
        Oups! la page que vous demandez n'existe pas.
      </p>

      <Link to="/" className="error404__link">
        Retourner à la page d'accueil
      </Link>
    </div>
  );
}
