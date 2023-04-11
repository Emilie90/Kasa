import logo from "../images/LOGO_footer.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo de l'entreprise" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
