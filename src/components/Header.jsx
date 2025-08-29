import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header id="header">
      <img
        src={logo}
        alt="Big green bag with dollar sign and coins stacked around it"
      ></img>
      <h1>Investment Calculator</h1>
    </header>
  );
}
