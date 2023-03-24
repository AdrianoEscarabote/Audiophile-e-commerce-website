import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import CartStyled from "./CartStyled"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import rootReducer from "@/redux/root-reducer"

interface CartProps {
  cartOpen: boolean
  closeCart: () => void
}

interface cartReducer {
  products: ProductTypes[]
};

interface ProductTypes {
  name: string,
  price: number,
  imagePath: string,
  quantity: number,
  id: string
}

interface RootState {
  cartReducer: cartReducer;
};

export const Cart: React.FC<CartProps> = ({ cartOpen, closeCart }) => {
  
  useEffect(() => {
    cartOpen ? document.querySelector("body")?.classList.add("overflow-hidden") : document.querySelector("body")?.classList.remove("overflow-hidden");
  }, [cartOpen])

  const dispatch = useDispatch()
  
  const { products } = useSelector((rootReducer: RootState) => rootReducer.cartReducer);

  useEffect(() => {
    console.log(products)
  })

  return (
    <CartStyled onClick={(e) => e.stopPropagation()}> 
      <div className="wrapper_button_cart">
        <p>CART (4)</p>
        <button>Remove all</button>
      </div>

      <ul>
        {
          products.map(product => (
            <li key={product.id}>
              <div className="content-list">
                <div className="details">
                  <Image src={`/assets/cart/image-${product.imagePath}.jpg`} width={64} height={64} alt="" />
                  <p>
                    {product.name}
                    <span>$ {product.price}</span>
                  </p>
                </div>
                <div className="wrapper_button">
                  <button>-</button>
                  <span>{product.quantity}</span>
                  <button>+</button>
                </div>
              </div>
            </li>
          ))
        }
      </ul>

      <div className="total">
        <p>TOTAL <span>$ 5,396</span></p>
      </div>

      <Link href="/Checkout" onClick={closeCart}>checkout</Link>

      <h4>oi</h4>
    </CartStyled>
  )
}