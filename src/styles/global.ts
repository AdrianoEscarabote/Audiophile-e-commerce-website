import { createGlobalStyle } from "styled-components";
import { darkOrange, lightOrange } from "./colors";

export const GlobalStyle = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Manrope', sans-serif;
}
html {
  scroll-behavior: smooth;
}
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul {
  list-style: none;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}
/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}
/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
.sr-only {
  position: absolute;
  width: 0.0625rem;
  height: 0.0625rem;
  padding: 0;
  margin: -0.0625rem;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
.visually-hidden {
  position: absolute;
  top: -9999px;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
body {
  text-rendering: optimizeSpeed;
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
  }
}
body.overflow-hidden {
  overflow: hidden;
}`