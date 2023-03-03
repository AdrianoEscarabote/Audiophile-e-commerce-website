import styled from "styled-components";
// colors
import { almostBlack, white } from "./colors";

const HeadphonesStyled = styled.main`
display: flex;
flex-direction: column;
align-items: center;

.wrapper {
  background: ${almostBlack};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 100px 0px;

  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    text-align: center;
    letter-spacing: 1.42857px;
    text-transform: uppercase;
    color: ${white};
  }
}
.container {
  max-width: 1440px;
  width: 100%;
  padding: 120px 165px 30px 165px;

  .phones {
    margin: 20px 0px 234px 0px;

    .mark2,
    .mark1,
    .xx59 {
      display: flex;
      justify-content: space-between;

      img {
        border-radius: 8px;
      }
  
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        max-width: 445px;
  
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
          color: #000000;
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

    .mark1 {
      margin-top: 160px;
    }

    .xx59 {
      margin-top: 160px;
    }
  }
}`
export default HeadphonesStyled;