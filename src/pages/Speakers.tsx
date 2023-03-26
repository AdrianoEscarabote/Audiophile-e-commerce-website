import InfoComponent from "@/components/infoSection/InfoComponent";
import ListProducts from "@/components/list_products/ListProducts";
import { LinkSeeProduct } from "@/styles/shared/linkSeeProduct";
import SpeakersStyled from "@/styles/SpeakersStyled";
import Head from "next/head";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { findProduct } from "@/redux/productdetails/actions";

const nameProducts = { 
  zx9speaker: "zx9-speaker",
  zx7speaker: "zx7-speaker",
}

const Speakers = () => {
  const dispatch = useDispatch();

  const handleClickLink = (nameToString: string) => {
    dispatch(findProduct(nameToString))
  }

  return (
    <>
      <Head>
        <title>Audiophile - Speakers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SpeakersStyled>
        <div className="wrapper">
          <h1>speakers</h1>
        </div>
        <div className="container">
          <section className="products">
            <div className="zx9">
              <picture>
                <source
                  srcSet="/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg"
                  media="(min-width: 480px) and (max-width: 1148px)"
                />
                <source
                  srcSet="/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"
                  media="(max-width: 480px)"
                />
                <Image src="/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg" width="540" height="560" alt="" />
              </picture>
              <div className="text">
                <span>new product</span>
                <h2>zx9 speaker</h2>
                <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                <LinkSeeProduct aria-label="view product" onClick={() => handleClickLink(nameProducts.zx9speaker)} backgroundcolor="#D87D4A" hoverbackground="#FBAF85" fontcolor="#FFFFFF" href="/ProductDetail">see product</LinkSeeProduct>
              </div>
            </div>
            <div className="zx7">
              <div className="text">
                <h2>zx7 speaker</h2>
                <p>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
                <LinkSeeProduct aria-label="view product" onClick={() => handleClickLink(nameProducts.zx7speaker)} backgroundcolor="#D87D4A" hoverbackground="#FBAF85" fontcolor="#FFFFFF" href="/ProductDetail">see product</LinkSeeProduct>
              </div>
              <picture>
                <source
                  srcSet="/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg"
                  media="(min-width: 480px) and (max-width: 1148px)"
                />
                <source
                  srcSet="/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg"
                  media="(max-width: 480px)"
                />
                <Image src="/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg" width="540" height="560" alt="" />
              </picture>
            </div>
          </section>
          <ListProducts />
          <InfoComponent />
        </div>
      </SpeakersStyled>
    </>
  );
};

export default Speakers;