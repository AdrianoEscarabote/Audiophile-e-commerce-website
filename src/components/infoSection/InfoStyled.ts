import { black, darkOrange } from "@/styles/colors";
import styled from "styled-components";

const InfoStyled = styled.section`
display: grid;
grid-template-columns: 50% 50%;
place-content: center;
margin: 200px 0px;

img {
  border-radius: 8px;
}

.text-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 445px;
  gap: 39px;

  h3 {
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.42857px;
    text-transform: uppercase;
    color: ${black};
    span {
      color: ${darkOrange};
    }
  }

  p {
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: ${black};
    mix-blend-mode: normal;
    opacity: 0.5;
  }
}

@media (max-width: 828px) {
  margin: 96px 0px;
  display: flex !Important;
  flex-direction: column-reverse;
  align-items: center;
  text-align: center;  
  gap: 20px;
}
`

export default InfoStyled;