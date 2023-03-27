import CheckoutModal from "@/components/checkoutModal/CheckoutModal";
import useCountries from "@/custom/useCountries";
import CheckoutStyled from "@/styles/CheckoutStyled";
import { Action, FormState, initialState } from "@/types/CheckOutPropsTypes";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {  SetStateAction, useEffect, useReducer, useRef, useState } from "react";
import { RootState } from "@/types/CheckOutPropsTypes";
import { useSelector } from "react-redux";
import rootReducer from "@/redux/root-reducer";
import { selectProductTotalPrice } from "@/redux/cart/cart.selector";

const formReducer = (state: FormState, action: Action ) => {
  switch(action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_COUNTRY":
      return {...state, country: action.payload};
    case "SET_CITY": 
      return {...state, city: action.payload};
    case "SET_ADDRESS":
      return {...state, address: action.payload};
    case "SET_MONEYNUMBER":
      return {...state, e_money_number: action.payload};        
    case "SET_MONEYPIN":
      return {...state, e_money_pin: action.payload};
    case "SET_NAME": 
      return {...state, name: action.payload};
    case "SET_PHONE":
      return {...state, phone: action.payload};
    case "SET_ERROR_CITY":
      return {...state, errorMessageCity: action.payload};
    case "SET_ERROR_COUNTRY":
      return {...state, errorMessageCountry: action.payload};
    case "SET_ERROR_EMAIL":
      return {...state, errorMessageEmail: action.payload};
    case "SET_ERROR_MONEYNUMBER":
      return {...state, errorMessageEMoneyNumber: action.payload};
    case "SET_ERROR_MONEYPIN":
      return {...state, errorMessageEMoneyPin: action.payload};
    case "SET_ERROR_NAME":
      return {...state, errorMessageName: action.payload};
    case "SET_ERROR_ADDRESS": 
      return {...state, errorMessageAddress: action.payload};
    case "SET_ERROR_PHONE":
      return {...state, errorMessagePhone: action.payload};
    default:
      return state;
  }
}

