import { createGlobalStyle } from "styled-components";
import { almostWhite, hoverBtnMain, almostBlack, black, darkOrange, lightOrange, white } from "./colors";

export const MainStyled = createGlobalStyle`
main {
  color: ${white};
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .hero-image {
    background: ${almostBlack};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  
    .content {
      max-width: 90rem;
      width: 100%;
      padding: 1.875rem 10.3125rem;
      display: grid;
      grid-template-columns: 50% 50%;
      height: 39.5rem;
      place-content: center;
      background: url("./assets/home/desktop/image-hero.jpg") no-repeat;
      background-size: 100% 115%;
      background-position: 0rem -5.9375rem;
  
      .col1 {
        max-width: 24.875rem;
        display: flex;
        flex-direction: column;
        gap: 3.125rem;
  
        h1 {
          font-weight: 700;
          font-size: 3.5rem;
          line-height: 3.625rem;
          letter-spacing: 0.125rem;
          text-transform: uppercase;
          position: relative;
          bottom: 0.6875rem;
        }
  
        h2 {
          font-weight: 400;
          font-size: 0.875rem;
          line-height: 1.1875rem;
          letter-spacing: 0.625rem;
          text-transform: uppercase;
          opacity: 0.5;
          mix-blend-mode: normal;
          position: relative;
          bottom: -0.875rem;
        }
  
  
        p {
          position: relative;
          bottom: 2.125rem;
          max-width: 21.8125rem; 
          font-weight: 500;
          font-size: 0.9375rem;
          line-height: 1.5625rem;
          mix-blend-mode: normal;
          opacity: 0.75;
        }

        a {
          display: grid;
          place-content: center;
          width: 10rem;
          height: 3rem;
          font-weight: 700;
          font-size: 0.8125rem;
          line-height: 1.125rem;
          letter-spacing: 0.0625rem;
          text-decoration: none;
          text-transform: uppercase;
          outline: transparent;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          position: relative;
          bottom: 2.875rem;
          background-color: ${darkOrange};
          border: unset;
          color: ${white};

          &:hover {
            background-color: ${lightOrange} !important;
          }

          &:focus {
            background-color: ${lightOrange};
            outline: 0.1625rem dotted ${white};
          }
        }
      }
    }
  }
  .container {
    max-width: 90rem;
    width: 100%;
    padding: 12.5rem 10.3125rem 0rem 10.3125rem;
  
    .grid-items {
      margin-top: 10.5rem;
      display: grid;
      grid-template-rows: 35rem 20rem 20rem;    
      gap: 3rem;
  
      .zx9-speaker {
        grid-column: 1;
        display: flex;
        border-radius: 0.5rem;
        align-items: center;
        justify-content: space-evenly;
        overflow: hidden;
        background: url("./assets/home/desktop/pattern-circles.svg") no-repeat ${darkOrange};
        background-position: -9rem -1.875rem;
  
        img {
          position: relative;
          bottom: -4.375rem;
          left: 0.6875rem;
        }
  
        .text {
          max-width: 21.8125rem;
          display: flex;
          flex-direction: column;
          gap: 2.1875rem;
          position: relative;
          left: -3.9375rem;
          
          h2 {
            font-weight: 700;
            font-size: 3.5rem;
            line-height: 3.625rem;
            letter-spacing: 0.125rem;
            text-transform: uppercase;
          }
    
          p {
            font-weight: 500;
            font-size: 0.9375rem;
            line-height: 1.5625rem;
            color: #FFFFFF;
            mix-blend-mode: normal;
            opacity: 0.75;
          }

          a {
            display: grid;
            place-content: center;
            width: 10rem;
            height: 3rem;
            font-weight: 700;
            font-size: 0.8125rem;
            line-height: 1.125rem;
            letter-spacing: 0.0625rem;
            text-decoration: none;
            text-transform: uppercase;
            outline: transparent;
            cursor: pointer;
            transition: 0.2s ease-in-out;
            background-color: ${black};
            border: unset;
            color: ${white};
  
            &:hover {
              background-color: ${hoverBtnMain} !important;
            }
  
            &:focus {
              background-color: ${hoverBtnMain};
              outline: 0.1625rem dotted ${black};
            }
          }
        }
      }
  
      .zx7-speaker {
        background: url("./assets/home/desktop/image-speaker-zx7.jpg") no-repeat;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-radius: 0.5rem;
      }
  
      .text {
        padding-left: 6rem;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
  
        h3 {
          font-weight: 700;
          font-size: 1.75rem;
          line-height: 2.375rem;
          letter-spacing: 0.125rem;
          text-transform: uppercase;
          color: #000000;
        }
      }
  
      .yx1-earphones {
        display: grid;
        grid-template-columns: 50% 50%;
        place-content: center;
  
        img {
          border-radius: 0.5rem;
        }
  
        .text {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          border-radius: 0.5rem;
          background: ${almostWhite};
        }
      }

      .zx7-speaker,
      .yx1-earphones {
        a {
          display: grid;
          place-content: center;
          width: 10rem;
          height: 3rem;
          font-weight: 700;
          font-size: 0.8125rem;
          line-height: 1.125rem;
          letter-spacing: 0.0625rem;
          text-decoration: none;
          text-transform: uppercase;
          outline: transparent;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          background-color: transparent;
          border: 0.0625rem solid ${black};
          color: ${black};

          &:hover {
            background-color: ${black} !important;
            color: ${white};
          }

          &:focus {
            background-color: ${black};
            outline: 0.1625rem dotted ${black};
            color: ${white};
          }
        }
      }
    }
    .info {
      display: grid;
      grid-template-columns: 50% 50%;
      place-content: center;
      margin: 12.5rem 0rem;

      img {
        border-radius: 0.5rem;
        position: relative;
        left: 16px;
      }

      .text-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 27.8125rem;
        gap: 2.4375rem;

        h3 {
          font-weight: 700;
          font-size: 2.5rem;
          line-height: 2.75rem;
          letter-spacing: 0.0893rem;
          text-transform: uppercase;
          color: ${black};
          span {
            color: ${darkOrange};
          }
        }

        p {
          font-weight: 500;
          font-size: 0.9375rem;
          line-height: 1.5625rem;
          color: ${black};
          mix-blend-mode: normal;
          opacity: 0.5;
        }
      }
    }
  }
}

@media(max-width: 71.75rem) {
  main {
    .container {
      padding: 7.5rem 3.75rem 1.875rem 3.75rem;
      ul {
        li {
          padding: 0px !Important;
        }
      }
    }
  }
  
  main {
    .content {
      padding: 1.875rem 3.75rem !important;
      background-size: 103% 100% !important;
      background-position: 3.5rem -4.0625rem !important;
    } 
  }

  main {
    .zx9-speaker {
      .text {
        position: initial !Important; 
        padding: 0rem !important;
      }
    }
  }
} 

@media (max-width: 30rem) {
  h3 {
    font-size: 1.75rem !Important;
    line-height: 2.375rem !Important;
  }
}

// tablet
@media (max-width: 51.75rem) {
  .info {
    margin: 6rem 0rem;
    display: flex !Important;
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;  
    gap: 1.25rem; 
    img {
      position: initial !Important;
    }
  }
  main {
    .content {
      display: flex !Important;
      align-items: center;
      justify-content: center;
      background: url("./assets/home/tablet/image-hero.jpg") no-repeat !Important;
      background-size: 660px 100% !Important;
      padding: 1.875rem 3.75rem !important;
      background-position: center -4.375rem !Important;
      
      .col1 {
        align-items: center;
        text-align: center;
      }
    }

    .container {
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

    .grid-items {
      grid-template-rows: 45rem 20rem auto !Important;    
  
      .zx9-speaker {
        flex-direction: column;
        background-position: center -17.5rem !Important;
    
        img {
          width: 12.3125rem;
          height: 14.8125rem;
          position: initial !Important;   
        }
        .text {
          align-items: center;
          text-align: center;
        }
      }
  
      .zx7-speaker {
        background: url("./assets/home/tablet/image-speaker-zx7.jpg") no-repeat 100% !Important;
        .text {
          padding-left: 3.875rem;
        }
      }
      .yx1-earphones {
        .text {
          padding-left: 2.5rem;
        }
      }
    }
  }
}

// mobile
@media (max-width: 36.5rem) {
  .info {
    h3 {
      font-size: 1.75rem !Important;
      line-height: 2.375rem !Important;
    }
  }
  main {
    .content {
      height: 31.875rem !Important;
      padding: 0rem 1.25rem 1.875rem 1.25rem !Important;
      background-position: center -3.375rem !Important; 
      .wrapper {
        width: 100%;
        justify-content: space-between !Important;
      }
      .col1 {
        h1 {
          font-size: 2.25rem !Important;
          line-height: 2.5rem !Important;
        }
      }
    }
    .container {
      padding: 7.5rem 1.25rem 1.875rem 1.25rem;
      ul {
        gap: 3.75rem;
        a {
          height: 10.3125rem;
        }
        .img {
          top: -2.8125rem;
          width: auto;
          height: 9rem;
        }
        p {
          font-size: 0.9375rem !Important;
          line-height: 1.25rem !Important;
        }
      }
    }
  }
  main {
    .grid-items {
      margin-top: 7.5rem !Important;
      grid-template-rows: 37.5rem 20rem auto !Important; 
      .yx1-earphones {
        display: flex !important;
        flex-wrap: wrap;
        gap: 1.25rem;
    
        .text {
          padding: 2.5625rem !Important;
          width: 100%;
        }
      }
      .zx9-speaker {
        background-position: center -8.4375rem !Important;
        background-size: 45rem !Important;
        h2 {
          font-size: 2.25rem !Important;
          line-height: 2.5rem !Important;
        }
      }
      .zx7-speaker {
        background: url("/assets/home/mobile/image-speaker-zx7.jpg") no-repeat !Important;
        background-size: 100% 100%;
        background-position: right !Important;
      }
    }
  }
}

@media (max-width: 470px) {
  main {
    .content {
      background: url("./assets/home/mobile/image-hero.jpg") no-repeat !Important;
      background-position: center -5rem !important;
      background-size: 100% 110% !Important;
    }
  }
}`