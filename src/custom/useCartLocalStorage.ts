import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { cleanCart, addProductToCart } from "@/redux/cart/actions"
import { ProductTypes } from "@/types/CartProps"

export const useCartLocalStorage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // retrieve cart data from localStorage when component mounts
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      dispatch(cleanCart()) // clear the cart before adding new products
      const parsedCart: ProductTypes[] = JSON.parse(savedCart)
      parsedCart.forEach((product) => {
        dispatch(addProductToCart(product))
      })
    }
  }, [dispatch])
}