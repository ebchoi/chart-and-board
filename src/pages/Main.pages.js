import styled from "styled-components";
import { useRef } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { MonthlyVisitorChart } from "../components/MonthlyVisitorChart.components";
import { AgeRangeChart } from "../components/AgeRangeChart.components";
import { MonthlyPostsChart } from "../components/MonthlyPostsChart.components";

export const Main = () => {
  const chartRef = useRef();
  const onDownloadBtn = () => {
    const chart = chartRef.current;
    domtoimage.toBlob(chart).then((blob) => {
      saveAs(blob, "chart.png");
    });
  };

  return (
    <Wrapper>
      <MainContainer ref={chartRef}>
        <MonthlyVisitorChart />
        <AgeRangeChart />
        <MonthlyPostsChart />
      </MainContainer>
      <Button onClick={onDownloadBtn}>img</Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Button = styled.button`
  width: 18%;
  padding: 10px;
  margin-top: 30px;
  background-color: transparent;
  font-weight: bold;
  font-style: italic;
  font-size: 15px;
  border-width: 1px;
  cursor: pointer;
`;
