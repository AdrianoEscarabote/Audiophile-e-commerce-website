import { LinkSeeProductProps } from "@/types/LinkProductTypes";
import Link from "next/link";
import styled from "styled-components";

export const LinkSeeProduct = styled(Link)<LinkSeeProductProps>`
display: grid;
place-content: center;
width: 10rem;
height: 3rem;
font-weight: 700;
font-size: 0.8125rem;
line-height: 1.125rem;
letter-spacing: 0.0625rem;
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
    border: 0.1625rem dotted #000;
  }
  `
}`