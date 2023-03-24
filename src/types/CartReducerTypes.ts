export interface ProductTypes {
  name: string,
  price: number,
  imagePath: string,
  quantity: number,
  id: number
}

export interface ActionProps {
  type: string
  payload: {
    name: string,
    price: number,
    imagePath: string,
    quantity: number,
    id: number
  }
}
 
export interface Product {
  products: ProductTypes[]
  productsTotalPrice: number
}