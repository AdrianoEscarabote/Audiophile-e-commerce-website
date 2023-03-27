import styled from "styled-components";
import { almostWhite, black, darkOrange, lightOrange, white } from "./colors";

const CheckoutStyled = styled.main`
display: flex;
background: ${almostWhite};
justify-content: center;

.container {
  width: 100%;
  max-width: 90rem;
  padding: 2.5rem 10.3125rem;

  a {
    font-weight: 500;
    font-size: 0.9375rem;
    line-height: 1.5625rem;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
  }

  input {
    cursor: pointer;
    &:hover {
      border: 1px solid ${darkOrange} !important;
    }
  }

  .wrapper {
    margin-top: 2.375rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    .checkout {
      padding: 3.375rem 3rem;
      background: ${white};
      max-width: 45.625rem;
      border-radius: 0.5rem;
  
      h1 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.25rem;
        letter-spacing: 0.0714rem;
        text-transform: uppercase;
        color: ${black};
      }

      form {
        fieldset {
          border: transparent;

          h2 {
            font-weight: 700;
            font-size: 0.8125rem;
            line-height: 1.5625rem;
            letter-spacing: 0.058rem;
            text-transform: uppercase;
            color: ${darkOrange};
            padding-bottom: 1.5rem;
          }

          .wrapper-billing,
          .wrapper-shipping {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-bottom: 3.375rem;
            
            .wrapper-input {
              width: 100%;
              max-width: 19.3125rem;
              height: 5.0625rem;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              position: relative;

              span {
                position: absolute;
                right: 0.625rem;
                font-weight: 500;
                font-size: 0.75rem;
                line-height: 1rem;
                text-align: right;
                letter-spacing: -0.0134rem;
                color: #CD2C2C;
              } 

              label {
                font-weight: 700;
                font-size: 0.75rem;
                line-height: 1rem;
                letter-spacing: -0.0134rem;
                color: #000000;
              }

              input {
                height: 3.5rem;
                border: 0.0625rem solid #CFCFCF;
                border-radius: 0.5rem;
                padding-left: 1.5625rem;
              }
            }
          }

          .wrapper-payment {
            display: grid;
            grid-template-columns: 50% 50%;

            .text {
              p {
                font-weight: 700;
                font-size: 0.75rem;
                line-height: 1rem;
                letter-spacing: -0.0134rem;
                color: ${black};
              }
            }
            .labels {
              display: flex;
              flex-direction: column;
              gap: 1rem;

              label {
                cursor: pointer;
                width: 100%;
                padding: 1rem;
                border: 0.0625rem solid #CFCFCF;
                border-radius: 0.5rem;
                display: flex;
                gap: 1rem;
              }
            }
          }
          .wrapper-money {
            display: flex;
            gap: 1rem;

            .wrapper-input {
              margin-top: 1.5rem;
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height: 5.0625rem;
              position: relative;

              span {
                position: absolute;
                right: 0.625rem;
                font-weight: 500;
                font-size: 0.75rem;
                line-height: 1rem;
                text-align: right;
                letter-spacing: -0.0134rem;
                color: #CD2C2C;
              } 

              label {
                font-weight: 700;
                font-size: 0.75rem;
                line-height: 1rem;
                letter-spacing: -0.0134rem;
                color: #000000;
              }

              input {
                height: 3.5rem;
                border: 0.0625rem solid #CFCFCF;
                border-radius: 0.5rem;
                padding-left: 1.5625rem;
              }
            }
          }
        }
      }
    }

    .summary {
      background: ${white};
      border-radius: 0.5rem;
      max-width: 21.875rem;
      height: auto;
      width: 100%;
      padding: 2rem 2.0625rem;

      h2 {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.5625rem;
        letter-spacing: 0.0804rem;
        text-transform: uppercase;
        color: ${black};
      }

      ul {
        display: flex;
        flex-direction: column;
        margin: 2rem 0rem;
        gap: 1.5rem;

        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .details {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 1rem;

            img {
              border-radius: 0.5rem;
            }

            .price {
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              .name {
                font-weight: 700;
                font-size: 0.9375rem;
                line-height: 1.5625rem;
                color: ${black};
              }

              span {
                font-weight: 700;
                font-size: 0.875rem;
                line-height: 1.5625rem;
                color: #000000;
                mix-blend-mode: normal;
                opacity: 0.7;
              }
            }
          }

          .amount {
            span {
              font-weight: 700;
              font-size: 0.9375rem;
              line-height: 1.5625rem;
              text-align: right;
              color: ${black};
              mix-blend-mode: normal;
              opacity: 0.5;
            }
          }
        }
      }

      .total,
      .shipping,
      .vat {
        margin-top: 0.5rem;
        p {
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-weight: 500;
          font-size: 0.9375rem;
          line-height: 1.5625rem;
          color: #1d1d1d93;
          text-transform: uppercase;

          span {
            font-weight: 700;
            font-size: 1.125rem;
            line-height: 1.5625rem;
            text-align: right;
            text-transform: uppercase;
            color: ${black};
          }
        }
      }
      .grand-total {
        margin: 1rem 0rem;
        p {
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-weight: 500;
          font-size: 0.9375rem;
          line-height: 1.5625rem;
          text-transform: uppercase;
          color: #1d1d1d93;

          span {
            font-weight: 700;
            font-size: 1.125rem;
            line-height: 1.5625rem;
            text-align: right;
            text-transform: uppercase;
            color: ${darkOrange};
          }
        }
      }

      button {
        width: 100%;
        max-width: 17.75rem;
        height: 3rem;
        background-color: ${darkOrange};
        font-weight: 700;
        font-size: 0.8125rem;
        line-height: 1.125rem;
        text-align: center;
        letter-spacing: 0.0625rem;
        text-transform: uppercase;
        color: ${white};
        border: none;
        outline: transparent;
        cursor: pointer;

        &:focus-visible {
          background-color: ${darkOrange} !important; 
        }

        &:focus {
          background-color: ${lightOrange} !important;
          border: 0.1625rem dotted ${black};
        }

        &:hover {
          background-color: ${lightOrange} !important;
        }
      }
    }
  }
}

.disabled {
  pointer-events: none;
  opacity: 0.4;
}

.list_countries {
  position: absolute;
  width: 100%;
  top: 6.25rem;
  background: ${almostWhite};
  color: ${black};
  border: 0.0625rem solid #00000054;
  border-radius: 0.5rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0.625rem 1.25rem;
  z-index: 100 !Important;
  height: 18.4375rem;
  overflow-y: scroll;

  li {
    button {
      border: unset;
      outline: transparent;
      font-weight: 500;
      font-size: 0.9375rem;
      line-height: 1.5625rem;
      cursor: pointer;

      &:focus {
        border: 0.1625rem solid ${black};
        border-radius: 0.5rem;
      } 

      &:hover,
      &:active {
        border: unset !important;
        text-decoration: underline;
      }
    }
  }

  &::-webkit-scrollbar {
    width: 12px;              
  }
  &::-webkit-scrollbar-track {
    background: transparent;        
  }
  &::-webkit-scrollbar-thumb {
    background: ${darkOrange};    
    &:hover {
      background: ${lightOrange};
    }
    border-radius: 1.25rem;    
  }
}

.marked {
  border: 0.0625rem solid #D87D4A !important;
}

.error_input {
  border: 2px solid #CD2C2C !important;
}

.empty-cart {
  font-size: 26px;
  font-weight: 700;
  color: #CD2C2C;
  margin-bottom: 20px;
}

.error-font {
  color: #CD2C2C !important;
}

@media (max-width: 88.625rem) {
  .wrapper {
    flex-direction: column;
    gap: 1.875rem;
  }
  .checkout {
    width: 100%;
    max-width: unset !important;
  }
  .summary {
    max-width: unset !Important;
    width: 100%;

    button {
      max-width: unset !Important;
    }
  }
}

@media (max-width: 71.75rem) {
  .container {
    padding: 2.5rem 3.75rem
  }
}

@media (max-width: 48rem) {
  .checkout,
  .summary {
    padding: 2rem 1.25rem !important;
  }
  .wrapper-billing,
  .wrapper-shipping {
    .wrapper-input {
      width: 100%;
      max-width: unset !important;
      input,
      label {
        width: 100%;
      }
    }
  }
  .wrapper-payment {
    display: flex !important;
    gap: 1.25rem;
    flex-direction: column;
  }
  .wrapper-money {
    flex-direction: column;
  }
}

@media (max-width: 36.5rem) {
  .container {
    padding: 1.875rem 1.25rem !important;
  }
}`

export default CheckoutStyled;