const Checkout = () => {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /\s*(?:\+?(\d{1,3}))?[\W\D\s]^|()*(\d[\W\D\s]*?\d[\D\W\s]*?\d)[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d)[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d[\W\D\s]*?\d)(?: *x(\d+))?\s*$/

    switch(name) {
      case "email": 
        dispatch({type: "SET_EMAIL", payload: value})
        if (value === "") {
          dispatch({type: "SET_ERROR_EMAIL", payload: "Email can't be empty"})
        } else if (!emailRegex.test(value)) {
          dispatch({type: "SET_ERROR_EMAIL", payload: "Please enter a valid email address"})
        } else {
          dispatch({type: "SET_ERROR_EMAIL", payload: ""})
        }
        break
      case "name":
        dispatch({ type: "SET_NAME", payload: value })
        if (value === "") {
          dispatch({ type: "SET_ERROR_NAME", payload: "Name can't be empty" })
        } else {
          dispatch({ type: "SET_ERROR_NAME", payload: "" })
        }
        break
      case "phone":
        dispatch({ type: "SET_PHONE", payload: value })      
        if (value === "") {
          dispatch({ type: "SET_ERROR_PHONE", payload: "Phone can't be empty" })
        } else if (!phoneRegex.test(value)) {
          dispatch({ type: "SET_ERROR_PHONE", payload: "Phone cannot have this format" })
        } else {
          dispatch({ type: "SET_ERROR_PHONE", payload: "" })
        }
        break
      case "address":
        dispatch({ type: "SET_ADDRESS", payload: value })
        if (value === "") {
          dispatch({ type: "SET_ERROR_ADDRESS", payload: "Address can't be empty" })
        } else {
          dispatch({ type: "SET_ERROR_ADDRESS", payload: "" })
        }
        break
      case "city": 
        dispatch({ type: "SET_CITY", payload: value })
        if (value === "") {
          dispatch({ type: "SET_ERROR_CITY", payload: "City can't be empty" })
        } else {
          dispatch({ type: "SET_ERROR_CITY", payload: "" })
        }
        break
      case "country":
        dispatch({ type: "SET_COUNTRY", payload: value })
        refetch(value)
        if (value === "") {
          dispatch({ type: "SET_ERROR_COUNTRY", payload: "Country can't be empty" })
        } else {
          dispatch({ type: "SET_ERROR_COUNTRY", payload: "" })
        } 
        break
      case "pin":
        dispatch({ type: "SET_MONEYPIN", payload: value})
        if (value === "") {
          dispatch({ type: "SET_ERROR_MONEYPIN", payload: "e-Money PIN can't be empty"})
        } else {
          dispatch({ type: "SET_ERROR_MONEYPIN", payload: ""})
        }
        break
      case "number":
        dispatch({ type: "SET_MONEYNUMBER", payload: value })
        if (value === "") {
          dispatch({ type: "SET_ERROR_MONEYNUMBER", payload: "e-Money Number can't be empty"})
        } else {
          dispatch({ type: "SET_ERROR_MONEYNUMBER", payload: ""})
        } 
        break
    }
  }

  const handleClickCountryName = (name: string) => {
    if (name)  {
      dispatch({ type: "SET_COUNTRY", payload: name })
      dispatch({ type: "SET_ERROR_COUNTRY", payload: "" })
      setCountriesListOpen(false)
    }
  }

  // handle radio changes
  const [eMoney, setEMoney] = useState<boolean>(true);
  const [cash, setCash] = useState<boolean>(false);

  const handleChangeRadio = () => {
    setCash((prevState) => !prevState)
    setEMoney((prevState) => !prevState)
  }

  const [countriesListOpen, setCountriesListOpen] = useState<boolean>(false)

  const handleClickOpenModal = () => {
    setModalOpen(!modalOpen)
  };

  useEffect(() => {
    modalOpen ? document.querySelector("body")?.classList.add("overflow-hidden") : document.querySelector("body")?.classList.remove("overflow-hidden")
  }, [modalOpen])

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  function handleClickOutside(event: MouseEvent) {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      if (listRef.current && listRef.current.contains(event.target as Node)) {
        // Clicou dentro da lista de países, não faz nada
        null
      } else {
        // Clicou fora da lista de países, fecha a lista
        setCountriesListOpen(false);
      }
    }
  }

  const { CountriesList, refetch } = useCountries();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    console.log(CountriesList)
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    validateForm();
  }, [formData]);
  
  function validateForm() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /\s*(?:\+?(\d{1,3}))?[\W\D\s]^|()*(\d[\W\D\s]*?\d[\D\W\s]*?\d)[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d)[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d[\W\D\s]*?\d)(?: *x(\d+))?\s*$/;
  
    const { address, city, country, e_money_number, e_money_pin, email, name, phone } = formData;
  
    const isEmailValid = emailRegex.test(email);
    const isPhoneValid = phoneRegex.test(phone);
    const isEMoneyPinValid = e_money_pin.length >= 4;
  
    const isAllFieldsValid = products.length >= 1 && isEmailValid && isPhoneValid && isEMoneyPinValid && address && city && country && e_money_number && name;
  
    setIsFormValid(isAllFieldsValid as SetStateAction<boolean>);
  }

  const { products } = useSelector((rootReducer: RootState) => rootReducer.cartReducer)

  const ProductsTotalPrice = useSelector(selectProductTotalPrice)
  const shipping = 50
  const vat = ProductsTotalPrice / 5
  const grandTotal = ProductsTotalPrice + shipping

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
              {
                products.length === 0 ? (
                  <p className="empty-cart">Your cart is empty add some product!</p>
                ) : null
              }
              <h1>checkout</h1>
              <form noValidate>
                <fieldset>
                  <legend className="sr-only">Enter your information in all fields</legend>
                  <h2>Billing Details</h2>
                  <div className="wrapper-billing">
                    <div className="wrapper-input">
                      <label htmlFor="name" className={formData.errorMessageName
                       ? "error-font" : ""}>Name</label>
                      <span>{formData.errorMessageName}</span>
                      <input className={formData.errorMessageName ? "error_input" : ""} type="text" name="name" value={formData.name} onChange={handleChange} id="name" placeholder="Alexel Ward" />
                    </div>

                    <div className="wrapper-input">
                      <label htmlFor="email" className={formData.errorMessageEmail ? "error-font" : ""}>Email Address</label>
                      <span>{formData.errorMessageEmail}</span>
                      <input className={formData.errorMessageEmail ? "error_input" : ""} type="email" name="email" value={formData.email} onChange={handleChange} id="email" placeholder="alexel@mail.com" />
                    </div>

                    <div className="wrapper-input">
                      <label htmlFor="phone" className={formData.errorMessagePhone ? "error-font" : ""}>Phone</label>
                      <span>{formData.errorMessagePhone}</span>
                      <input className={formData.errorMessagePhone ? "error_input" : ""} type="text" name="phone" id="phone" value={formData.phone.replace(/[^0-9\s\(\)\-\+]/g, '')} onChange={handleChange} placeholder="+1 202-555-0136" />
                    </div>

                  </div>
                  <h2>shipping info</h2>
                  <div className="wrapper-shipping">
                    <div className="wrapper-input">
                      <label htmlFor="address" className={formData.errorMessageAddress ? "error-font" : ""}>Address</label>
                      <span>{formData.errorMessageAddress}</span>
                      <input className={formData.errorMessageAddress ? "error_input" : ""} type="text" value={formData.address} onChange={handleChange} name="address" id="address" placeholder="1137 Williams Avenue" />
                    </div>

                    <div className="wrapper-input">
                      <label htmlFor="city" className={formData.errorMessageCity ? "error-font" : ""}>City</label>
                      <span>{formData.errorMessageCity}</span>
                      <input className={formData.errorMessageCity ? "error_input" : ""} type="text" value={formData.city} onChange={handleChange} name="city" id="city" placeholder="New York" />
                    </div>

                    <div className="wrapper-input">
                      <label htmlFor="country" className={formData.errorMessageCountry ? "error-font" : ""}>Country</label>
                      <span>{formData.errorMessageCountry}</span>
                      <input className={formData.errorMessageCountry ? "error_input" : ""} type="text" value={formData.country} onFocus={() => setCountriesListOpen(true)} onChange={handleChange} name="country" id="country" placeholder="United States" ref={inputRef} />
                      {
                        countriesListOpen && CountriesList ? (
                          <ul className="list_countries" ref={listRef}>
                            {
                              CountriesList.map((item, index) => (
                                <li key={index}>
                                  <button type="button" aria-label={`select ${item.country_name}`} onClick={(ev) => handleClickCountryName(ev.currentTarget.innerText)}>
                                    {item.country_name}
                                  </button>
                                </li>
                              ))
                            }
                          </ul>
                        ) : null
                      }
                    </div>

                  </div>
                  <h2>payment details</h2>
                  <div className="wrapper-payment">
                    <div className="text">
                      <p>Payment Method</p>
                    </div>

                    <div className="labels">
                      <label htmlFor="e-money" className={eMoney ? "marked" : ""}>
                        <input  type="radio" checked={eMoney} onChange={handleChangeRadio} name="payment_method" id="e-money" />
                        <span>e-Money</span>
                      </label>
                      <label htmlFor="cash" className={cash ? "marked" : ""}>
                        <input type="radio"  checked={cash} onChange={handleChangeRadio} name="payment_method" id="cash" />
                        <span>Cash on Delivery</span>
                      </label>
                    </div>
                  </div>

                  <div className="wrapper-money">
                    <div className="wrapper-input">
                      <label htmlFor="number" className={formData.errorMessageEMoneyNumber ? "error-font" : ""}>e-Money Number</label>
                      <span>{formData.errorMessageEMoneyNumber}</span>
                      <input className={formData.errorMessageEMoneyNumber ? "error_input" : ""} type="text" maxLength={9} value={formData.e_money_number.replace(/[^0-9/]/g, '')} onChange={handleChange} name="number" id="number" placeholder="238521993" />
                    </div>
                    <div className="wrapper-input">
                      <label htmlFor="pin" className={formData.errorMessageEMoneyPin ? "error-font" : ""}>e-Money PIN</label>
                      <span>{formData.errorMessageEMoneyPin}</span>
                      <input className={formData.errorMessageEMoneyPin ? "error_input" : ""} type="text" maxLength={4} value={formData.e_money_pin.replace(/[^0-9/]/g, '')} onChange={handleChange} name="pin" id="pin" placeholder="6891" />
                    </div>
                  </div>
                </fieldset>
              </form>
            </section>
            <section className="summary">
              <h2>summary</h2>
              <ul>
                {
                  products && products.map((product) => (
                    <li>
                      <div className="details">
                        <Image src={`/assets/cart/image-${product.imagePath}.jpg`} alt="" width={64} height={64} />
                        <div className="price">
                          <p className="name">{product.name}</p>
                          <span>$ {product.price}</span>
                        </div>
                      </div>
                      <div className="amount">
                        <span>x{product.quantity}</span>
                      </div>
                    </li>
                  ))
                }
              </ul>
              
              <div className="total">
                <p>total <span>$ {ProductsTotalPrice.toLocaleString("en", { minimumFractionDigits: 0 })}</span></p>
              </div>

              <div className="shipping">
                <p>shipping <span>$ {shipping.toLocaleString("en", { minimumFractionDigits: 0 })}</span></p>
              </div>

              <div className="vat">
                <p>vat (included) <span>$ {vat.toLocaleString("en", { minimumFractionDigits: 0 })}</span></p>
              </div>

              <div className="grand-total">
                <p>grand total <span>$ {grandTotal.toLocaleString("en", { minimumFractionDigits: 0 })}</span></p>
              </div>

              <button aria-label={isFormValid ? "Click to pay and continue!" : "fill in all inputs and make sure you have items in your cart"} onClick={isFormValid ? handleClickOpenModal : undefined} className={isFormValid ? "" : "disabled"}>continue & pay</button>
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