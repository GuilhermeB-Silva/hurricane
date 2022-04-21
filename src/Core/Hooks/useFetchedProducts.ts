import axios from "axios";
import { formatterProductInfo } from "Core/Helpers/StyleFormatter/Formatter/product";
import { ListProductsProps, ProductProps } from "Core/Types/Hooks";
import { useEffect, useState } from "react";

export function useFetchedProducts() {
  const [productsList, setProductsList] = useState<ListProductsProps>();

  async function fetchProducts() {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    const fetchedProducts = formatterProductInfo(data);
    setProductsList(fetchedProducts);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return [productsList];
}
