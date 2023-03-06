import { HeaderStyled } from "@/components/header/HeaderStyled";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ListProducts from "../list_products/ListProducts";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false)

  const handleClickMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true)
  }

  const handleClickCart = () => {
    cartOpen ? setCartOpen(false) : setCartOpen(true)    
  }
  
  return (
    <HeaderStyled>
      <div className="container">
    
        <div className="content">

          <div className="wrapper">

            <button onClick={handleClickMenu} aria-label={menuOpen ? "close menu" : "open menu"}>
              <Image src={menuOpen ? "/assets/shared/tablet/icon-menu-close.svg" : "/assets/shared/tablet/icon-menu.svg"} alt="" width="23" height="20" />
            </button>

            <Link href="/">
              <Image 
              src="./assets/shared/desktop/logo.svg"
              alt="main page" 
              width="143"
              height="25" />
            </Link>

          </div>

          <nav>
            <ul className="list-desktop">
              <li><Link href="/">home</Link></li>
              <li><Link href="/Headphones">headphones</Link></li>
              <li><Link href="/Speakers">speakers</Link></li>
              <li><Link href="/Earphones">earphones</Link></li>
            </ul>
            <ListProducts className={menuOpen ? "list-mobile" : "list-mobile-closed"}/>
          </nav>

          <button className={cartOpen ? "cart-open" : ""} onClick={handleClickCart} aria-label={cartOpen ? "close cart" : "open cart"}>
            <Image 
            src="./assets/shared/desktop/icon-cart.svg"
            width="23"
            height="20"
            alt="" />
            <span></span>
          </button>
        </div>   

      </div>
    </HeaderStyled>
  );
};