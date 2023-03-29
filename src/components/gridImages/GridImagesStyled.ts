import styled from "styled-components";

const GridImagesStyled = styled.section`
width: 100%;
display: grid;
grid-template-columns: 27.8125rem 39.6875rem;
gap: 1.875rem;
margin-top: 10rem;

.col1 {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
img {
  border-radius: 0.5rem;
  object-fit: cover;
}

.col2 {
  img {
    width: 100% !important;
  }
}

@media (max-width: 86.25rem) {
  grid-template-columns: 40% 60%;
  
  .col2 {
    img {
      width: unset !important;
    }
  }
}

@media (max-width: 71.75rem) {
  display: flex;
  align-items: center;

  .col1 {
    gap: 1.25rem !important;
  }
}

@media (max-width: 32.5rem) {
  margin-top: 5.625rem;
  flex-direction: column;
}
`

export default GridImagesStyled;