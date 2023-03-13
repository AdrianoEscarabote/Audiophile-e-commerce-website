import ProductDetailStyled from "../styles/ProductDetailStyled";
import { useSelector } from "react-redux";
import rootReducer from "@/redux/root-reducer";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GridImages from "@/components/gridImages/GridImages";
import AlsoLike from "@/components/alsoLike/AlsoLike";
import ListProducts from "@/components/list_products/ListProducts";
import InfoComponent from "@/components/infoSection/InfoComponent";
import useFetch from "@/custom/useFetch";
import { DataProps } from "@/types/ProductDetailsProps";
import { useDispatch } from "react-redux";
import { findProduct } from "@/redux/productdetails/actions";

interface productState {
  name: string
};

interface RootState {
  productReducer: productState;
};

const ProductDetail = () => {
  const [quantity, setQuantity] = useState<number>(1)

  // name - redux
  const { name } = useSelector((rootReducer: RootState) => rootReducer.productReducer);

  // data
  const dispatch = useDispatch()
  const { data, refetch } = useFetch();

  const clickLinkRenderNewData = (nameToFind: string) => {
    dispatch(findProduct(nameToFind))
    refetch()
  }

  let dataFormated: DataProps[] = data.filter((product: any) => product.slug === name)

  // increse and decrease button
  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1)
  }
  const decreaseQuantity = () => {
    quantity === 1 ? null : setQuantity((quantity) => quantity - 1)
  }

  return (
    <>
      <Head>
        <title>Audiophile -  {name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ProductDetailStyled>
        <div className="container">
          <Link href="/" className="back">Go Back</Link>
          <>
            {
              dataFormated &&
              dataFormated.map((product) => (
                <>
                  <section key={product.id} className="grid-items">
                    <picture>
                      <source
                        srcSet={product.image.tablet}
                        media="(min-width: 685px) and (max-width: 848px)"
                      />
                      <source
                        srcSet={product.image.mobile}
                        media="(max-width: 685px)"
                        height={300}
                      />
                      <Image src={product.image.desktop} alt="" width={540} height={560} />
                    </picture>
                    <div className="text">
                      <h2>{product.new ? "new product" : null}</h2>
                      <h1>{product.name}</h1>
                      <p>{product.description}</p>
                      <span className="price">$ {product.price}</span>
                      <div className="wrapper">
                        <div className="container-button">
                          <button onClick={decreaseQuantity}>-</button>
                          <span>{quantity}</span>
                          <button onClick={increaseQuantity}>+</button>
                        </div>
                        <button className="add">add to cart</button>
                      </div>
                    </div>
                  </section>
                  <section className="details">
                    <div className="features">
                      <h3>features</h3>
                      <p>{product.feature1}</p>
                      <p>{product.feature2}</p>
                    </div>
                    <div className="list-box">
                      <h3>in the box</h3>
                      <ul>
                        {
                          product.includes.map((item, index_item) => (
                            <li key={index_item}>
                              <p>
                                <span>{item.quantity}x</span>
                                {item.item}
                              </p>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </section>
                  <GridImages gallery={product.gallery} />
                  <AlsoLike others={product.others} clickLinkRenderNewData={clickLinkRenderNewData} />
                </>
              ))
            }
          </>
          <ListProducts />
          <InfoComponent />
        </div>
      </ProductDetailStyled>
    </>
  );
};

export default ProductDetail;