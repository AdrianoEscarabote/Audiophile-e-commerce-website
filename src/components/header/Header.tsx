import { HeaderStyled } from "@/components/header/HeaderStyled";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Cart } from "../cart/Cart";
import ListProducts from "../list_products/ListProducts";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  // click functions
  const handleClickMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickCart = () => {
    setCartOpen(!cartOpen);
  };

  useEffect(() => {
    cartOpen || menuOpen ? document.querySelector("body")?.classList.add("overflow-hidden") : document.querySelector("body")?.classList.remove("overflow-hidden");
  }, [cartOpen, menuOpen]);
  
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
      {
        cartOpen ? (
          <div className="wrapper-cart" onClick={handleClickCart}>
            <div className="content-cart" onClick={handleClickCart}> 
              <Cart /> 
            </div>
          </div>
        ) :
        null
      }
      {
        menuOpen ? (
          <>
          <div className={menuOpen ? "list-mobile open" : "list-mobile"}>
            <ListProducts linkClick={handleClickMenu}/>
          </div>
          <div className="wrapper-shadow" onClick={handleClickMenu}></div>
          </>
        ) :
        null
      }
    </HeaderStyled>
  );
};