import { useState } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUser, FaRegClipboard, FaPowerOff } from 'react-icons/fa';
import { IoSettingsSharp, IoCloseSharp } from 'react-icons/io5';

import { colors, commonStyles, device } from '../styles/Theme';

import { Button } from './_index.components';

export const Sidebar = () => {
  const [navOpen, setNavOpen] = useState(false);

  function toggleMenu(navOpen) {
    setNavOpen(navOpen => {
      return !navOpen;
    });
  }

  return (
    <SidebarContainer navOpen={navOpen}>
      <MainHeading>관리자 대시보드</MainHeading>
      <MenuButton navOpen={navOpen} onClick={toggleMenu}>
        {navOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
      </MenuButton>
      <NavList>
        <NavItem navOpen={navOpen} onClick={() => setNavOpen(false)}>
          <Button mode="button" to="/" icon={FaUser}>
            사용자1
          </Button>
        </NavItem>
        <NavItem navOpen={navOpen} onClick={() => setNavOpen(false)}>
          <Button to="/board" icon={FaRegClipboard}>
            게시판
          </Button>
        </NavItem>
        <NavItem navOpen={navOpen} onClick={() => setNavOpen(false)}>
          <Button disabled to="#" icon={IoSettingsSharp}>
            개인설정
          </Button>
        </NavItem>
        <NavItem navOpen={navOpen} onClick={() => setNavOpen(false)}>
          <Button disabled to="#" icon={FaPowerOff}>
            로그아웃
          </Button>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.nav`
  height: ${({ navOpen }) => (navOpen ? '100vh' : '70px')};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${colors.darkgray};

  ${device.desktop} {
    width: 70px;
    min-width: fit-content;
    height: 100vh;
    gap: 80px;

    &:hover {
      transition: all 0.2s ease;
      width: 200px;

      div {
        display: block;
      }
    }
  }
`;

const MainHeading = styled.h1`
  ${commonStyles.visuallyHidden}
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${colors.white};

  svg {
    width: 70px;
    height: 70px;
  }

  ${device.desktop} {
    display: none;
  }
`;

const NavList = styled.ul`
  width: 100%;
  height: ${({ navOpen }) => (navOpen ? '100vh' : '0px')};
  display: ${({ navOpen }) => (navOpen ? 'block' : 'none')};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${({ navOpen }) =>
    navOpen ? colors.darkgray : 'transparent'};
  transition: all 1s ease;
  z-index: 99;

  ${device.desktop} {
    display: block;
    align-items: center;
  }
`;

const NavItem = styled.li`
  width: 100%;
  display: ${({ navOpen }) => (navOpen ? 'block' : 'none')};
  color: ${colors.white};

  ${device.desktop} {
    display: block;
  }
`;
