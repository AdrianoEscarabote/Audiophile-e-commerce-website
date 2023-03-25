import { createGlobalStyle } from "styled-components";
import { almostBlack, black, darkOrange, lightOrange } from "./colors";
import { white } from "./colors";
import { almostWhite } from "./colors";

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
      max-width: 1440px;
      width: 100%;
      padding: 30px 165px;
      display: grid;
      grid-template-columns: 50% 50%;
      height: 632px;
      place-content: center;
      background: url("./assets/home/desktop/image-hero.jpg") no-repeat;
      background-size: 100% 115%;
      background-position: 0px -95px;
  
      .col1 {
        max-width: 398px;
        display: flex;
        flex-direction: column;
        gap: 50px;
  
        h1 {
          font-weight: 700;
          font-size: 56px;
          line-height: 58px;
          letter-spacing: 2px;
          text-transform: uppercase;
          position: relative;
          bottom: 11px;
        }
  
        h2 {
          font-weight: 400;
          font-size: 14px;
          line-height: 19px;
          letter-spacing: 10px;
          text-transform: uppercase;
          opacity: 0.5;
          mix-blend-mode: normal;
          position: relative;
          bottom: -14px;
        }
  
  
        p {
          position: relative;
          bottom: 34px;
          max-width: 349px; 
          font-weight: 500;
          font-size: 15px;
          line-height: 25px;
          mix-blend-mode: normal;
          opacity: 0.75;
        }

        a {
          display: grid;
          place-content: center;
          width: 160px;
          height: 48px;
          font-weight: 700;
          font-size: 13px;
          line-height: 18px;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: uppercase;
          outline: transparent;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          position: relative;
          bottom: 46px;
          background-color: ${darkOrange};
          border: unset;
          color: ${white};

          &:hover {
            background-color: ${lightOrange} !important;
          }

          &:focus {
            background-color: ${lightOrange};
            outline: 2.6px dotted ${white};
          }
        }
      }
    }
  }
  .container {
    max-width: 1440px;
    width: 100%;
    padding: 200px 165px 0px 165px;

    ul {
      /* padding: 0 20px 0px 20px; */
      width: 100%;

      li {
        padding: 0 0px 0px 26px;
      }
    }
  
    .grid-items {
      margin-top: 168px;
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
        background-position: -144px -30px;
  
        img {
          position: relative;
          bottom: -70px;
          left: 11px;
        }
  
        .text {
          max-width: 349px;
          display: flex;
          flex-direction: column;
          gap: 35px;
          position: relative;
          left: -63px;
          
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
  }
}

@media(max-width: 1148px) {
  main {
    .container {
      padding: 120px 60px 30px 60px;
    }
  }
  
  main {
    .content {
      padding: 30px 60px !important;
    } 
  }

  main {
    .zx9-speaker {
      .text {
        padding: 0px !important;
      }
    }
  }
} 

// tablet
@media (max-width: 828px) {
  main {
    .content {
      display: flex !Important;
      align-items: center;
      justify-content: center;
      background: url("./assets/home/tablet/image-hero.jpg") no-repeat !Important;
      background-size: 100% 90% !Important;
      background-position: center -0px !Important;
      
      .col1 {
        align-items: center;
        text-align: center;
      }
    }

    .container {
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

    .grid-items {
      grid-template-rows: 720px 320px auto !Important;    
  
      .zx9-speaker {
        flex-direction: column;
        background-position: center -280px !Important;
    
        img {
          width: 197px;
          height: 237px;
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
          padding-left: 62px;
        }
      }
      .yx1-earphones {
        .text {
          padding-left: 40px;
        }
      }
    }
  }
}

// mobile
@media (max-width: 584px) {
  main {
    .content {
      height: 510px !Important;
      padding: 0px 20px 30px 20px !Important;
      background: url("./assets/home/mobile/image-hero.jpg") no-repeat !Important;
      background-size: 100% 90% !Important;
      background-position: center -0px !Important;
      .wrapper {
        width: 100%;
        justify-content: space-between !Important;
      }
      .col1 {
        h1 {
          font-size: 36px !Important;
          line-height: 40px !Important;
        }
      }
    }
    .container {
      padding: 120px 20px 30px 20px;
      ul {
        gap: 60px;
        a {
          height: 165px;
        }
        .img {
          top: -45px;
          width: auto;
          height: 144px;
        }
        p {
          font-size: 15px !Important;
          line-height: 20px !Important;
        }
      }
    }
  }
  main {
    .grid-items {
      margin-top: 120px !Important;
      grid-template-rows: 600px 320px auto !Important; 
      .yx1-earphones {
        display: flex !important;
        flex-wrap: wrap;
        gap: 20px;
    
        .text {
          padding: 41px !Important;
          width: 100%;
        }
      }
      .zx9-speaker {
        background-position: center -135px !Important;
        background-size: 720px !Important;
        h2 {
          font-size: 36px !Important;
          line-height: 40px !Important;
        }
      }
      .zx7-speaker {
        background: url("/assets/home/mobile/image-speaker-zx7.jpg") no-repeat !Important;
        background-size: 100% 100%;
        background-position: right !Important;
      }
    }
  }
}`