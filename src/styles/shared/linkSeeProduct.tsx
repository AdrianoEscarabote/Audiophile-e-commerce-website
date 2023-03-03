import styled from "styled-components";

interface LinkProps {
  backgroundColor: string;
  fontColor: string;
  hoverBackground: string;
  border?: string;
  hoverFont?: string;
}

// button 1 default
{/* <LinkSeeProduct backgroundColor="#D87D4A" hoverBackground="#FBAF85" fontColor="#FFFFFF" href="/About">see product</LinkSeeProduct> */}

// button 2 default
{/* <LinkSeeProduct backgroundColor="#ffffff" hoverBackground="#000000" hoverFont="#FFFFFF" fontColor="#000000" border="1px solid #000000" href="/About">see product</LinkSeeProduct> */}

export const LinkSeeProduct = styled.a<LinkProps>`
display: grid;
place-content: center;
width: 160px;
height: 48px;
font-weight: 700;
font-size: 13px;
line-height: 18px;
letter-spacing: 1px;
text-decoration: none;
text-transform: uppercase;
outline: transparent;
cursor: pointer;
transition: 0.2s ease-in-out;
${({ backgroundColor, fontColor, hoverBackground, border, hoverFont }) =>
  backgroundColor && `
  background-color: ${backgroundColor};
  border: ${border ? border: "unset"};
  color: ${fontColor};
  &:hover {
    background-color: ${hoverBackground};
    color: ${hoverFont ? hoverFont : fontColor};
  }
  &:focus {
    background-color: ${hoverBackground};
    color: ${hoverFont ? hoverFont : fontColor};
    border: 2.6px dotted #000;
  }
  `
}`;