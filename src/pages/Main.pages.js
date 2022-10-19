import styled from "styled-components";
import { MonthlyVisitorChart } from "../components/MonthlyVisitorChart.components";
import { AgeRangeChart } from "../components/AgeRangeChart.components";
import { MonthlyPostsChart } from "../components/MonthlyPostsChart.components";

export const Main = () => {
  return (
    <MainContainer>
      <MonthlyVisitorChart />
      <AgeRangeChart />
      <MonthlyPostsChart />
    </MainContainer>
  );
};

const MainContainer = styled.div``;
