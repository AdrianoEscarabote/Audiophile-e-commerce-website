import styled from "styled-components";

interface GridImagesStyledProps {
  first: {
    mobile: string;
    tablet: string;
    desktop: string;
  },
  second: {
    mobile: string;
    tablet: string;
    desktop: string;
  },
  third: {
    mobile: string;
    tablet: string;
    desktop: string;
  }
}

const GridImagesStyled = styled.section<GridImagesStyledProps>`
width: 100%;
display: grid;
grid-template-columns: 445px 635px;
gap: 30px;
margin-top: 160px;

${({ first, second ,third }) => `
.img1 {
  background: url(${first.desktop});
}
.img2 {
  background: url(${second.desktop});
}
.img3 {
  background: url(${third.desktop});
}
` }

.col1 {
  display: flex;
  flex-direction: column;
  gap: 32px;

  .img1,
  .img2 {
    width: 445px;
    height: 280px;
    border-radius: 8px;
  }
}
.col2 {
  .img3 {
    width: 635px;
    height: 592px; 
    border-radius: 8px;
  }
}
`

export default GridImagesStyled;