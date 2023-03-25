import { black, darkOrange } from "@/styles/colors";
import styled from "styled-components";

const InfoStyled = styled.section`
display: grid;
grid-template-columns: 50% 50%;
place-content: center;
margin: 12.5rem 0rem;

img {
  border-radius: 0.5rem;
  position: relative;
  left: 16px;
}

.text-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 27.8125rem;
  gap: 2.4375rem;

  h3 {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 2.75rem;
    letter-spacing: 0.0893rem;
    text-transform: uppercase;
    color: ${black};
    span {
      color: ${darkOrange};
    }
  }

  p {
    font-weight: 500;
    font-size: 0.9375rem;
    line-height: 1.5625rem;
    color: ${black};
    mix-blend-mode: normal;
    opacity: 0.5;
  }
}

@media (max-width: 51.75rem) {
  margin: 6rem 0rem;
  display: flex !Important;
  flex-direction: column-reverse;
  align-items: center;
  text-align: center;  
  gap: 1.25rem;
}

@media (max-width: 30rem) {
  h3 {
    font-size: 1.75rem !Important;
    line-height: 2.375rem !Important;
  }
  img {
    position: initial !Important;
  }
}`

export default InfoStyled;