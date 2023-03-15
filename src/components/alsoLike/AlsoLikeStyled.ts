import styled from "styled-components";

const AlsoLikeStyled = styled.section`
margin-top: 10rem;

h3 {
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.25rem;
  letter-spacing: 0.0714rem;
  text-transform: uppercase;
  color: #000000;
  text-align: center;
  display: flex;
}

.grid-items {
  display: flex !Important;
  align-items: center;
  gap: 1.875rem;
  
  .col1,
  .col2,
  .col3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.875rem;
    width: 100%;
    max-width: 21.875rem;

    h4 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 2.0625rem;
      text-align: center;
      letter-spacing: 0.1071rem;
      text-transform: uppercase;
      color: #000000;
    }
  }
}

@media (max-width: 42.8125rem) {
  margin-top: 5.625rem;
  .grid-items {
    gap: 3.75rem;

    .col1,
    .col2,
    .col3 {
      max-width: unset !important;
    }
  }
  h3 {
    font-size: 1.5rem !important;
    line-height: 2.25rem !important;
  }
}`

export default AlsoLikeStyled;