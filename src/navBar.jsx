import "./styles/navBar.scss";
import cartIcon from "./assets/cart.svg";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <h1 className="logo">fruits.</h1>
      <ul className="nav-links">
        <li>
          <a href="#" className="nav-item">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-item">
            Store
          </a>
        </li>
      </ul>
      <a href="#" className="nav-item cart-icon">
        <img src={cartIcon} alt="Cart" />
      </a>
    </nav>
  );
}
