import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { device } from "../styles/Theme";
import { Sidebar } from "../components/_index.components";

export const Layout = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <ContentsArea>
        <Outlet />
      </ContentsArea>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100%;
  min-width: 375px;
  height: fit-content;
  display: flex;
  flex-direction: column;

  ${device.desktop} {
    flex-direction: row;
  }
`;

const ContentsArea = styled.div`
  width: 100%;
`;
