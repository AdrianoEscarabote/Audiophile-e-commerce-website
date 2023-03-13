import styled from "styled-components";

const GridImagesStyled = styled.section`
width: 100%;
display: grid;
grid-template-columns: 445px 635px;
gap: 30px;
margin-top: 160px;

.col1 {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
img {
  border-radius: 8px;
}

.col2 {
  img {
    width: 100% !important;
  }
}

@media (max-width: 1380px) {
  grid-template-columns: 40% 60%;
  
  .col2 {
    img {
      width: unset !important;
    }
  }
}

@media (max-width: 1148px) {
  display: flex;
  align-items: center;

  .col1 {
    gap: 20px !important;
  }
}

@media (max-width: 520px) {
  margin-top: 90px;
  flex-direction: column;
}
`

export default GridImagesStyled;