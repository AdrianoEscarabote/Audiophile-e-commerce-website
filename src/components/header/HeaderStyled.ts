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
    .list-mobile-closed {
      display: none;
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
  .list-mobile {
    display: block;
    position: absolute;
    left: 0px;
    bottom: -260px;
    width: 100%;
    background: ${white};
  }
}

// mobile
@media (max-width: 584px) {
  .container {
    padding: 30px 20px;
  }
}
`