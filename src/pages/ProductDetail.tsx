import ProductDetailStyled from "../styles/ProductDetailStyled";
import { useSelector } from "react-redux";
import rootReducer from "@/redux/root-reducer";
import Head from "next/head";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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

  // usar o {name} para acessar os dados!

  return (
    <>
      <Head>
        <title>Audiophile -  {name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ProductDetailStyled>
        <div className="container">
          <Link href="/">Go Back</Link>
          <section className="grid-items">
            <Image src="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg" alt="" width="540" height="560" />
            <div className="text">
              <h2>new product</h2>
              <h1>XX99 Mark II Headphones</h1>
              <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
              <span className="price">$ 2,999</span>
              <button>add to cart</button>
            </div>
          </section>
          <section className="details">
            <div className="features">
              <h3>features</h3>
              <p>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.</p>
              <p>The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
            </div>
            <div className="list-box">
              <h3>in the box</h3>
              <ul>
                <li>
                  <p>
                    <span>1x</span>
                    Headphone Unit
                  </p>
                </li>
                <li>
                  <p>
                    <span>2x</span>
                    Replacement Earcups
                  </p>
                </li>
                <li>
                  <p>
                    <span>1x</span>
                    User Manual
                  </p>
                </li>
                <li>
                  <p>
                    <span>1x</span>
                    3.5mm 5m Audio Cable
                  </p>
                </li>
                <li>
                  <p>
                    <span>1x</span>
                    Travel Bag
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </ProductDetailStyled>
    </>
  );
};

export default ProductDetail;