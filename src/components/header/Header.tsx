import { HeaderStyled } from "@/components/header/HeaderStyled";
import { LinkSeeProduct } from "@/styles/shared/linkSeeProduct";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">

        <div className="content">

          <Link href="/">
            <Image 
            src="./assets/shared/desktop/logo.svg"
            alt="main page" 
            width="143"
            height="25" />
          </Link>

          <nav>
            <ul>
              <li><Link href="/">home</Link></li>
              <li><Link href="/Headphones">headphones</Link></li>
              <li><Link href="/Speakers">speakers</Link></li>
              <li><Link href="/Earphones">earphones</Link></li>
            </ul>
          </nav>


          <button>
            <Image 
            src="./assets/shared/desktop/icon-cart.svg"
            width="23"
            height="20"
            alt="" />
          </button>

        </div>   

      </div>
    </HeaderStyled>
  );
};