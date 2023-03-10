import InfoComponent from "@/components/infoSection/InfoComponent";
import ListProducts from "@/components/list_products/ListProducts";
import HeadphonesStyled from "@/styles/HeadphonesStyled";
import { LinkSeeProduct } from "@/styles/shared/linkSeeProduct";
import Head from "next/head";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { findProduct } from "@/redux/productdetails/actions";

const nameProducts = {
  xx59headphones: "xx59-headphones",
  xx99markiheadphones: "xx99-mark-one-headphones",
  xx99markiiheadphones: "xx99-mark-two-headphones",
}

const Headphones = () => {
  const dispatch = useDispatch();

  const handleClickLink = (nameToFind: string) => {
    dispatch(findProduct(nameToFind))
  }

  return (
    <>    
      <Head>
        <title>Audiophile - Headphones</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeadphonesStyled>
        <div className="wrapper">
          <h1>HEADPHONES</h1>
        </div>
        <div className="container">
          <section className="headphones">
            <div className="mark2">
              <picture>
                <source
                  srcSet="/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"
                  media="(max-width: 1000px)"
                />
                <source
                  srcSet="/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
                  media="(max-width: 584px)"
                />
                <Image src="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg" width="540" height="560" alt="" />
              </picture>
              
              <div className="text">
                <span>new product</span>
                <h2>XX99 Mark II Headphones</h2>
                <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                <LinkSeeProduct onClick={() => handleClickLink(nameProducts.xx99markiiheadphones)}  backgroundcolor="#D87D4A" hoverbackground="#FBAF85" fontcolor="#FFFFFF" href="/ProductDetail">see product</LinkSeeProduct>
              </div>
            </div>

            <div className="mark1">
              <div className="text">
                <h2>XX99 Mark I Headphones</h2>
                <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                <LinkSeeProduct onClick={() => handleClickLink(nameProducts.xx99markiheadphones)} backgroundcolor="#D87D4A" hoverbackground="#FBAF85" fontcolor="#FFFFFF" href="/ProductDetail">see product</LinkSeeProduct>
              </div>
              <picture>
                <source
                  srcSet="/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg"
                  media="(max-width: 1000px)"
                />
                <source
                  srcSet="/assets/shared/mobile/image-best-gear.jpg"
                  media="(max-width: 480px)"
                />
                <Image src="/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg" alt="" width="540" height="560" />

              </picture>
            </div>

            <div className="xx59">
              <picture>

                <source
                  srcSet="/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg"
                  media="(max-width: 1000px)"
                />

                <source
                  srcSet="/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"
                  media="(max-width: 584px)"
                />

                <Image src="/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg" alt="" width="540" height="560" />

              </picture>

              <div className="text">
                <h2>XX59 Headphones</h2>
                <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                <LinkSeeProduct onClick={() => handleClickLink(nameProducts.xx59headphones)} backgroundcolor="#D87D4A" hoverbackground="#FBAF85" fontcolor="#FFFFFF" href="/ProductDetail">see product</LinkSeeProduct>
              </div>
            </div>

          </section>
          <ListProducts />
          <InfoComponent />
        </div>
      </HeadphonesStyled>
    </>
  );
};
export default Headphones;