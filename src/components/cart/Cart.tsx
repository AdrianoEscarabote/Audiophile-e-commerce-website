import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import CartStyled from "./CartStyled"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import rootReducer from "@/redux/root-reducer"
import { cleanCart, Decrease, Increase } from "@/redux/cart/actions"
import { CartProps, RootState } from "@/types/CartProps"
import { selectProductTotalPrice, selectProductsCount } from "@/redux/cart/cart.selector"

export const Cart: React.FC<CartProps> = ({ cartOpen, closeCart }) => {

  const dispatch = useDispatch()

  const ProductTotalPrice = useSelector(selectProductTotalPrice)
  const ProductsCount = useSelector(selectProductsCount)
  const { products } = useSelector((rootReducer: RootState) => rootReducer.cartReducer);
  
  useEffect(() => {
    cartOpen ? document.querySelector("body")?.classList.add("overflow-hidden") : document.querySelector("body")?.classList.remove("overflow-hidden");
  }, [cartOpen]);
  
  useEffect(() => {
    // save cart data to localStorage whenever cart state changes
    const cartString = JSON.stringify(products)
    localStorage.setItem("cart", cartString)
  }, [products])

  const handleCleanCart = () => {
    dispatch(cleanCart())
  }

  const handleDecreaseQuantity = (product: any) => {
    dispatch(Decrease(product))
  } 

  const handleIncreaseQuantity = (product: any) => {
    dispatch(Increase(product))
  }

  return (
    <CartStyled onClick={(e) => e.stopPropagation()}> 
      <div className="wrapper_button_cart">
        <p>CART {ProductsCount != 0 ? `(${ProductsCount})` : null}</p>
        <button onClick={handleCleanCart}>Remove all</button>
      </div>

      <ul>
        {
          products.length >= 1 ? products.map(product => (
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
                  <button onClick={() => handleDecreaseQuantity(product)}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(product)}>+</button>
                </div>
              </div>
            </li>
          )) : <p className="no-product">No product in cart...</p>
        }
      </ul>

      <div className="total">
        <p>TOTAL <span>$ {ProductTotalPrice}</span></p>
      </div>

      <Link href={products.length >= 1 ? "/Checkout" : "/"} className={products.length >= 1 ? "" : "disabled"} onClick={closeCart}>checkout</Link>
    </CartStyled>
  ) 
}