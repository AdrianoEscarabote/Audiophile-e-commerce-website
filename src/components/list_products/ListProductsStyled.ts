import { almostWhite, black, darkOrange } from "@/styles/colors";
import styled from "styled-components";

const ListProductsStyled = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
gap: 10px;

li {
  width: 100%;
  a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 204px;
    max-width: 350px;
    position: relative;
    width: 100%;
    text-decoration: none;
    background: ${almostWhite};
    border-radius: 8px;
    padding-bottom: 10px;
    &:focus {
      span {
        transform: scale(104%);
        color: ${darkOrange};
        opacity: 1;
      } 
    }
    &:hover {
      img {
        transition: 0.3s ease-in-out;
        transform: scale(106%);
      }
      span {
        transform: scale(104%);
        color: ${darkOrange};
        opacity: 1;
      }
    }
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    color: ${black};
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
  }
  .img {
    position: absolute;
    top: -75px;
  }
  span {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${black};
    mix-blend-mode: normal;
    opacity: 0.5;
  }
}
`
export default ListProductsStyled;