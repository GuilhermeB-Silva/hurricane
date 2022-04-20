import { Container } from "./style";
import hurricaneLogo from "Assets/hurricane.png";

export function Footer() {
  return (
    <Container>
      <div className="footer">
        <div className="logo">
          <img src={hurricaneLogo} alt="" />
          <span>Hurricane </span>
        </div>
      </div>
    </Container>
  );
}
