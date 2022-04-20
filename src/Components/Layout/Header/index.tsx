import { Container } from "./style";
import hurricaneLogo from "Assets/hurricane.png";
import { Link } from "react-router-dom";

import { SocialMedia } from "Components/Elements/SocialMedia";

export function Header() {
  return (
    <Container>
      <div className="header-layer">
        <SocialMedia />
        <div className="header-navigation">
          <div className="header-links">
            <div className="logo">
              <img src={hurricaneLogo} alt="" />
              <span>Hurricane </span>
            </div>
            <div></div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/products">Produtos</Link>
              <Link to="/contact">Contato</Link>
            </nav>
          </div>
          <div className="login-button">
            <button>Login</button>
          </div>
        </div>
      </div>
    </Container>
  );
}
