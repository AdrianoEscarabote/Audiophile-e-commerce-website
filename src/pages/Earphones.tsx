import EarphonesStyled from "@/styles/EarphonesStyled";
import ListProducts from "@/components/list_products/ListProducts";
import InfoComponent from "@/components/infoSection/InfoComponent";
import Image from "next/image";
import { LinkSeeProduct } from "@/styles/shared/linkSeeProduct";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { findProduct } from "@/redux/productdetails/actions";

const nameProducts = {
  yx1earphones: "yx1-earphones",
}

const Earphones = () => {
  const dispatch = useDispatch();

  const handleClickLink = (nameToFind: string) => {
    dispatch(findProduct(nameToFind))
  }

  return (
    <>
      <Head>
        <title>Audiophile - Earphones</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <EarphonesStyled>
        <div className="wrapper">
          <h1>earphones</h1>
        </div>
          <div className="container">
            <section className="preview-product">
              <Image src="/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg" width="540" height="560" alt="" />
              <div className="text-product">
                <span>new product</span>
                <h2>YX1 WIRELESS EARPHONES</h2>
                <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                <LinkSeeProduct onClick={() => handleClickLink(nameProducts.yx1earphones)} backgroundcolor="#D87D4A" hoverbackground="#FBAF85" fontcolor="#FFFFFF" href="/ProductDetail">see product</LinkSeeProduct>
              </div>
            </section>
            <ListProducts />
            <InfoComponent />
          </div>
      </EarphonesStyled>
    </>
  );
};
export default Earphones;