import { MainStyled } from '@/styles/MainStyled';
import { LinkSeeProduct } from '@/styles/shared/linkSeeProduct';
import { black, darkOrange } from '@/styles/colors';
import { white } from '@/styles/colors';
import { lightOrange } from '@/styles/colors';
import Image from 'next/image';
import { hoverBtnMain } from '@/styles/colors';
import ListProducts from '@/components/list_products/ListProducts';
import InfoComponent from '@/components/infoSection/InfoComponent';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { findProduct } from '@/redux/productdetails/actions';

const nameProducts = {
  zx9speaker: "zx9-speaker", 
  zx7speaker: "zx7-speaker", 
  yx1earphones: "yx1-earphones", 
  xx99markiiheadphones: "xx99-mark-two-headphones", 
}

const Home = () => {
  const dispatch = useDispatch()

  const handleClickLink = (name: string) => {
    dispatch(findProduct(name))
  }

  return (
    <>
      <Head>
        <title>Audiophile e-commerce website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainStyled />
      <main>
        <section className="hero-image">
          <div className="content">
            <div className="col1">
              <h2>new product</h2>
              <h1>XX99 Mark II Headphones</h1>
              <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
              <LinkSeeProduct href='/ProductDetail' backgroundcolor={darkOrange} fontcolor={white} hoverbackground={lightOrange} onClick={() => handleClickLink(nameProducts.xx99markiiheadphones)}>see product</LinkSeeProduct>
            </div>
          </div>
        </section>
        <div className="container">
          <ListProducts />
          <section className="grid-items">
            <div className="zx9-speaker">
              <Image src="/assets/home/desktop/image-speaker-zx9.png" alt="" width="410" height="493" />
              <div className="text">
                <h2>ZX9 SPEAKER</h2>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <LinkSeeProduct backgroundcolor={black} hoverbackground={hoverBtnMain} hoverfont="#FFFFFF" fontcolor={white} border="1px solid #000000" href="/ProductDetail" onClick={() => handleClickLink(nameProducts.zx9speaker)}>see product</LinkSeeProduct>
              </div>
            </div>
            <div className="zx7-speaker">
              <div className="text">
                <h3>zx7 speaker</h3>
                <LinkSeeProduct backgroundcolor="#ffffff" hoverbackground="#000000" hoverfont="#FFFFFF" fontcolor="#000000" border="1px solid #000000" href="/ProductDetail" onClick={() => handleClickLink(nameProducts.zx7speaker)}>see product</LinkSeeProduct>
              </div>
            </div>
            <div className="yx1-earphones">
              <picture>
                <source
                  srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
                  media="(max-width: 828px)"
                />
                <Image src="/assets/home/desktop/image-earphones-yx1.jpg" alt="" width="540" height="320" />
              </picture>
              <div className="text">
                <h3>YX1 EARPHONES</h3>
                <LinkSeeProduct backgroundcolor="#ffffff" hoverbackground="#000000" hoverfont="#FFFFFF" fontcolor="#000000" border="1px solid #000000" href="/ProductDetail" onClick={() => handleClickLink(nameProducts.yx1earphones)}>see product</LinkSeeProduct>
              </div>
            </div>
          </section>
          <InfoComponent />
        </div>
      </main>
    </>
  );
};

export default Home;