import { ListProductsProps, ProductProps } from "Core/Types/Hooks";

export function formatterProductInfo(productsList: ListProductsProps) {
  if (!productsList) return;
  return productsList.map((product: ProductProps) => ({
    id: product.id,
    image: product.image,
    price: product.price,
    title: product.title,
    rating: product.rating,
  }));
}
