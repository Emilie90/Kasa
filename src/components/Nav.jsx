import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="Nav">
      <NavLink
        to="/"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
        end
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
        end
      >
        A propos
      </NavLink>
    </div>
  );
}
