import InfoComponent from "@/components/infoSection/InfoComponent";
import ListProducts from "@/components/list_products/ListProducts";
import { LinkSeeProduct } from "@/styles/shared/linkSeeProduct";
import SpeakersStyled from "@/styles/SpeakersStyled";
import Image from "next/image";

const Speakers = () => {

  return (
    <SpeakersStyled>
      <div className="wrapper">
        <h1>speakers</h1>
      </div>
      <div className="container">
        <section className="products">
          <div className="zx9">
            <Image src="/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg" width="540" height="560" alt="" />
            <div className="text">
              <span>new product</span>
              <h2>zx9 speaker</h2>
              <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
              <LinkSeeProduct backgroundColor="#D87D4A" hoverBackground="#FBAF85" fontColor="#FFFFFF" href="/About">see product</LinkSeeProduct>
            </div>
          </div>
          <div className="zx7">
            <div className="text">
              <h2>zx7 speaker</h2>
              <p>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
              <LinkSeeProduct backgroundColor="#D87D4A" hoverBackground="#FBAF85" fontColor="#FFFFFF" href="/About">see product</LinkSeeProduct>
            </div>
            <Image src="/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg" width="540" height="560" alt="" />
          </div>
        </section>
        <ListProducts />
        <InfoComponent />
      </div>
    </SpeakersStyled>
  );
};

export default Speakers;