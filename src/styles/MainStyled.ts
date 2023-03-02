import styled from "styled-components";
import { almostBlack } from "./colors";
import { white } from "./colors";

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

  .links-products {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    a {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      max-width: 350px;
      width: 100%;

      img {
       
      }
    }
  }
}
`