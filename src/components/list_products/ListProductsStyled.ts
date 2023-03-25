import { almostWhite, black, darkOrange } from "@/styles/colors";
import styled from "styled-components";

const ListProductsStyled = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
gap: 1.25rem;
width: 100%;

li {
  width: 100%;
  a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 12.75rem;
    max-width: 21.875rem;
    position: relative;
    width: 100%;
    text-decoration: none;
    background: ${almostWhite};
    border-radius: 0.5rem;
    padding-bottom: 1rem;
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
    gap: 1.25rem;
    color: ${black};
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5625rem;
    text-align: center;
    letter-spacing: 0.0804rem;
    text-transform: uppercase;
    position: relative;
    bottom: 12px;
  }
  .img {
    position: absolute;
    top: -4.6875rem;
  }
  span {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    font-weight: 700;
    font-size: 0.8125rem;
    line-height: 1.125rem;
    letter-spacing: 0.0625rem;
    text-transform: uppercase;
    color: ${black};
    mix-blend-mode: normal;
    opacity: 0.5;
  }
}`

export default ListProductsStyled;