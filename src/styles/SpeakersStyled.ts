import styled from "styled-components";
import { almostBlack, black } from "./colors";
 
const SpeakersStyled = styled.main`
display: flex;
align-items: center;
flex-direction: column;

.wrapper {
  background: ${almostBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 6.25rem 0rem;

  h1 {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 2.75rem;
    text-align: center;
    letter-spacing: 0.0893rem;
    text-transform: uppercase;
    color: #FFFFFF;
  }
}

.container {
  max-width: 90rem;
  width: 100%;
  padding: 7.5rem 10.3125rem 1.875rem 10.3125rem;


  .zx9,
  .zx7 {
    display: flex;
    justify-content: space-between;
    
    .text {
      display: flex;
      max-width: 27.8125rem;
      flex-direction: column;
      justify-content: center;
      gap: 1.25rem;

      span {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.1875rem;
        letter-spacing: 0.625rem;
        text-transform: uppercase;
        color: #D87D4A;
      }

      h2 {
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 2.75rem;
        letter-spacing: 0.0893rem;
        text-transform: uppercase;
        color: ${black};
      }
      p {
        font-weight: 500;
        font-size: 0.9375rem;
        line-height: 1.5625rem;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
      }
    }
  }
  .zx7 {
    margin-top: 10rem;
    margin-bottom: 14.625rem;
  }
}

@media(max-width: 84.25rem) {
  .container {
    padding: 7.5rem 3.75rem 1.875rem 3.75rem !Important;

    .headphones {
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
  .zx9 {
    width: 100%;
    align-items: center;
    display: flex !Important;
    flex-direction: column;
    margin-top: 7.5rem;
  }
  .zx7 {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
  }
  .zx7,
  .zx9 {
    gap: 2.125rem;
    img {
      width: 100% !Important;
      height: 22rem !Important;
    }
  }
  .text {
    text-align: center;
    align-items: center;
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

  .text {
    h2 {
      font-size: 1.75rem !important;
      line-height: 2.375rem !important;
    }
  }
}`

export default SpeakersStyled;