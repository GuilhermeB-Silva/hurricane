import { Container } from "./style";
import instagramLogo from "Assets/instagram.png";
import whatsappLogo from "Assets/whatsapp.png";

export function SocialMedia() {
  return (
    <Container>
      <div className="social">
        <img src={instagramLogo} alt="" />
        <span>@hurricanestore</span>
      </div>
      {/* <div className="social">
        <img src={whatsappLogo} alt="" />
        <span>+55 11 91111-1111</span>
      </div> */}
    </Container>
  );
}
