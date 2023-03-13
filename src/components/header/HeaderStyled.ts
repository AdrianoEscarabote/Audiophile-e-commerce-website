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
  padding: 35px 165px 0px 165px;
  width: 100%;
  max-width: 1440px;
  position: relative;
  
  .content {
    position: relative;
    padding-bottom: 35px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #979797;

    .wrapper {
      display: flex;
      gap: 34px;
      button {
        display: none;
      }
    }

    nav {
      ul {
        display: flex;
        gap: 34px;
        li {
          a {
            font-weight: 700;
            font-size: 13px;
            line-height: 25px;
            letter-spacing: 2px;
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

      div {
        height: 0px;
        transition: 0.5s ease-in-out;
        display: none;

        ul {
          display: none;
        }
      }
    }
    button {
      background: transparent;
      outline: transparent;
      border: transparent;
      cursor: pointer;
      position: relative;

      span {
        background: ${darkOrange};
        border-radius: 50%;
        position: absolute;
        top: -10px;
        right: -10px;
        width: 90%;
        height: auto;
        font-size: 12px;
      }
    
      &:hover,
      &:focus {
        img {
          filter: invert(56%) sepia(73%) saturate(391%) hue-rotate(336deg) brightness(86%) contrast(97%);
        }
      }
      &:focus {
        border: 1px dotted ${white};
      }
    }
  }
}

.wrapper-cart {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 97px;
  left: 0px;
  background: #1d1d1d93;
  z-index: 5 !important;
  display: flex;
  align-items: center;
  justify-content: center;

  .content-cart {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 1440px;
    background: transparent;
    padding: 0px 165px;
  }
}

@media(max-width: 1148px) {
  .container {
    padding: 35px 60px 0px 60px;
  }
}

// tablet
@media(max-width: 768px) {
  .wrapper {
    button {
      display: block !important;
      img {
        filter: brightness(1000%);
      }
    }
  }
  .list-desktop {
    display: none !Important;
  }
}

@media(max-width: 768px) {
  .list-mobile.open {
    animation: mobileAnimation 0.9s ease-in-out;
    opacity: 1 !Important;
    height: 334px !important;
    display: block !Important;
    position: absolute;
    left: 0px;
    bottom: -336px;
    width: 100%;
    padding: 100px 20px 30px;
    background: ${white};
    visibility: visible !Important;
    z-index: 200;
    ul {
      display: flex !important;
    }
  }
}

// mobile
@media (max-width: 584px) {
  .container {
    padding: 30px 20px;
  }

  .list-mobile.open {
    height: 750px !important;
    bottom: -720px !Important;

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

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
    }
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