import { Link } from "react-router-dom";
import ticLogo from '../assets/ticLogo.png';


export default function Navbar() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <a>
            <img src={ticLogo} className="logo" alt="Tic Logo" Link to="/" />        
          </a>
        </div>
        <nav className="nav1">
          <ul className="nav-links">
            <li>
              <Link to="/">🏠 Inicio</Link>
            </li>
            <li>
              <Link to="/contacto">📧 Contacto</Link>
            </li>
          </ul>
        </nav>

      </header>
    </div>
  );
}