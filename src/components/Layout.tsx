import { Header } from "./Header"
import { Footer } from "./Footer"
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
  )
}