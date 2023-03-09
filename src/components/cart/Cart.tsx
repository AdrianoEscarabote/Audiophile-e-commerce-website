import Image from "next/image"
import Link from "next/link"
import CartStyled from "./CartStyled"



export const Cart = () => {

  return (
    <CartStyled> 
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
      </ul>

      <div className="total">
        <p>TOTAL <span>$ 5,396</span></p>
      </div>

      <Link href="/">checkout</Link>

      <h4>oi</h4>
    </CartStyled>
  )
}