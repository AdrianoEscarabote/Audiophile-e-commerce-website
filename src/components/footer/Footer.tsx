import { FooterStyled } from "@/components/footer/FooterStyled"
import Image from "next/image"
import Link from "next/link";

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <nav aria-label="footer">
          <div className="row1">
            <Link href="/" aria-label="Home page - Audiophile">
              <Image 
                src="/assets/shared/desktop/logo.svg"
                width="143"
                height="25"
                alt=""
              />
            </Link>
            <div className="links">
              <Link href="/">home</Link>
              <Link href="/Headphones" aria-label="Headphones page - Audiophile">headphones</Link>
              <Link href="/Speakers" aria-label="Speakers page - Audiophile">speakers</Link>
              <Link href="/Earphones" aria-label="Earphones page - Audiophile">earphones</Link>
            </div>
          </div>
          <div className="row2">
            <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            <div className="social-icons">
                <a href="https://www.facebook.com/" target={"_blank"} aria-label="Facebook">
                <Image src="/assets/shared/desktop/icon-facebook.svg" alt="" width="24" height="24" />
              </a>
              <a href="https://twitter.com/" target={"_blank"} aria-label="Twitter">
                <Image src="/assets/shared/desktop/icon-twitter.svg" alt="" width="24" height="24" />
              </a>
              <a href="https://www.instagram.com/" target={"_blank"} aria-label="Instagram">
                <Image src="/assets/shared/desktop/icon-instagram.svg" alt="" width="24" height="24" />
              </a>
            </div>
          </div>
          <div className="row3">
            <p>Copyright 2023. All Rights Reserved</p>
          </div>
        </nav>
      </div>
    </FooterStyled>
  );
};