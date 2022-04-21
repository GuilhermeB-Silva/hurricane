import { ProductCardProps } from "./interface";
import { Container } from "./style";

export function ProductCard({ product }: ProductCardProps) {
  const { id, image, price, rating, title } = product;
  return (
    <Container>
      <img src={image} alt="" />
      <span>{title}</span>
      <span>{price}</span>
      <span>{id}</span>

      <div className="group-buttons">
        <button>Adicionar no carrinho</button>
        <button>Remover</button>
      </div>
    </Container>
  );
}
