import Nav from "./Nav";
import logo from "../images/LOGO.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo de l'entreprise" />
      <Nav />
    </header>
  );
}
