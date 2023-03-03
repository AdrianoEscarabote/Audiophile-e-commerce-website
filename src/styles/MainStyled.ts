import styled from "styled-components";
import { almostBlack, darkOrange } from "./colors";
import { white } from "./colors";
import { black } from "./colors";
import { almostWhite } from "./colors";

export const MainStyled = styled.main`
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
    max-width: 1440px;
    width: 100%;
    padding: 30px 165px;
    display: grid;
    grid-template-columns: 50% 50%;
    height: 632px;
    place-content: center;

    .col1 {
      max-width: 398px;
      display: flex;
      flex-direction: column;
      gap: 24px;

      h1 {
        font-weight: 700;
        font-size: 56px;
        line-height: 58px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }

      h2 {
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 10px;
        text-transform: uppercase;
        opacity: 0.5;
        mix-blend-mode: normal;
      }


      p {
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        mix-blend-mode: normal;
        opacity: 0.75;
      }
      
      a {
        margin-top: 10px;
      }
    }
    .col2 {
      position: relative;
      z-index: 1;
      img {
        height: 100% !Important;
      }
    }
  }
}
.container {
  max-width: 1440px;
  width: 100%;
  padding: 120px 165px 30px 165px;

  .grid-items {
    margin-top: 161px;
    display: grid;
    grid-template-rows: 560px 320px 320px;    
    gap: 48px;

    .zx9-speaker {
      grid-column: 1;
      display: flex;
      border-radius: 8px;
      align-items: center;
      justify-content: space-evenly;
      overflow: hidden;
      background: url("./assets/home/desktop/pattern-circles.svg") no-repeat ${darkOrange};
      background-position: -170px 10px;

      img {
        position: relative;
        bottom: -45px;
      }

      .text {
        max-width: 349px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        
        h2 {
          font-weight: 700;
          font-size: 56px;
          line-height: 58px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
  
        p {
          font-weight: 500;
          font-size: 15px;
          line-height: 25px;
          color: #FFFFFF;
          mix-blend-mode: normal;
          opacity: 0.75;
        }
      }
    }

    .zx7-speaker {
      background: url("./assets/home/desktop/image-speaker-zx7.jpg") no-repeat;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-radius: 8px;
    }

    .text {
      padding-left: 96px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      h3 {
        font-weight: 700;
        font-size: 28px;
        line-height: 38px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #000000;
      }
    }

    .yx1-earphones {
      display: grid;
      grid-template-columns: 50% 50%;
      place-content: center;

      img {
        border-radius: 8px;
      }

      .text {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        border-radius: 8px;
        background: ${almostWhite};
      }
    }
  }
}`