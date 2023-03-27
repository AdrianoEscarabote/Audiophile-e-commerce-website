import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import React from "react"
import { LayoutProps } from "@/types/LayoutProps";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};