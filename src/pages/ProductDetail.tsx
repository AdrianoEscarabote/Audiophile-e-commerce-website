import ProductDetailStyled from "../styles/ProductDetailStyled";
import { useSelector } from "react-redux";
import rootReducer from "@/redux/root-reducer";
import Head from "next/head";
import { useEffect } from "react";

interface productState {
  name: string
}

interface RootState {
  productReducer: productState;
}

const ProductDetail = () => {
  
  const { name } = useSelector((rootReducer: RootState) => rootReducer.productReducer);

  useEffect(() => {
    console.log(name)
  }, []) 

  return (
    <>
      <Head>
        <title>Audiophile -  {name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ProductDetailStyled>
        <h1>oi estou no Product Detail {name}</h1>
      </ProductDetailStyled>
    </>
  );
};

export default ProductDetail;