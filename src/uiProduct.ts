export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  image: string;
  description: string;
  inStock: boolean;
  featured?: boolean;
}
