import Link from 'next/link';
import { MainStyled } from '@/styles/MainStyled';
import { LinkSeeProduct } from '@/styles/shared/linkSeeProduct';
import { darkOrange } from '@/styles/colors';
import { white } from '@/styles/colors';
import { lightOrange } from '@/styles/colors';
import Image from 'next/image';

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
            <Image
              src="/assets/home/desktop/image-hero.jpg"
              alt=''
              width="120"
              height="120"
              className='image'
            />
          </div>
        </div>
      </section>
      <div className="container">
        <div className="links-products">
          <a href="/">
            <Image 
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png" 
              width="200"
              height="200"
              alt="" 
            />
            <p>headphones</p>
          </a>
          <a href="/">
            <Image 
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png" 
              width="200"
              height="200"
              alt="" 
            />
            <p>speakers</p>
          </a>
          <a href="/">
            <Image 
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png" 
              width="200"
              height="200"
              alt="" 
            />
            <p>earphones</p>
          </a>
        </div>
      </div>
      <Link href="/About">Ir para o About</Link>
    </MainStyled>
  );
};