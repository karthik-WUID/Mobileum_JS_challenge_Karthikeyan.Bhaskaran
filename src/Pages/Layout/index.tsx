import React from "react";
import { LayoutContainer } from "./styles";
import Header from "../../Components/Header";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
