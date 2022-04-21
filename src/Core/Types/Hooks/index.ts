export interface ProductProps {
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

export type ListProductsProps = ProductProps[];
