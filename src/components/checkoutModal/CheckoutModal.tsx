import Image from "next/image";
import Link from "next/link";
import CheckoutModalStyled from "./CheckoutModalStyled";

interface CheckoutModalProps {
  closeModal: () => void
};

const CheckoutModal: React.FC<CheckoutModalProps> = ({ closeModal }) => {

  return (
    <CheckoutModalStyled onClick={closeModal}>
      <section className="modal" onClick={(e) => e.stopPropagation()}>
        <Image src="/assets/checkout/icon-order-confirmation.svg" alt="" width="64" height="64" />
        <h2>thank you <span>for your order</span></h2>
        <p>You will receive an email confirmation shortly.</p>

        <div className="wrapper-order">
          <div className="col1">
            <div className="item">
              <div className="details">
                <Image src="/assets/cart/image-xx99-mark-two-headphones.jpg" width="50" alt="" height="50"/>
                <p>XX99 MK II
                  <span>$ 2,999</span>
                </p>
              </div>
              <p className="amount">x1</p>
            </div>
            <p className="amout-itens">and 2 other item(s)</p>
          </div>
          <div className="col2">
            <p>grand total
              <span>$ 5,446</span>
            </p>
          </div>
        </div>

        <Link href="/">back to home</Link>
      </section>
    </CheckoutModalStyled>
  );
};

export default CheckoutModal;