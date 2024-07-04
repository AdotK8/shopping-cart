import "./styles/navBar.scss";
import cartIcon from "./assets/cart.svg";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <h1>fruits.</h1>
      <ul>
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
        <li>
          <a href="#" className="nav-item cart-icon">
            <img src={cartIcon} alt="Cart" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
