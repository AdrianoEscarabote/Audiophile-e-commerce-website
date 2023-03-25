import { almostWhite, black, darkOrange, lightOrange, white } from "@/styles/colors";
import styled from "styled-components";

const CheckoutModalStyled = styled.div`
background: #1d1d1d93;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
z-index: 100;

section {
  z-index: 200;
  background: ${white};
  border-radius: 0.5rem;
  width: 33.75rem;
  height: auto;
  padding: 3rem;
  position: relative;
  left: 0%;
  transform: translateX(-50%);
  transform: translateY(-0%);

  h2 {
    margin: 2.0625rem 0rem 1.5rem 0rem;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.25rem;
    letter-spacing: 0.0714rem;
    text-transform: uppercase;
    color: ${black};
    display: flex;
    flex-direction: column;
  }
  p {
    font-weight: 500;
    font-size: 0.9375rem;
    line-height: 1.5625rem;
    color: ${black};
    mix-blend-mode: normal;
  }
  .wrapper-order {
    margin-top: 2.0625rem;
    display: grid;
    grid-template-columns: 56% 44%;
    border-radius: 0.5rem;
    overflow: hidden;

    .col1 {
      padding: 1.5rem;
      background: ${almostWhite};

      .item {
        padding-bottom: 0.75rem;
        border-bottom: 0.0125rem solid ${black};
        display: flex;
        justify-content: space-between;

        .details {
          display: flex;
          gap: 0.625rem;
          
          p {
            display: flex;
            flex-direction: column;
            font-weight: 700;
            font-size: 0.9375rem;
            line-height: 1.5625rem;            
            color: ${black};
          }
        }
      }
      .amout-itens {
        margin-top: 0.875rem;
        text-align: center;
      }
    }

    .col2 {
      background: ${black};
      height: 100%;
      display: grid;
      place-content: center;
      p {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-weight: 500;
        font-size: 0.9375rem;
        line-height: 1.5625rem;
        color: ${white};
        text-transform: uppercase;

        span {
          font-weight: 700;
          font-size: 1.125rem;
          line-height: 1.5625rem;
          text-align: right;
          color: ${white};
        }
      }
    }
  }

  a {
    margin-top: 2.875rem;
    display: grid;
    place-content: center;
    width: 100%;
    max-width: 27.75rem;
    height: 3rem;
    background: ${darkOrange};
    font-weight: 700;
    font-size: 0.8125rem;
    line-height: 1.125rem;
    text-align: center;
    letter-spacing: 0.0625rem;
    text-transform: uppercase;
    color: #FFFFFF;
    text-decoration: none;
    opacity: 1 !important;

    &:focus-visible {
      background-color: ${darkOrange} !important; 
    }

    &:focus {
      background-color: ${lightOrange} !important;
    }

    &:hover {
      background-color: ${lightOrange} !important;
    }
  }
}

@media (max-width: 36.25rem) {
  padding: 0rem 0.625rem;
  section {
    height: auto;

    .wrapper-order {
      height: auto !Important;
      display: flex !important;
      flex-direction: column;

      .col2 {
        padding: 0.9375rem;
        justify-content: flex-start;
      }
    }
    a {
      margin-top: 1.25rem;
    }
    h2 {
      margin: 1.25rem 0rem 1rem 0rem;
    }
  }
}` 

export default CheckoutModalStyled;