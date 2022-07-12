export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const fakeProductsApi = "https://fakestoreapi.com/products";

export const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch(fakeProductsApi)).json();
