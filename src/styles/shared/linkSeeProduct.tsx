import Link from "next/link";
import styled from "styled-components";

interface LinkProps {
  backgroundcolor: string;
  fontcolor: string;
  hoverbackground: string;
  border?: string;
  hoverfont?: string;
}

// button 1 default
{/* <LinkSeeProduct backgroundColor="#D87D4A" hoverBackground="#FBAF85" fontColor="#FFFFFF" href="/About">see product</LinkSeeProduct> */}

// button 2 default
{/* <LinkSeeProduct backgroundColor="#ffffff" hoverBackground="#000000" hoverFont="#FFFFFF" fontColor="#000000" border="1px solid #000000" href="/About">see product</LinkSeeProduct> */}

export const LinkSeeProduct = styled(Link)<LinkProps>`
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
${({ backgroundcolor, fontcolor, hoverbackground, border, hoverfont }) =>
backgroundcolor && `
  background-color: ${backgroundcolor};
  border: ${border ? border: "unset"};
  color: ${fontcolor};
  &:hover {
    background-color: ${hoverbackground};
    color: ${hoverfont ? hoverfont : fontcolor};
  }
  &:focus {
    background-color: ${hoverbackground};
    color: ${hoverfont ? hoverfont : fontcolor};
    border: 2.6px dotted #000;
  }
  `
}`;