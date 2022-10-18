import { Outlet } from "react-router-dom";
import styled from "styled-components";
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

const LayoutContainer = styled.div``;
const ContentsArea = styled.div``;
