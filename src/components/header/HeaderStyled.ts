import styled from "styled-components";
// colors
import { almostBlack, black, darkOrange, white } from "../../styles/colors";

export const HeaderStyled = styled.header`
background: ${almostBlack};
width: 100%;
color: ${white};
display: flex;
align-items: center;
justify-content: center;

.container {
  padding: 2.1875rem 10.3125rem 0rem 10.3125rem;
  width: 100%;
  max-width: 90rem;
  position: relative;
  
  .content {
    position: relative;
    padding-bottom: 2.1875rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.0625rem solid #979797;

    nav {
      display: flex;
      width: 100%;
      justify-content: space-between;

      .wrapper-nav {
        display: flex;        
        gap: 34px;
        
        button {
          display: none;
        }
      }

      .list-desktop {
        display: flex;
        gap: 2.125rem;
        position: relative;
        top: -0.125rem;
        left: -3.775rem; 
        li {
          a {
            font-weight: 700;
            font-size: 0.8125rem;
            line-height: 1.5625rem;
            letter-spacing: 0.125rem;
            text-transform: uppercase;
            color: #FFFFFF;
            text-decoration: none;
            transition: 0.2s ease-in-out;

            &:hover {
              text-decoration: underline;
            }
            &:hover,
            &:focus {
              color: ${darkOrange};
            }
          }
        }
      }

      button {
        background: transparent;
        outline: transparent;
        border: transparent;
        cursor: pointer;
        position: relative;
  
        .product_count {
          background: ${darkOrange};
          border-radius: 50%;
          position: absolute;
          top: -0.625rem;
          right: -0.625rem;
          width: 90%;
          height: auto;
          font-size: 0.75rem;
        }
      
        &:hover,
        &:focus {
          img {
            filter: invert(56%) sepia(73%) saturate(391%) hue-rotate(336deg) brightness(86%) contrast(97%);
          }
        }
        &:focus {
          border: 0.0625rem dotted ${white};
        }
      }

      .list-mobile {
        height: 0rem;
        transition: 0.5s ease-in-out;
        display: none;

        ul {
          display: none;
          gap: 4.375rem;
        }
      }
    }
  }
}

.wrapper-cart {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 6.0625rem;
  left: 0rem;
  background: #1d1d1d93;
  z-index: 5 !important;
  display: flex;
  align-items: center;
  justify-content: center;

  .content-cart {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 90rem;
    background: transparent;
    padding: 0rem 10.3125rem;
  }
}

@media (max-width: 36.5rem) {
  .wrapper-cart {
    padding: 0 0.625rem !important;
  }
}

@media(max-width: 1148px) {
  .container {
    padding: 2.1875rem 3.75rem 0rem 3.75rem;
  }
  .list-desktop {
    position: initial !Important;
  }
}

// tablet
@media(max-width: 48rem) {
  .wrapper-nav {
    button {
      display: block !important;
      background: transparent;
      border: transparent;
      width: auto;
      img {
        filter: brightness(1000%);
      }
      &:focus {
        img {
          filter: invert(56%) sepia(73%) saturate(391%) hue-rotate(336deg) brightness(86%) contrast(97%);
        }
      }
      &:focus {
        border: 0.0625rem dotted ${white};
      }
    }
  }
  .wrapper-cart {
    top: 6rem !important;
  }
  .list-desktop {
    display: none !Important;
  }
}

// mobile menu
@media (min-width: 48rem) {
  .list-mobile.open {
    display: none !Important;
    ul {
      display: none !important;
    }
  }
}
@media(max-width: 768px) {
  .wrapper-cart {
    top: 5.6875rem !important;
  }
  .list-mobile.open {
    animation: mobileAnimation 0.9s ease-in-out;
    opacity: 1 !Important;
    height: 20.875rem !important;
    display: block !Important;
    position: absolute;
    left: 0rem;
    top: 5.625rem;
    width: 100%;
    padding: 5.625rem 1.25rem 1.875rem;
    background: ${white};
    visibility: visible !Important;
    z-index: 200;
    overflow-y: scroll;
    ul {
      display: flex !important;
     gap: 20px;
      li {
        a {
          height: 9.6875rem !important;
          img {
            top: -5rem;
          }
          p {
            gap: 0.75rem;
          }
        }
      }
    }
  }
  .wrapper-shadow {
    width: 100%;
    min-height: 100vh;
    position: absolute;
    background: #1d1d1d93;
    left: 0rem;
    top: 5.625rem;
    z-index: 20 !important;
  }
}

// mobile layout
@media (max-width: 36.5rem) {
  .container {
    padding: 1.875rem 1.25rem 0rem 1.25rem;
  }
  .wrapper-cart {
    .content-cart {
      padding: 0rem !Important;
    }
  }
  .list-mobile.open {
    height: 46.875rem !important;
    bottom: -45rem !Important;

    .shadow {
      width: 100%;
      height: 100vh;
      background: ${almostBlack};
      opacity: 0.6;
      position: absolute;
      z-index: 400;
    }

    ul {
      display: flex !important;
      flex-wrap: wrap;
      gap: 5.3125rem;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
    }
  }
}

@media (max-height: 52.5rem) and (max-width: 36.5rem) {
  .list-mobile.open {
    height: 100% !Important;
    padding-bottom: 8rem;
  }
}

@media (max-height:  47.5rem) {
  .list-mobile.open {
    padding-bottom: 8.75rem;
  }
}

@keyframes mobileAnimation {
  from {
    opacity: 0;
    transform: translateY(-25%);
  } to {
    transform: translateX(0%);
    opacity: 1;
  }
}`