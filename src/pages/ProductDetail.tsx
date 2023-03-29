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
import { useDispatch } from "react-redux";
import { findProduct } from "@/redux/productdetails/actions";
import { addProductToCart } from "@/redux/cart/actions";
import { RootState } from "@/types/CartProps";
import { ProductTypeCart, RootStateProduct, DataProps } from "@/types/ProductDetailsProps"; 
import { useCartLocalStorage } from "@/custom/useCartLocalStorage";

const ProductDetail = () => {
  const effectRan = useRef(false)
  const [quantity, setQuantity] = useState<number>(1)
  // name - redux
  const { name } = useSelector((rootReducer: RootStateProduct) => rootReducer.productReducer);

  useEffect(() => {
    name ? null : dispatch(findProduct(localStorage.getItem("name_product")))
  }, [])

  // data
  const dispatch = useDispatch()
  const { data, refetch } = useFetch();

  const clickLinkRenderNewData = (nameToFind: string) => {
    dispatch(findProduct(nameToFind))
    localStorage.setItem("name_product", nameToFind)
    setQuantity(1)
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

  const handleAddProduct = () => {
    const ProductToCart: ProductTypeCart = {
      id: dataFormated[0].id,
      imagePath: dataFormated[0].slug,
      name: dataFormated[0].name,
      price: dataFormated[0].price,
      quantity: quantity
    };
    dispatch(addProductToCart(ProductToCart));
  }; 
  
  const { products } = useSelector((rootReducer: RootState) => rootReducer.cartReducer);

  useCartLocalStorage();
  
  useEffect(() => {
    // save cart data to localStorage whenever cart state changes
    if (effectRan.current === true) {
      const cartString = JSON.stringify(products)
      localStorage.setItem("cart", cartString)
    }
    return () => {
      effectRan.current = true
    }
  }, [products])

  return (
    <>
      <Head>
        <title>Audiophile -  {dataFormated.map((product) => product.name )}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ProductDetailStyled>
        <div className="container">
          <Link href="/" className="back">Go Back</Link>
          <>
            {
              dataFormated &&
              dataFormated.map((product) => (
                <div key={product.id}>
                  <section className="grid-items">
                    <div className="image">
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
                    </div>
                    <div className="text">
                      <p className="new-product">{product.new ? "new product" : null}</p>
                      <h1>{product.name}</h1>
                      <p>{product.description}</p>
                      <span className="price">$ {product.price}</span>
                      <div className="wrapper">
                        <div className="container-button">
                          <button aria-label="decrease amount" onClick={decreaseQuantity}>-</button>
                          <span>{quantity}</span>
                          <button aria-label="increase amount" onClick={increaseQuantity}>+</button>
                        </div>
                        <button aria-label="add product to cart" className="add" onClick={handleAddProduct}>add to cart</button>
                      </div>
                    </div>
                  </section>
                  <section className="details">
                    <div className="features">
                      <h2>features</h2>
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
                </div>
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