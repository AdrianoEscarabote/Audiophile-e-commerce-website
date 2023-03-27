import { black, white, almostWhite, darkOrange, lightOrange, hoverBtnMain } from "@/styles/colors";
import styled from "styled-components";

const CartStyled = styled.section`
margin-right: 10.3125rem;
background: ${white};
border-radius: 0.5rem;
width: 100%;
max-width: 23.5625rem;
height: 30.5rem;
position: absolute;
top: 2.5rem;
right: 0rem;
padding: 2rem;
opacity: 1 !Important;
animation: cartAnimation 0.5s ease-in-out;
overflow: hidden;
z-index: 300 !Important;

.wrapper_button_cart {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5625rem;
    letter-spacing: 0.0804rem;
    text-transform: uppercase;
    color: ${black};
  }

  button {
    font-weight: 500;
    font-size: 0.9375rem;
    line-height: 1.5625rem;
    text-decoration-line: none;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.7;
    border: transparent;
    background: transparent;
    cursor: pointer;

    &:hover {
      text-decoration: underline !important;
    }

    &:focus {
      border: unset !Important;
    }
  
    &:focus-visible {
      border: 0.0625rem solid ${black};
    }
  }
}

ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 16.5rem;
  overflow-y: scroll;
  transition: 0.4s ease-in-out;

  &::-webkit-scrollbar {
    width: 0.75rem;              
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

  .no-product {
    margin-top: 1.25rem;
    font-weight: 500;
    font-size: 0.9375rem;
    line-height: 1.5625rem;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.6;
  }

  .content-list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;

    .details {
      display: flex;
      gap: 1.25rem;
      align-items: center;

      img {
        border-radius: 0.5rem;
      }

      p {
        display: flex;
        flex-direction: column;
        font-weight: 700;
        font-size: 0.9375rem;
        line-height: 1.5625rem;
        color: ${black};

        span {
          font-weight: 700;
          font-size: 0.875rem;
          line-height: 1.5625rem;
          color: ${black};
          mix-blend-mode: normal;
          opacity: 0.6;
        }
      }
    }

    .wrapper_button {
      width: 6rem;
      height: 2rem;
      background: ${almostWhite};
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      span {
        font-weight: 700;
        font-size: 0.8125rem;
        line-height: 1.125rem;
        text-align: center;
        letter-spacing: 0.0625rem;
        text-transform: uppercase;
        color: ${black};
      }

      button {
        width: 1rem;
        height: 1.125rem;
        font-weight: 700;
        font-size: 0.9375rem;
        line-height: 1.125rem;
        text-align: center;
        letter-spacing: 0.0625rem;
        color: ${black};
        mix-blend-mode: normal;
        opacity: 0.8;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: none;
        
        &:focus-visible {
          color: ${black} !important; 
        }

        &:hover,
        &:focus {
          color: ${darkOrange};
        }
      }
    }
  }
}

.disabled {
  pointer-events: none;
  opacity: 0.6;
}

.total {
  width: 100%;
  display: flex;
  margin-top: 2rem;
  
  p {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 0.9375rem;
    line-height: 1.5625rem;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.6;
  }
}

a {
  margin-top: 2rem;
  display: grid;
  place-content: center;
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  background: ${darkOrange};
  font-weight: 700;
  font-size: 0.8125rem;
  line-height: 1.125rem;
  letter-spacing: 0.0625rem;
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
    bottom: 0rem;
    height: 0rem;
    opacity: 0;
  } to {
    bottom: -31.25rem;
    height: 30.5rem;
    opacity: 1;
  }
}

@media (max-width: 71.75rem) {
  margin-right: 3.75rem;
}

@media (max-width: 36.5rem) {
  margin: 0px;
  padding: 2rem 1rem; 
}

@media (max-width: 21.25rem) {
  max-width: 100% !important;
  ul {
    width: 100%;
    li {
      width: 100%;
      .content-list {
        align-items: center;
        flex-wrap: wrap;
        gap: 1.25rem;
        .details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
  }
}
@media (max-height: 38.75rem) {
  overflow-y: scroll !important;
  height: 70%;
  top: 0.5rem;

  ul {
    height: auto;
  }

  &::-webkit-scrollbar {
    width: 0.65rem;              
  }
  &::-webkit-scrollbar-track {
    background: transparent;        
  }
  &::-webkit-scrollbar-thumb {
    background: ${hoverBtnMain};    
    &:hover {
      background: ${lightOrange};
    }
    border-radius: 1.25rem;    
  }
}
`

export default CartStyled;