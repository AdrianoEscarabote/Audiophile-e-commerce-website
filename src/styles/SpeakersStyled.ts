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
  padding: 100px 0px;

  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    text-align: center;
    letter-spacing: 1.42857px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
}

.container {
  max-width: 1440px;
  width: 100%;
  padding: 120px 165px 30px 165px;


  .zx9,
  .zx7 {
    display: flex;
    justify-content: space-between;
    
    .text {
      display: flex;
      max-width: 445px;
      flex-direction: column;
      justify-content: center;
      gap: 20px;

      span {
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 10px;
        text-transform: uppercase;
        color: #D87D4A;
      }

      h2 {
        font-weight: 700;
        font-size: 40px;
        line-height: 44px;
        letter-spacing: 1.42857px;
        text-transform: uppercase;
        color: ${black};
      }
      p {
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
      }
    }
  }
  .zx7 {
    margin-top: 160px;
    margin-bottom: 234px;
  }
}`
export default SpeakersStyled;