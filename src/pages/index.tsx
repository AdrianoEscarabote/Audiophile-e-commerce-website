import Link from 'next/link';
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

// escrever os dados do nome aqui
const data = {
  
}

export default function Home() {
  const dispatch = useDispatch()

  const HandleClickLink = (name: string) => {
    dispatch(findProduct(name))
  }

  return (
    <>
      <Head>
        <title>Audiophile e-commerce website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainStyled>
        <section className="hero-image">
          <div className="content">
            <div className="col1">
              <h2>new product</h2>
              <h1>XX99 Mark II Headphones</h1>
              <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
              <LinkSeeProduct href='/' backgroundcolor={darkOrange} fontColor={white} hoverBackground={lightOrange} onClick={(e) => HandleClickLink(e.currentTarget.innerText)}>see product</LinkSeeProduct>
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
                <LinkSeeProduct backgroundcolor={black} hoverBackground={hoverBtnMain} hoverFont="#FFFFFF" fontColor={white} border="1px solid #000000" href="/ProductDetail" onClick={(e) => HandleClickLink(e.currentTarget.innerText)}>see product</LinkSeeProduct>
              </div>
            </div>
            <div className="zx7-speaker">
              <div className="text">
                <h3>zx7 speaker</h3>
                <LinkSeeProduct backgroundcolor="#ffffff" hoverBackground="#000000" hoverFont="#FFFFFF" fontColor="#000000" border="1px solid #000000" href="/ProductDetail" onClick={(e) => HandleClickLink(e.currentTarget.innerText)}>see product</LinkSeeProduct>
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
                <LinkSeeProduct backgroundcolor="#ffffff" hoverBackground="#000000" hoverFont="#FFFFFF" fontColor="#000000" border="1px solid #000000" href="/ProductDetail" onClick={(e) => HandleClickLink(e.currentTarget.innerText)}>see product</LinkSeeProduct>
              </div>
            </div>
          </section>
          <InfoComponent />
        </div>
      </MainStyled>
    </>
  );
};