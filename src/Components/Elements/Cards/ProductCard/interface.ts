export interface ProductCardProps {
  product: {
    id: number;
    image: string;
    price: number;
    rating: {
      rate: number;
      count: number;
    };
    title: string;
  };
}
