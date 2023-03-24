export interface CartProps {
  cartOpen: boolean
  closeCart: () => void
}

export interface cartReducer {
  products: ProductTypes[]
};

export interface ProductTypes {
  name: string,
  price: number,
  imagePath: string,
  quantity: number,
  id: string
}

export interface RootState {
  cartReducer: cartReducer;
};
