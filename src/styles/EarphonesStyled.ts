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

  .preview-product {
    display: flex;
    justify-content: space-between;
    margin: 40px 0px 234px 0px;

    img {
      border-radius: 8px;
    }

    .text-product {
      max-width: 445px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      max-width: 445px;
      gap: 20px;
      span {
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 10px;
        text-transform: uppercase;
        color: ${darkOrange};
      }
      h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 44px;
        letter-spacing: 1.42857px;
        text-transform: uppercase;
        color: ${black};
      }
      p {
        margin: 10px 0px;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
      }
    }
  }
}

@media(max-width: 1348px) {
  .container {
    padding: 120px 60px 30px 60px !Important;

    .preview-product {
      img {
        width: 440px;
        height: 460px;
      }
      .text {
        padding: 0px 10px;
      }
    }
  }
}

// tablet
@media (max-width: 1000px) {
  .container {
    padding: 0px 60px 30px 60px !Important;
  }

  .preview-product  {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    
    img {
      width: 100% !Important;
      height: 352px !Important;
    }
  
    .text-product {
      padding: 0px !important;
      text-align: center;
      align-items: center !Important;
    }
  }

  ul {
    gap: 90px;
    flex-wrap: wrap;
    margin: 0 auto;

    li {
      display: flex;
      justify-content: center;
    }

    a {
      margin: 0px !important;
    }
  }
}

// mobile
@media (max-width: 584px) {
  .container {
    padding: 0px 20px 30px 20px !Important;
  }

  .wrapper {
    height: 102px !important; 
    padding: 0px !Important;

    h1 {
      font-size: 28px;
      line-height: 38px;
    }
  }

  .text-product {
    h2 {
      font-size: 28px !important;
      line-height: 38px !important;
    }
  }
}

`
export default EarphonesStyled;