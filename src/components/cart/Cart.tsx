import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import CartStyled from "./CartStyled"

interface CartProps {
  cartOpen: boolean
  closeCart: () => void
}

export const Cart: React.FC<CartProps> = ({ cartOpen, closeCart }) => {
  
  useEffect(() => {
    cartOpen ? document.querySelector("body")?.classList.add("overflow-hidden") : document.querySelector("body")?.classList.remove("overflow-hidden");
  }, [cartOpen])

  return (
    <CartStyled onClick={(e) => e.stopPropagation()}> 
      <div className="wrapper_button_cart">
        <p>CART (3)</p>
        <button>Remove all</button>
      </div>

      <ul>
        <li>
          <div className="content-list">
            <div className="details">
              <Image src="/assets/cart/image-zx7-speaker.jpg" alt="" width={64} height={64} />
              <p>
                XX99 MK II
                <span>$ 899</span>
              </p>
            </div>
            <div className="wrapper_button">
              <button>-</button>
              <span>2</span>
              <button>+</button>
            </div>
          </div>
        </li>
        <li>
          <div className="content-list">
              <div className="details">
                <Image src="/assets/cart/image-zx7-speaker.jpg" alt="" width={64} height={64} />
                <p>
                  XX99 MK II
                  <span>$ 899</span>
                </p>
              </div>
              <div className="wrapper_button">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </div>
        </li>
        <li>
          <div className="content-list">
              <div className="details">
                <Image src="/assets/cart/image-zx7-speaker.jpg" alt="" width={64} height={64} />
                <p>
                  XX99 MK II
                  <span>$ 899</span>
                </p>
              </div>
              <div className="wrapper_button">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </div>
        </li>
        <li>
          <div className="content-list">
              <div className="details">
                <Image src="/assets/cart/image-zx7-speaker.jpg" alt="" width={64} height={64} />
                <p>
                  XX99 MK II
                  <span>$ 899</span>
                </p>
              </div>
              <div className="wrapper_button">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </div>
        </li>
      </ul>

      <div className="total">
        <p>TOTAL <span>$ 5,396</span></p>
      </div>

      <Link href="/Checkout" onClick={closeCart}>checkout</Link>

      <h4>oi</h4>
    </CartStyled>
  )
}