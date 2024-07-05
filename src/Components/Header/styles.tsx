import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eaeaea;
  -webkit-box-shadow: 1px 5px 17px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 5px 17px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 5px 17px -3px rgba(0, 0, 0, 0.75);
  flex-direction: row;
`;

export const NavBar = styled.nav`
  display: flex;
  padding: 10px;
  flex: 1;
`;

export const NavLink = styled(Link)<{ isActive: boolean }>`
  text-decoration: none;
  text-decoration: ${({ isActive }) => (isActive ? "underline" : "none")};
  color: ${({ theme }) => theme.menuColor};
  padding: 10px 15px;
  border-radius: 10px;
  margin-right: 5px;
  line-height: 25px;
  &:hover {
    text-decoration: none;
  }
`;

export const ButtonListContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const ButtonList = styled.ul`
  display: flex;
`;

export const NavLi = styled.li<{ isActive: boolean }>`
  margin-right: 15px;
  list-style: none;
  background-color: ${({ isActive }) => (isActive ? "#ffffff" : "#000000")};
  padding: 5px 15px;
  color: ${({ isActive }) => (isActive ? "#000000" : "#ffffff")};
  border: ${({ isActive }) =>
    isActive ? "1px solid #000000" : "1px solid #ffffff"};
  cursor: pointer;
`;
