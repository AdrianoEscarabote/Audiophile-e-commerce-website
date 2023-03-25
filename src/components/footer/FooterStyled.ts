import styled from "styled-components";
// colors
import { footerBackground, white, darkOrange} from "../../styles/colors";

export const FooterStyled = styled.footer`
background: ${footerBackground};
color: ${white};
position: relative;
display: flex;
align-items: center;
justify-content: center;

p {
  max-width: 33.75rem;
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.5625rem;
  mix-blend-mode: normal;
  opacity: 0.5;
}

.container {
  max-width: 90rem;
  padding: 76px 165px 46px 165px;
  width: 100%;

  &::before {
    content: "";
    width: 6.3125rem;
    height: 0.25rem;
    background: ${darkOrange};
    position: absolute;
    top: 0rem;
  }

  .row1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .links {
      display: flex;
      align-items: center;
      gap: 2rem;

      a {
        font-weight: 700;
        font-size: 0.8125rem;
        line-height: 1.5625rem;
        letter-spacing: 0.125rem;
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
    margin-top: 2.25rem;
    display: flex;
    width: 100%;
    justify-content: space-between;

    .social-icons {
      display: flex;
      align-items: flex-end;
      gap: 1rem;
      padding-bottom: 0.375rem;
    }
  }
  .row3 {
    margin-top: 3.25rem;
    display: flex;
  }
}

@media(max-width: 71.75rem) {
  .container {
    padding: 1.875rem 3.75rem;
  }
  .row1 {
    flex-direction: column;
    gap: 1.25rem;
    align-items: flex-start !Important;
  }
  .social-icons {
    flex-wrap: wrap;
  }
}

// tablet
@media(max-width: 48rem) {
  .social-icons {
    position: absolute;
    bottom: 1.875rem;
    right: 3.75rem;
  }
  .links {
    flex-wrap: wrap;
  }
}

// mobile
@media (max-width: 30rem) {
  .container {
    padding: 1.875rem 1.25rem 0rem;
    text-align: center;

    &::before {
      left: 38%;
    }
  }
  .row1 {
    align-items: center !Important;

    .links {
      flex-direction: column !Important;
      align-items: center !Important;
    }
  }
  .row2 {
    flex-direction: column;
    align-items: center;
    gap: 1.5625rem;
  }
  .row3 {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 3.125rem;
    p {
      text-align: center;
    }
  }
  .social-icons {
    position: initial;
  }
}`