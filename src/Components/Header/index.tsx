import React, { useContext } from "react";
import {
  HeaderContainer,
  NavBar,
  NavLink,
  ButtonListContainer,
  ButtonList,
  NavLi,
} from "./styles";
import { menus, themes } from "../../Utilities/constants";
import { useLocation } from "react-router-dom";
import {
  GlobalContext,
  GlobalContextType,
} from "../../Providers/global-provider";

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const { theme, setTheme } = useContext(GlobalContext) as GlobalContextType;

  return (
    <HeaderContainer>
      <NavBar>
        {menus &&
          menus.map((menu) => {
            return (
              <NavLink
                to={`/${menu.path}`}
                isActive={isActive(`/${menu.path}`)}
                key={menu.name}
              >
                {menu.name}
              </NavLink>
            );
          })}
      </NavBar>

      <ButtonListContainer>
        <ButtonList>
          {themes &&
            themes.map((themeItem) => {
              return (
                <NavLi
                  isActive={themeItem.variant === theme}
                  onClick={() => setTheme(themeItem.variant)}
                  key={themeItem.Title}
                >
                  {themeItem.Title}
                </NavLi>
              );
            })}
        </ButtonList>
      </ButtonListContainer>
    </HeaderContainer>
  );
};

export default Header;
