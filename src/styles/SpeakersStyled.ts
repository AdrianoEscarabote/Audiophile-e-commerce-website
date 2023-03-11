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
}

@media(max-width: 1348px) {
  .container {
    padding: 120px 60px 30px 60px !Important;

    .headphones {
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
  .zx9 {
    width: 100%;
    align-items: center;
    display: flex !Important;
    flex-direction: column;
    margin-top: 120px;
  }
  .zx7 {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
  }
  .zx7,
  .zx9 {
    gap: 34px;
    img {
      width: 100% !Important;
      height: 352px !Important;
    }
  }
  .text {
    text-align: center;
    align-items: center;
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

  .text {
    h2 {
      font-size: 28px !important;
      line-height: 38px !important;
    }
  }
}

`
export default SpeakersStyled;