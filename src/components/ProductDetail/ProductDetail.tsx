import ProductDetailStyled from "./ProductDetailStyled";
/* import { useSelector } from "react-redux"; */
/* import rootReducer from "@/redux/root-reducer"; */

interface productState {
  productName: string;
}

interface RootState {
  productReducer: productState;
}

const ProductDetail = () => {

  /* const { productName } = useSelector((rootReducer: RootState) => rootReducer.productReducer)   */

  return (
    <ProductDetailStyled>
      <h1>oi estou no Product Detail</h1>
    </ProductDetailStyled>
  )
}

export default ProductDetail;