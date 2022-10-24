import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../styles/Theme';
import { Heading, Sidebar } from '../components/_index.components';

export const Layout = () => {
  return (
    <LayoutContainer>
      <Heading type="h1" hidden>
        관리자 대시보드
      </Heading>
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

const ContentsArea = styled.main`
  position: relative;
  padding: 20px 10px;
  width: 100%;

  ${device.desktop} {
    padding: 70px 50px;
  }
`;
