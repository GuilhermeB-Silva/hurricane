import { Header } from "Components/Layout/Header";
import { Welcome } from "Components/Elements/Welcome";
import { useDelayedUnmounting } from "Core/Hooks/useAnimationUNmount";
import { Container } from "Core/Styles/Pages/Home";
import banner from "Assets/banner.svg";
import flagOff from "Assets/flag.svg";
import { Footer } from "Components/Layout/Footer";
import { ProductList } from "Components/Elements/ComponentsLIst/ProductsList";

export function Home() {
  return (
    <Container>
      <Header />
      <div className="banner-wrapper">
        <div className="banner">
          <div className="banner-text">
            Tá procurando descontos ?
            <br />A Hurricane tem, venha conferir.
            <br />
            Até 50% OFF
            <img src={flagOff} alt="" />
          </div>
          <img src={banner} alt="" />
        </div>
      </div>
      <main>
        <div className="content">
          <div className="content-filter"></div>
          <div className="content-products">
            <ProductList />
          </div>
        </div>
      </main>

      <Footer />
    </Container>
  );
}
