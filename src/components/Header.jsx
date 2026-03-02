import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

export default function Header() {
  return (
    <header>
      <div className="header-brand">
        <img src={Logo} alt="FlowerPlant logo" className="header-logo" />
        <h1>FlowerPlant</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/myplants">My plants</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}