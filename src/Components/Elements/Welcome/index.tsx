import { Container } from "./style";
import buyImage from "Assets/buy.svg";

export function Welcome() {
  return (
    <Container>
      <div className="left-side">
        <img src={buyImage} alt="" />
      </div>
      <div className="right-side">
        <img src={buyImage} alt="" />
      </div>
    </Container>
  );
}
