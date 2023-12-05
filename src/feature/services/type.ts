export type productType = {
  id?: number;
  category: string;
  title: string;
  content?: string;
  image: string;
  oldPrice?: number;
  price: number;
};

export type productCart = {
  product: productType;
  quantity?: number;
};
