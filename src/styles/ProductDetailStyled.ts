import styled from "styled-components";
import { almostBlack, almostWhite, darkOrange, lightOrange, white } from "./colors";

const ProductDetailStyled = styled.main`
display: flex;
align-items: center;
justify-content: center;

.container {
  max-width: 1440px;
  width: 100%;
  padding: 60px 165px 30px 165px;

  .back {
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.7;
    text-decoration: none;

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }

  .grid-items {
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 56px;

    .text {
      justify-self: flex-end;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      max-width: 445px;
      

      h2 {
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 10px;
        text-transform: uppercase;
        color: #D87D4A;
      }

      h1 {
        font-weight: 700;
        font-size: 40px;
        line-height: 44px;
        letter-spacing: 1.42857px;
        text-transform: uppercase;
        color: #000000;
      }

      p {
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
      }

      .price {
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 1.28571px;
        text-transform: uppercase;
        color: #000000;
      }

      .wrapper {
        display: flex;
        align-items: center;
        gap: 20px;

        .container-button {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 120px;
          height: 48px;
          background: ${almostWhite};

          button {
            cursor: pointer;
            width: 16px;
            heihgt: 18px;
            background: transparent;
            border: transparent;
            height: auto;

            &:hover {
              color: ${darkOrange};
            }

            &:focus {
              color: ${darkOrange};
              outline: 2px dotted ${almostBlack};
            }
          }
        }

        .add {
          background: ${darkOrange};
          font-weight: 700;
          font-size: 13px;
          line-height: 18px;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: uppercase;
          color: ${white};
          outline: transparent;
          border: transparent;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          max-width: 160px;
          width: 100%;
          height: 48px;

          &:hover {
            background: ${lightOrange};
          }

          &:focus {
            border: 2.6px dotted ${almostBlack};
            background: ${lightOrange};
          }
        }
      }
    }
  }

  .details {
    margin-top: 161px;
    display: flex;
    align-items: flex-start;

    h3 {
      font-weight: 700;
      font-size: 32px;
      line-height: 36px;
      letter-spacing: 1.14286px;
      text-transform: uppercase;
      color: #000000;
    }

    .features {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 30px;
      max-width: 635px;

      p {
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
      }
    }

    .list-box {
      padding-left: 125px;
      ul {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 15px;

        li {
          p {
            display: flex;
            gap: 10px;
            span {
              font-weight: 700;
              font-size: 15px;
              line-height: 25px;
              color: #D87D4A;
            }

            font-weight: 500;
            font-size: 15px;
            line-height: 25px;
            color: #000000;
            mix-blend-mode: normal;
            opacity: 0.7;
          }
        }
      }
    }
  }

  ul {
    margin-top: 160px;
  }
}

@media(max-width: 1148px) {

}

// tablet
@media (max-width: 828px) {
  
}

// mobile
@media (max-width: 584px) {
  
}
`

export default ProductDetailStyled;