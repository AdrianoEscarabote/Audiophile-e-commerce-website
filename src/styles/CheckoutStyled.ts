import styled from "styled-components";
import { almostWhite, black, darkOrange, white } from "./colors";

const CheckoutStyled = styled.main`
display: flex;
background: ${almostWhite};
justify-content: center;

.container {
  width: 100%;
  max-width: 1440px;
  padding: 40px 165px;

  a {
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
  }

  .wrapper {
    margin-top: 38px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    .checkout {
      padding: 54px 48px;
      background: ${white};
      max-width: 730px;
      border-radius: 8px;
  
      h1 {
        font-weight: 700;
        font-size: 32px;
        line-height: 36px;
        letter-spacing: 1.14286px;
        text-transform: uppercase;
        color: ${black};
      }

      form {
        fieldset {
          border: transparent;

          h2 {
            font-weight: 700;
            font-size: 13px;
            line-height: 25px;
            letter-spacing: 0.928571px;
            text-transform: uppercase;
            color: ${darkOrange};
            padding-bottom: 24px;
          }

          .wrapper-billing,
          .wrapper-shipping {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            margin-bottom: 54px;
            
            .wrapper-input {
              width: 100%;
              max-width: 309px;
              height: 81px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              label {
                font-weight: 700;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: -0.214286px;
                color: #000000;
              }

              input {
                height: 56px;
                border: 1px solid #CFCFCF;
                border-radius: 8px;
                padding-left: 25px;
              }
            }
          }

          .wrapper-payment {
            display: grid;
            grid-template-columns: 50% 50%;

            .text {
              p {
                font-weight: 700;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: -0.214286px;
                color: ${black};
              }
            }
            .labels {
              display: flex;
              flex-direction: column;
              gap: 16px;

              label {
                width: 100%;
                padding: 16px;
                border: 1px solid #CFCFCF;
                border-radius: 8px;
                display: flex;
                gap: 16px;
              }
            }
          }
          .wrapper-money {
            display: flex;
            gap: 16px;

            .wrapper-input {
              margin-top: 24px;
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height: 81px;


              label {
                font-weight: 700;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: -0.214286px;
                color: #000000;
              }

              input {
                height: 56px;
                border: 1px solid #CFCFCF;
                border-radius: 8px;
                padding-left: 25px;
              }
            }
          }
        }
      }
    }

    .summary {
      background: ${white};
      border-radius: 8px;
      max-width: 350px;
      height: auto;
      width: 100%;
      padding: 32px 33px;

      h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 1.28571px;
        text-transform: uppercase;
        color: ${black};
      }

      ul {
        display: flex;
        flex-direction: column;
        margin: 32px 0px;
        gap: 24px;

        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .details {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 16px;

            img {
              border-radius: 8px;
            }

            .price {
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              .name {
                font-weight: 700;
                font-size: 15px;
                line-height: 25px;
                color: ${black};
              }

              span {
                font-weight: 700;
                font-size: 14px;
                line-height: 25px;
                color: #000000;
                mix-blend-mode: normal;
                opacity: 0.7;
              }
            }
          }

          .amount {
            span {
              font-weight: 700;
              font-size: 15px;
              line-height: 25px;
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
        margin-top: 8px;
        p {
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-weight: 500;
          font-size: 15px;
          line-height: 25px;
          color: #1d1d1d93;
          text-transform: uppercase;

          span {
            font-weight: 700;
            font-size: 18px;
            line-height: 25px;
            text-align: right;
            text-transform: uppercase;
            color: ${black};
          }
        }
      }
      .grand-total {
        margin: 16px 0px;
        p {
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-weight: 500;
          font-size: 15px;
          line-height: 25px;
          text-transform: uppercase;
          color: #1d1d1d93;

          span {
            font-weight: 700;
            font-size: 18px;
            line-height: 25px;
            text-align: right;
            text-transform: uppercase;
            color: ${darkOrange};
          }
        }
      }

      button {
        width: 100%;
        max-width: 284px;
        height: 48px;
        background: ${darkOrange};
        font-weight: 700;
        font-size: 13px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: ${white};
        border: none;
        outline: transparent;
        cursor: pointer;
      }
    }
  }
}

@media (max-width: 1418px) {
  .wrapper {
    flex-direction: column;
    gap: 30px;
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

@media (max-width: 1148px) {
  .container {
    padding: 40px 60px
  }
}

@media (max-width: 768px) {
  .checkout,
  .summary {
    padding: 32px 20px !important;
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
    gap: 20px;
    flex-direction: column;
  }
  .wrapper-money {
    flex-direction: column;

  }
}

@media (max-width: 584px) {
  .container {
    padding: 30px 20px !important;
  }
}
`

export default CheckoutStyled;