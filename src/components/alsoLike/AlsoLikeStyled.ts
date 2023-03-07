import styled from "styled-components";



const AlsoLikeStyled = styled.section`
margin-top: 160px;

h3 {
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 1.14286px;
  text-transform: uppercase;
  color: #000000;
  text-align: center;
  display: flex;
}

.grid-items {
  display: flex !Important;
  align-items: center;
  gap: 30px;
  
  .col1,
  .col2,
  .col3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    max-width: 350px;

    h4 {
      font-weight: 700;
      font-size: 24px;
      line-height: 33px;
      text-align: center;
      letter-spacing: 1.71429px;
      text-transform: uppercase;
      color: #000000;
    }
  }
}
`

export default AlsoLikeStyled;