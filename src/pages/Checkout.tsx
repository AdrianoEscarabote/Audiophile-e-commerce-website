import CheckoutModal from "@/components/checkoutModal/CheckoutModal";
import CheckoutStyled from "@/styles/CheckoutStyled";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


const Checkout = () => {

  const [modalOpen, setModalOpen] = useState<boolean>(false) 

  const handleClickOpenModal = () => {
    setModalOpen(!modalOpen)
  };

  useEffect(() => {
    modalOpen ? document.querySelector("body")?.classList.add("overflow-hidden") : document.querySelector("body")?.classList.remove("overflow-hidden")
  }, [modalOpen])

  return (
    <>
      <Head>
        <title>Audiophile - Checkout</title>   
      </Head>
      <CheckoutStyled>
        <div className="container">
          <Link href="/">Go Back</Link>
          <div className="wrapper">
            <section className="checkout">
              <h1>checkout</h1>

              <form noValidate>
                <fieldset>
                  <legend className="sr-only">Enter your information in all fields</legend>

                  <h2>Billing Details</h2>

                  <div className="wrapper-billing">
                    <div className="wrapper-input">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" placeholder="Alexel Ward" />
                    </div>

                    <div className="wrapper-input">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" name="email" id="email" placeholder="alexel@mail.com" />
                    </div>

                    <div className="wrapper-input">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" name="phone" id="phone" placeholder="+1 202-555-0136" />
                    </div>

                  </div>

                  <h2>shipping info</h2>

                  <div className="wrapper-shipping">
                    <div className="wrapper-input">
                      <label htmlFor="address">Address</label>
                      <input type="text" name="address" id="address" placeholder="1137 Williams Avenue" />
                    </div>

                    <div className="wrapper-input">
                      <label htmlFor="city">City</label>
                      <input type="text" name="city" id="city" placeholder="New York" />
                    </div>

                    <div className="wrapper-input">
                      <label htmlFor="country">Country</label>
                      <input type="text" name="country" id="country" placeholder="United States" />
                    </div>

                  </div>

                  <h2>payment details</h2>

                  <div className="wrapper-payment">

                    <div className="text">
                      <p>Payment Method</p>
                    </div>

                    <div className="labels">
                      <label htmlFor="e-money">
                        <input type="radio" name="e-money" id="e-money" />
                        <span>e-Money</span>
                      </label>
                      <label htmlFor="cash">
                        <input type="radio" name="cash" id="cash" />
                        <span>Cash on Delivery</span>
                      </label>
                    </div>

                  </div>

                  <div className="wrapper-money">
                    <div className="wrapper-input">
                      <label htmlFor="number">e-Money Number</label>
                      <input type="text" name="number" id="number" placeholder="238521993" />
                    </div>

                    <div className="wrapper-input">
                      <label htmlFor="pin">e-Money PIN</label>
                      <input type="text" name="pin" id="pin" placeholder="6891" />
                    </div>
                    
                  </div>

                </fieldset>
              </form>
            </section>
            <section className="summary">
              <h2>summary</h2>
              <ul>
                <li>
                  <div className="details">
                    <Image src="/assets/cart/image-xx59-headphones.jpg" alt="" width={64} height={64} />
                    <div className="price">
                      <p className="name">XX99 MK II</p>
                      <span>$ 2,999</span>
                    </div>
                  </div>
                  <div className="amount">
                    <span>x2</span>
                  </div>
                </li>
                <li>
                  <div className="details">
                    <Image src="/assets/cart/image-zx7-speaker.jpg" alt="" width={64} height={64} />
                    <div className="price">
                      <p className="name">XX99 MK II</p>
                      <span>$ 2,999</span>
                    </div>
                  </div>
                  <div className="amount">
                    <span>x2</span>
                  </div>
                </li>
                <li>
                  <div className="details">
                    <Image src="/assets/cart/image-zx9-speaker.jpg" alt="" width={64} height={64} />
                    <div className="price">
                      <p className="name">XX99 MK II</p>
                      <span>$ 2,999</span>
                    </div>
                  </div>
                  <div className="amount">
                    <span>x2</span>
                  </div>
                </li>
              </ul>
              
              <div className="total">
                <p>total <span>$ 5,396</span></p>
              </div>

              <div className="shipping">
                <p>shipping <span>$ 50</span></p>
              </div>

              <div className="vat">
                <p>vat (included) <span>$ 1,079</span></p>
              </div>

              <div className="grand-total">
                <p>grand total <span>$ 5,446</span></p>
              </div>

              <button onClick={handleClickOpenModal}>continue & pay</button>
            </section>
          </div>
          {
            modalOpen ? (
              <CheckoutModal closeModal={handleClickOpenModal}/>
            ) : null
          }
        </div>
      </CheckoutStyled>
    </>
  );
};

export default Checkout;