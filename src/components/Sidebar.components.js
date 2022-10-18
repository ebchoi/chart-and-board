import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import { colors, device } from "../styles/Theme";

export const Sidebar = () => {
  const [navOpen, setNavOpen] = useState(false);

  function toggleMenu(navOpen) {
    setNavOpen((navOpen) => {
      return !navOpen;
    });
  }

  return (
    <SidebarContainer navOpen={navOpen}>
      <MenuButton navOpen={navOpen} onClick={toggleMenu}>
        {navOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
      </MenuButton>
      <NavList>
        <NavItem navOpen={navOpen} onClick={() => setNavOpen(false)}>
          <Link to="/">사용자1</Link>
        </NavItem>
        <NavItem navOpen={navOpen} onClick={() => setNavOpen(false)}>
          <Link to="/board">게시판</Link>
        </NavItem>
        <NavItem navOpen={navOpen} onClick={() => setNavOpen(false)}>
          <Link to="#">개인설정</Link>
        </NavItem>
        <NavItem navOpen={navOpen} onClick={() => setNavOpen(false)}>
          <Link to="#">로그아웃</Link>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.nav`
  height: ${({ navOpen }) => (navOpen ? "100vh" : "70px")};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${colors.darkgray};

  ${device.desktop} {
    width: 100px;
    min-width: fit-content;
    height: 100vh;
    gap: 80px;
    background-color: ${colors.darkgray};
    color: ${colors.white};
    transition: width 0.8s ease;

    &:hover {
      width: 300px;
    }
  }
`;
const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${colors.white};

  svg {
    width: 70px;
    height: 70px;
    color: ${colors.white};
  }

  ${device.desktop} {
    display: none;
  }
`;

const NavList = styled.ul`
  display: ${({ navOpen }) => (navOpen ? "block" : "none")};
  width: 100%;
  height: ${({ navOpen }) => (navOpen ? "100vh" : "0px")};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${({ navOpen }) =>
    navOpen ? colors.darkgray : "transparent"};
  transition: all 1s ease;
  z-index: 99;

  ${device.desktop} {
    display: block;
    align-items: center;
  }
`;

const NavItem = styled.li`
  display: ${({ navOpen }) => (navOpen ? "block" : "none")};
  width: 100%;
  color: ${colors.white};

  > a {
    padding: 10px 20px;
    width: 100%;
    height: 70px;
    display: inline-block;
    text-align: end;
    line-height: 50px;

    &:hover {
      background-color: ${colors.hoverWhite};
    }
  }

  ${device.desktop} {
    display: block;
  }
`;
