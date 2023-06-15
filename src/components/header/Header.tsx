import { HeaderStyled } from "./HeaderStyled";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Cart } from "../cart/Cart";
import ListProducts from "../list_products/ListProducts";
import { useSelector } from "react-redux";
import { selectProductsCount } from "../../redux/cart/cart.selector";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  // click functions
  const handleClickMenu = () => {
    setMenuOpen(!menuOpen);
    setCartOpen(false)
  };

  const handleClickCart = () => {
    setCartOpen(!cartOpen);
    setMenuOpen(false)
  };

  const ProductsCount = useSelector(selectProductsCount)

  useEffect(() => {
    cartOpen || menuOpen ? document.querySelector("body")?.classList.add("overflow-hidden") : document.querySelector("body")?.classList.remove("overflow-hidden");
  }, [cartOpen, menuOpen]);
  
  return (
    <HeaderStyled>
      <div className="container">
        <div className="content">
          <nav aria-label="main">
            <div className="wrapper-nav">
              <button onClick={handleClickMenu} aria-label={menuOpen ? "close menu" : "open menu"}>
                <Image src={menuOpen ? "/assets/shared/tablet/icon-menu-close.svg" : "/assets/shared/tablet/icon-menu.svg"} alt="" width="23" height="20" />
              </button>
              <Link href="/" aria-label="Home page - Audiophile">
                <Image 
                src="./assets/shared/desktop/logo.svg"
                alt="main page" 
                width="143"
                height="25" />
              </Link>
            </div>
            <ul className="list-desktop">
              <li><Link href="/" aria-label="Home page - Audiophile">home</Link></li>
              <li><Link href="/Headphones" aria-label="Headphones page - Audiophile">headphones</Link></li>
              <li><Link href="/Speakers" aria-label="Speakers page - Audiophile">speakers</Link></li>
              <li><Link href="/Earphones" aria-label="Earphones page - Audiophile">earphones</Link></li>
            </ul>
            {
              cartOpen ? (
                <div className="wrapper-cart" onClick={handleClickCart}>
                  <div className="content-cart" onClick={handleClickCart}> 
                    <Cart closeCart={handleClickCart} cartOpen={cartOpen} /> 
                  </div>
                </div>
              ) :
              null
            }
            <div className="cart">
              <button
                aria-expanded={cartOpen}
                className={cartOpen ? "cart-open" : ""}
                onClick={handleClickCart}
                aria-label={cartOpen ? "close cart" : "open cart"}
              >
                <Image
                  src="./assets/shared/desktop/icon-cart.svg"
                  width="23"
                  height="20"
                  alt=""
                />
                <span className="visually-hidden" aria-live="polite">
                  {ProductsCount !== 0 ? `Items in cart: ${ProductsCount}` : null}
                </span>
              </button>
              {
                ProductsCount !== 0 ?
                <span>
                  {ProductsCount}
                </span>
                : null
              }
            </div>
          </nav>
        </div> 
      </div>
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