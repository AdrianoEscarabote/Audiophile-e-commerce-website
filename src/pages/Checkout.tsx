import CheckoutModal from "@/components/checkoutModal/CheckoutModal";
import useCountries from "@/custom/useCountries";
import CheckoutStyled from "@/styles/CheckoutStyled";
import { Action, FormState, initialState } from "@/types/CheckOutPropsTypes";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ButtonHTMLAttributes, useEffect, useReducer, useRef, useState } from "react";


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
    }
  }





  const handleClickCountryName = (name: string) => {
    if (name)  {
      dispatch({ type: "SET_COUNTRY", payload: name})
      setCountriesListOpen(false)
    }
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
                      <span>{formData.errorMessageName}</span>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} id="name" placeholder="Alexel Ward" />
                    </div>

                    <div className="wrapper-input">
                      <label htmlFor="email">Email Address</label>
                      <span>{formData.errorMessageEmail}</span>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" placeholder="alexel@mail.com" />
                    </div>

                    <div className="wrapper-input">
                      <label htmlFor="phone">Phone</label>
                      <span>{formData.errorMessagePhone}</span>
                      <input type="text" name="phone" id="phone" value={formData.phone.replace(/[^0-9\s\(\)\-\+]/g, '')} onChange={handleChange} placeholder="+1 202-555-0136" />
                    </div>

                  </div>

                  <h2>shipping info</h2>

                  <div className="wrapper-shipping">
                    <div className="wrapper-input">
                      <label htmlFor="address">Address</label>
                      <span>{formData.errorMessageAddress}</span>
                      <input type="text" value={formData.address} onChange={handleChange} name="address" id="address" placeholder="1137 Williams Avenue" />
                    </div>

                    <div className="wrapper-input">
                      <label htmlFor="city">City</label>
                      <span>wrong format</span>
                      <input type="text" name="city" id="city" placeholder="New York" />
                    </div>

                    <div className="wrapper-input">
                      <label htmlFor="country">Country</label>
                      <span>{formData.errorMessageCountry}</span>
                      <input type="text" value={formData.country} onFocus={() => setCountriesListOpen(true)} onChange={handleChange} name="country" id="country" placeholder="United States" ref={inputRef} />
                      {
                        countriesListOpen && CountriesList ? (
                          <ul className="list_countries" ref={listRef}>
                            {
                              CountriesList.map((item, index) => (
                                <li key={index}>
                                  <button type="button" onClick={(ev) => handleClickCountryName(ev.currentTarget.innerText)}>
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
                        <span>wrong format</span>
                      <label htmlFor="e-money">
                        <input type="radio" name="e-money" id="e-money" />
                        <span>e-Money</span>
                      </label>
                      <span>wrong format</span>
                      <label htmlFor="cash">
                        <input type="radio" name="cash" id="cash" />
                        <span>Cash on Delivery</span>
                      </label>
                    </div>

                  </div>

                  <div className="wrapper-money">
                    <div className="wrapper-input">
                      <label htmlFor="number">e-Money Number</label>
                      <span>wrong format</span>
                      <input type="text" name="number" id="number" placeholder="238521993" />
                    </div>

                    <div className="wrapper-input">
                      <label htmlFor="pin">e-Money PIN</label>
                      <span>wrong format</span>
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