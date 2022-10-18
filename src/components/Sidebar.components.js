import { Link } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <ul>
        <li>
          <Link to="/">사용자1</Link>
        </li>
        <li>
          <Link to="/board">게시판</Link>
        </li>
        <li>개인설정</li>
        <li>로그아웃</li>
      </ul>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.nav``;
