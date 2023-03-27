import styled from "styled-components";
import { almostBlack, almostWhite, darkOrange, lightOrange, white } from "./colors";

const ProductDetailStyled = styled.main`
display: flex;
align-items: center;
justify-content: center;

.container {
  max-width: 90rem;
  width: 100%;
  padding: 3.75rem 10.3125rem 1.875rem 10.3125rem;

  .back {
    font-weight: 500;
    font-size: 0.9375rem;
    line-height: 1.5625rem;
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
    margin-top: 3.5rem;

    .text {
      justify-self: flex-end;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.25rem;
      max-width: 27.8125rem;
      

      h2 {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.1875rem;
        letter-spacing: 0.625rem;
        text-transform: uppercase;
        color: #D87D4A;
      }

      h1 {
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 2.75rem;
        letter-spacing: 0.0893rem;
        text-transform: uppercase;
        color: #000000;
      }

      p {
        font-weight: 500;
        font-size: 0.9375rem;
        line-height: 1.5625rem;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
      }

      .price {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.5625rem;
        letter-spacing: 0.0804rem;
        text-transform: uppercase;
        color: #000000;
      }

      .wrapper {
        display: flex;
        align-items: center;
        gap: 1.25rem;

        .container-button {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 7.5rem;
          height: 3rem;
          background: ${almostWhite};

          button {
            cursor: pointer;
            width: 1rem;
            heihgt: 1.125rem;
            background: transparent;
            border: transparent;
            height: auto;

            &:hover {
              color: ${darkOrange};
            }

            &:focus {
              color: ${darkOrange};
              outline: 0.125rem dotted ${almostBlack};
            }
          }
        }

        .add {
          background: ${darkOrange};
          font-weight: 700;
          font-size: 0.8125rem;
          line-height: 1.125rem;
          letter-spacing: 0.0625rem;
          text-decoration: none;
          text-transform: uppercase;
          color: ${white};
          outline: transparent;
          border: transparent;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          max-width: 10rem;
          width: 100%;
          height: 3rem;

          &:hover {
            background: ${lightOrange};
          }

          &:focus {
            border: 0.1625rem dotted ${almostBlack};
            background: ${lightOrange};
          }
        }
      }
    }
  }

  .details {
    margin-top: 10.0625rem;
    display: flex;
    align-items: flex-start;

    h3 {
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.25rem;
      letter-spacing: 0.0714rem;
      text-transform: uppercase;
      color: #000000;
    }

    .features {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 1.875rem;
      max-width: 39.6875rem;

      p {
        font-weight: 500;
        font-size: 0.9375rem;
        line-height: 1.5625rem;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
      }
    }

    .list-box {
      padding-left: 7.8125rem;
      ul {
        margin-top: 1.875rem;
        display: flex;
        flex-direction: column;
        gap: 0.9375rem;

        li {
          p {
            display: flex;
            gap: 0.625rem;
            span {
              font-weight: 700;
              font-size: 0.9375rem;
              line-height: 1.5625rem;
              color: #D87D4A;
            }

            font-weight: 500;
            font-size: 0.9375rem;
            line-height: 1.5625rem;
            color: #000000;
            mix-blend-mode: normal;
            opacity: 0.7;
          }
        }
      }
    }
  }

  ul {
    margin-top: 10rem;
  }
}

@media (min-width: 59.25rem) {
  .image {
    width: 33.75rem;
    height: 35rem;
    overflow: hidden;
    img {
      &:hover {
        transition: 0.8s ease-in-out;
        transform: scale(110%);
      }
    }
  }
}

@media(max-width: 78.5rem) {
  .container {
    padding: 3.75rem 3.75rem 1.875rem 3.75rem;
  }
  .details {
    display: flex !Important;
    flex-direction: column;
    gap: 7.5rem;
    .features {
      max-width: unset !important;
    }

    .list-box {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 0rem !important;
       
      ul {
        margin: 0rem !Important;
        padding-right: 7.5rem;
        align-items: flex-start;
      }
    }
  }
  ul {
    gap: 5.625rem;
    flex-wrap: wrap;
    margin: 0 auto;

    li {
      display: flex;
      justify-content: center;
    }

    a {
      margin: 0rem !important;
    }
  }
  .grid-items {
    .text {
      max-width: 21.1875rem !Important;
    }
  }
}


// tablet
@media (max-width: 51.75rem) {
  .container {
    padding: 2.5rem 3.75rem 1.875rem 3.75rem;
  }
  .grid-items {
    img {
      width: 17.5rem !important;
    }
  }
}

// mobile
@media (max-width: 42.75rem) {
  .features {
    position: relative;
    top: -3.125rem;
  }
  .grid-items {
    display: flex !important;
    flex-direction: column;
    gap: 2.5rem;

    h1 {
      font-size: 1.75rem !important;
      line-height: 2.375rem !important;
    }

    img {
      width: 100% !important;
      height: auto;
    }

    .text {
      max-width: 100% !Important;
    }
  }


  .details {
    gap: 5.5rem;

    h3 {
      font-size: 1.5rem !important;
      line-height: 2.25rem !important;
    }

    .list-box {
      flex-direction: column;
      gap: 1.5rem;
      ul {
        padding: 0rem !important;
      }
    }
  }
}

@media (max-width: 32.5rem) {
  .container {
    padding: 1.875rem 1.25rem !important;
  }
}`

export default ProductDetailStyled;