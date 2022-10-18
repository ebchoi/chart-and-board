import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, device } from "../styles/Theme";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <NavList>
        <NavItem>
          <Link to="/">사용자1</Link>
        </NavItem>
      </NavList>
      <NavList>
        <NavItem>
          <Link to="/board">게시판</Link>
        </NavItem>
        <NavItem>
          <Link to="#">개인설정</Link>
        </NavItem>
      </NavList>
      <NavList>
        <NavItem>
          <Link to="#">로그아웃</Link>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.nav`
  width: 100px;
  min-width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 80px;
  background-color: ${colors.darkgray};
  color: ${colors.white};
  transition: width 0.8s ease;

  &:hover {
    width: 300px;
  }
`;

const NavList = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  background-color: blue;

  ${device.desktop} {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.li`
  width: 100%;

  > a {
    padding: 10px 20px;
    width: 100%;
    height: 70px;
    display: inline-block;
    line-height: 50px;
  }
`;
