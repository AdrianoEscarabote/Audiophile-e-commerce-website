import styled from "styled-components";
import { almostBlack, white } from "./colors";

export const HeaderStyled = styled.header`
background: ${almostBlack};
width: 100%;
color: ${white};
display: flex;
align-items: center;
justify-content: center;

.container {
  padding: 35px 165px 0px 165px;
  width: 100%;
  max-width: 1440px;
  
  .content {
    padding-bottom: 35px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #979797;

    nav {
      ul {
        display: flex;
        gap: 34px;
        li {
          a {
            font-weight: 700;
            font-size: 13px;
            line-height: 25px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #FFFFFF;
            text-decoration: none;
          }
        }
      }
    }

    button {
      background: transparent;
      outline: transparent;
      border: transparent;
    }
  }
}
`