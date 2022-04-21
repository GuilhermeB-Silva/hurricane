import { ProductCard } from "Components/Elements/Cards/ProductCard";
import { useFetchedProducts } from "Core/Hooks/useFetchedProducts";

export function ProductList() {
  const [products] = useFetchedProducts();

  return (
    <>
      {!!products &&
        products.map((product) => <ProductCard product={product} />)}
    </>
  );
}
