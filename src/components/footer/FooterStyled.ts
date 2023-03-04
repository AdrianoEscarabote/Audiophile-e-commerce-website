import styled from "styled-components";
import { footerBackground, white } from "../../styles/colors";
import { darkOrange } from "../../styles/colors";

export const FooterStyled = styled.footer`
background: ${footerBackground};
color: ${white};
position: relative;
display: flex;
align-items: center;
justify-content: center;

p {
  max-width: 540px;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  mix-blend-mode: normal;
  opacity: 0.5;
}

.container {
  max-width: 1440px;
  padding: 30px 165px;
  width: 100%;

  &::before {
    content: "";
    width: 101px;
    height: 4px;
    background: ${darkOrange};
    position: absolute;
    top: 0px;
  }

  .row1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .links {
      display: flex;
      align-items: center;
      gap: 20px;

      a {
        font-weight: 700;
        font-size: 13px;
        line-height: 25px;
        letter-spacing: 2px;
        text-transform: uppercase;
        text-decoration: none;
        color: ${white};
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
  .row2 {
    margin-top: 36px;
    display: flex;
    width: 100%;
    justify-content: space-between;

    .social-icons {
      display: flex;
      align-items: flex-start;
      gap: 20px;
    }
  }
  .row3 {
    margin-top: 36px;
    display: flex;
  }
}

@media(max-width: 1148px) {
  .container {
    padding: 30px 60px;
  }
  .row1 {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start !Important;
  }
  .social-icons {
    flex-wrap: wrap;
  }
}

// tablet
@media(max-width: 768px) {
  .social-icons {
    position: absolute;
    bottom: 30px;
    right: 60px;
  }
  .links {
    flex-wrap: wrap;
  }
}

// mobile
@media (max-width: 480px) {
  .container {
    padding: 30px 20px;
    text-align: center;
  }
  .row1 {
    align-items: center !Important;

    .links {
      flex-direction: column !Important;
      align-items: center !Important;
    }
  }
  .row3 {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    p {
      text-align: center;
    }
  }
  .social-icons {
    left: 2% !Important;
  }
}
`