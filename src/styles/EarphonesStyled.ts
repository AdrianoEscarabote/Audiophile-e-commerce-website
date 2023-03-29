import styled from "styled-components";
// colors
import { almostBlack, black, darkOrange, white } from "./colors";

const EarphonesStyled = styled.main`
display: flex;
flex-direction: column;
align-items: center;

.wrapper {
  background: ${almostBlack};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6.25rem 0rem;

  h1 {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 2.75rem;
    text-align: center;
    letter-spacing: 0.0893rem;
    text-transform: uppercase;
    color: ${white};
  }
}

.container {
  max-width: 90rem;
  width: 100%;
  padding: 7.5rem 10.3125rem 1.875rem 10.3125rem;

  .preview-product {
    display: flex;
    justify-content: space-between;
    margin: 2.5rem 0rem 14.625rem 0rem;

    img {
      border-radius: 0.5rem;
      object-fit: cover;
    }

    .text-product {
      max-width: 27.8125rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      max-width: 27.8125rem;
      gap: 1.25rem;
      span {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.1875rem;
        letter-spacing: 0.625rem;
        text-transform: uppercase;
        color: ${darkOrange};
      }
      h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 2.75rem;
        letter-spacing: 0.0893rem;
        text-transform: uppercase;
        color: ${black};
      }
      p {
        margin: 0.625rem 0rem;
        font-weight: 500;
        font-size: 0.9375rem;
        line-height: 1.5625rem;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
      }
    }
  }
}

@media(max-width: 84.25rem) {
  .container {
    padding: 7.5rem 3.75rem 1.875rem 3.75rem !Important;

    .preview-product {
      img {
        width: 27.5rem;
        height: 28.75rem;
      }
      .text {
        padding: 0rem 0.625rem;
      }
    }
  }
}

// tablet
@media (max-width: 62.5rem) {
  .container {
    padding: 0rem 3.75rem 1.875rem 3.75rem !Important;
  }

  .preview-product  {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    
    img {
      width: 100% !Important;
      height: 22rem !Important;
    }
  
    .text-product {
      padding: 0rem !important;
      text-align: center;
      align-items: center !Important;
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
}

// mobile
@media (max-width: 36.5rem) {
  .container {
    padding: 0rem 1.25rem 1.875rem 1.25rem !Important;
  }

  .wrapper {
    height: 6.375rem !important; 
    padding: 0rem !Important;

    h1 {
      font-size: 1.75rem;
      line-height: 2.375rem;
    }
  }

  .text-product {
    h2 {
      font-size: 1.75rem !important;
      line-height: 2.375rem !important;
    }
  }
}`

export default EarphonesStyled;