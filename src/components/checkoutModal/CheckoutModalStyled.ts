import { white } from "@/styles/colors";
import styled from "styled-components";

const CheckoutModalStyled = styled.div`
background: #1d1d1d93;
width: 100%;
min-height: 100vh;
position: absolute;
top: 90px;
left: 0px;
display: flex;
align-items: center;
justify-content: center;
z-index: 100;

section {
  z-index: 200;
  background: ${white};
  border-radius: 8px;
  width: 540px;
  height: 581px;
}` 

export default CheckoutModalStyled;