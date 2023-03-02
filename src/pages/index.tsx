import Link from 'next/link';
import { MainStyled } from '@/styles/MainStyled';
import { LinkSeeProduct } from '@/styles/shared/linkSeeProduct';
import { black, darkOrange } from '@/styles/colors';
import { white } from '@/styles/colors';
import { lightOrange } from '@/styles/colors';
import Image from 'next/image';
import { hoverBtnMain } from '@/styles/colors';

export default function Home() {

  return (
    <MainStyled>
      <section className="hero-image">
        <div className="content">
          <div className="col1">
            <h2>new product</h2>
            <h1>XX99 Mark II Headphones</h1>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <LinkSeeProduct href='/' backgroundColor={darkOrange} fontColor={white} hoverBackground={lightOrange}>see product</LinkSeeProduct>
          </div>
          <div className="col2">
            <Image src="/assets/home/desktop/image-hero.jpg" alt='' width="120" height="120" className='image' />
          </div>
        </div>
      </section>
      <div className="container">
        <div className="links-products">
          <a href="/">
            <Image className='img' src="/assets/shared/desktop/image-category-thumbnail-headphones.png" width="200" height="200" alt=""  />
            <p>headphones
              <span>
                shop
                <Image src="/assets/shared/desktop/icon-arrow-right.svg" alt="" width="5" height="12" />
              </span>
            </p>
          </a>
          <a href="/">
            <Image className='img'  src="/assets/shared/desktop/image-category-thumbnail-speakers.png"  width="200" height="200" alt=""  />
            <p>speakers
              <span>
                shop
                <Image  src="/assets/shared/desktop/icon-arrow-right.svg" width="5" height="12" alt="" />
              </span>
            </p>
          </a>
          <a href="/">
            <Image className='img' src="/assets/shared/desktop/image-category-thumbnail-earphones.png"  width="200" height="200" alt=""  />
            <p>earphones
              <span>
                shop
                <Image src="/assets/shared/desktop/icon-arrow-right.svg" width="5" height="12" alt="" />
              </span>
            </p>
          </a>
        </div>
        <section className="grid-items">
          <div className="zx9-speaker">
            <Image src="/assets/home/desktop/image-speaker-zx9.png" alt="" width="410" height="493" />
            <div className="text">
              <h2>ZX9 SPEAKER</h2>
              <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <LinkSeeProduct backgroundColor={black} hoverBackground={hoverBtnMain} hoverFont="#FFFFFF" fontColor={white} border="1px solid #000000" href="/About">see product</LinkSeeProduct>
            </div>
          </div>
          <div className="zx7-speaker">
            <div className="text">
              <h3>zx7 speaker</h3>
              <LinkSeeProduct backgroundColor="#ffffff" hoverBackground="#000000" hoverFont="#FFFFFF" fontColor="#000000" border="1px solid #000000" href="/About">see product</LinkSeeProduct>
            </div>
          </div>
        </section>
      </div>
      <Link href="/About">Ir para o About</Link>
    </MainStyled>
  );
};