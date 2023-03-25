import { MainStyled } from '@/styles/MainStyled';
import Image from 'next/image';
import ListProducts from '@/components/list_products/ListProducts';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { findProduct } from '@/redux/productdetails/actions';
import Link from 'next/link';

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
              <Link href='/ProductDetail' onClick={() => handleClickLink(nameProducts.xx99markiiheadphones)}>see product</Link>
            </div>
          </div>
        </section>
        <div className="container">
          <ListProducts />
          <section className="grid-items">
            <div className="zx9-speaker">
              <Image src="/assets/home/desktop/image-speaker-zx9.png" alt="" width="380" height="473" />
              <div className="text">
                <h2>ZX9 SPEAKER</h2>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Link href="/ProductDetail" onClick={() => handleClickLink(nameProducts.zx9speaker)}>see product</Link>
              </div>
            </div>
            <div className="zx7-speaker">
              <div className="text">
                <h3>zx7 speaker</h3>
                <Link href="/ProductDetail" onClick={() => handleClickLink(nameProducts.zx7speaker)}>see product</Link>
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
                <Link href="/ProductDetail" onClick={() => handleClickLink(nameProducts.yx1earphones)}>see product</Link>
              </div>
            </div>
          </section>
          <section className="info">
            <div className="text-info">
              <h3>Bringing you the <span>best</span> audio gear</h3>
              <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
            <picture>
              <source
                srcSet="/assets/shared/tablet/image-best-gear.jpg"
                media="(min-width: 480px) and (max-width: 1148px)"
                height={300}
              />
              <source
                srcSet="/assets/shared/mobile/image-best-gear.jpg"
                media="(max-width: 480px)"
                height={300}
              />
              <Image
                src="/assets/shared/desktop/image-best-gear.jpg"
                alt=""
                width={540}
                height={588}
              />
            </picture>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;