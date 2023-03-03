import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"
import React, { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  );
};