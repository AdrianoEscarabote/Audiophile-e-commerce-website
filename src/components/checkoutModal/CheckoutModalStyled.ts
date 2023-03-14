import { almostWhite, black, darkOrange, white } from "@/styles/colors";
import styled from "styled-components";

const CheckoutModalStyled = styled.div`
background: #1d1d1d93;
width: 100%;
min-height: 100vh;
position: absolute;
top: 90px;
left: 0px;
display: flex;
align-items: center;
justify-content: center;
z-index: 100;

section {
  z-index: 200;
  background: ${white};
  border-radius: 8px;
  width: 540px;
  height: 581px;
  padding: 48px;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 33px 0px 24px 0px;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14286px;
    text-transform: uppercase;
    color: ${black};
    display: flex;
    flex-direction: column;
  }
  p {
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: ${black};
    mix-blend-mode: normal;
  }
  .wrapper-order {
    margin-top: 33px;
    display: grid;
    grid-template-columns: 56% 44%;
    height: 140px;
    border-radius: 8px;
    overflow: hidden;

    .col1 {
      padding: 24px;
      background: ${almostWhite};

      .item {
        padding-bottom: 12px;
        border-bottom: 0.2px solid ${black};
        display: flex;
        justify-content: space-between;

        .details {
          display: flex;
          gap: 10px;
          
          p {
            display: flex;
            flex-direction: column;
            font-weight: 700;
            font-size: 15px;
            line-height: 25px;            
            color: ${black};
          }
        }
      }
      .amout-itens {
        margin-top: 14px;
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
        font-size: 15px;
        line-height: 25px;
        color: ${white};
        text-transform: uppercase;

        span {
          font-weight: 700;
          font-size: 18px;
          line-height: 25px;
          text-align: right;
          color: ${white};
        }
      }
    }
  }

  a {
    margin-top: 46px;
    display: grid;
    place-content: center;
    width: 100%;
    max-width: 444px;
    height: 48px;
    background: ${darkOrange};
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #FFFFFF;
    text-decoration: none;
    opacity: 1 !important;
  }
}

@media (max-width: 580px) {
  padding: 0px 10px;
  section {
    height: auto;

    .wrapper-order {
      height: auto !Important;
      display: flex !important;
      flex-direction: column;

      .col2 {
        padding: 15px;
        justify-content: flex-start;
      }
    }
    a {
      margin-top: 20px;
    }
    h2 {
      margin: 20px 0px 16px 0px;
    }
  }
}

` 

export default CheckoutModalStyled;