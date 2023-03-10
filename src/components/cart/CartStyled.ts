import { black, white, almostWhite, darkOrange, lightOrange } from "@/styles/colors";
import styled from "styled-components";

const CartStyled = styled.section`
background: ${white};
border-radius: 8px;
width: 377px;
height: 488px;
position: absolute;
bottom: -500px;
right: 0px;
padding: 32px;
animation: cartAnimation 0.5s ease-in-out;
overflow: hidden;

.wrapper_button_cart {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;


  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
    color: ${black};
  }

  button {
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    text-decoration-line: underline;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.7;
  }
}

ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 264px;
  overflow-y: scroll;
  transition: 0.4s ease-in-out;

  &::-webkit-scrollbar {
    width: 12px;              
  }
  &::-webkit-scrollbar-track {
    background: transparent;        
  }
  &::-webkit-scrollbar-thumb {
    background: ${darkOrange};    
    &:hover {
      background: ${lightOrange};
    }
    border-radius: 1.25rem;    
  }

  .content-list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    .details {
      display: flex;
      gap: 20px;
      align-items: center;

      img {
        border-radius: 8px;
      }

      p {
        display: flex;
        flex-direction: column;
        font-weight: 700;
        font-size: 15px;
        line-height: 25px;
        color: ${black};

        span {
          font-weight: 700;
          font-size: 14px;
          line-height: 25px;
          color: ${black};
          mix-blend-mode: normal;
          opacity: 0.6;
        }
      }
    }

    .wrapper_button {
      width: 96px;
      height: 32px;
      background: ${almostWhite};
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      span {
        font-weight: 700;
        font-size: 13px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: ${black};
      }

      button {
        width: 16px;
        height: 18px;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: ${black};
        mix-blend-mode: normal;
        opacity: 0.8;

        &:hover,
        &:focus {
          color: ${darkOrange};
        }
      }
    }
  }
}

.total {
  width: 100%;
  display: flex;
  margin-top: 32px;
  
  p {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.6;
  }
}

a {
  margin-top: 32px;
  display: grid;
  place-content: center;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  background: ${darkOrange};
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${white};
  text-decoration: none;

  &:hover,
  &:focus {
    background: ${lightOrange};
  }
}

@keyframes cartAnimation {
  from {
    bottom: 0px;
    height: 0px;
    opacity: 0;
  } to {
    bottom: -500px;
    height: 488px;
    opacity: 1;
  }
}`

export default CartStyled;