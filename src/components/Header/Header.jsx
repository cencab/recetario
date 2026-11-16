import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <span className="header__logo">🍲 RecipeFinder</span>
        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "header__link header__link_active" : "header__link"
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "header__link header__link_active" : "header__link"
            }
          >
            Buscar Recetas
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
