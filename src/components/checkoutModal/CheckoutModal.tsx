import { cleanCart } from "@/redux/cart/actions";
import { selectProductsCount, selectProductTotalPrice } from "@/redux/cart/cart.selector";
import { RootState } from "@/types/CartProps";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CheckoutModalStyled from "./CheckoutModalStyled";

interface CheckoutModalProps {
  closeModal: () => void
};

const CheckoutModal: React.FC<CheckoutModalProps> = ({ closeModal }) => {

  const dispatch = useDispatch();
  const { products } = useSelector((rootReducer: RootState) => rootReducer.cartReducer);
  const ProductsCount = useSelector(selectProductsCount);
  const totalPrice = useSelector(selectProductTotalPrice);

  window.addEventListener("keydown", (ev) => {
    if (ev.key == "Escape") {
      closeModal();
    };
  });

  const handleCleanCart = () => {
    localStorage.clear()
    dispatch(cleanCart());
  };

  return (
    <CheckoutModalStyled onClick={closeModal}>
      <section className="modal" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-content" onClick={(e) => e.stopPropagation()}>
        <Image src="/assets/checkout/icon-order-confirmation.svg" alt="" width="64" height="64" />
        <h2 id="modal-title">thank you <span>for your order</span></h2>
        <p>You will receive an email confirmation shortly.</p>

        <div className="wrapper-order" id="modal-content">
          <div className="col1">
            <div className="item">
              <div className="details">
                <Image src={`/assets/cart/image-${products[0].imagePath}.jpg`} width="50" alt="" height="50"/>
                <p>{products[0].name}
                  <span>$ {products[0].price.toLocaleString("en", { minimumFractionDigits: 0 })}</span>
                </p>
              </div>
              <p className="amount">x{1}</p>
            </div>
            <p className="amout-itens">
              {
                products[0].quantity === 1 && products.length === 1 ? "" : `and ${ProductsCount - 1} other item(s)`
              }
            </p>
          </div>
          <div className="col2">
            <p>grand total
              <span>$ {(totalPrice + 50).toLocaleString("en", { minimumFractionDigits: 0 })}</span>
            </p>
          </div>
        </div>

        <Link href="/" onClick={() => {
          handleCleanCart()
          closeModal()
        }}>back to home</Link>
      </section>
    </CheckoutModalStyled>
  );
};

export default CheckoutModal;