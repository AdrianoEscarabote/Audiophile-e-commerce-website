import CheckoutModalStyled from "./CheckoutModalStyled";

interface CheckoutModalProps {
  closeModal: () => void
};

const CheckoutModal: React.FC<CheckoutModalProps> = ({ closeModal }) => {

  return (
    <CheckoutModalStyled onClick={closeModal}>
      <section className="modal" onClick={(e) => e.stopPropagation()}>
        <h1>estou no modal</h1>
      </section>
    </CheckoutModalStyled>
  );
};

export default CheckoutModal;