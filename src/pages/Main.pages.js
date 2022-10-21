import { useRef } from 'react';
import styled from 'styled-components';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import {
  Heading,
  AgeRangeChart,
  MonthlyPostsChart,
  MonthlyVisitorChart,
} from '../components/_index.components';

export const Main = () => {
  const chartRef = useRef();
  const onDownloadBtn = () => {
    const chart = chartRef.current;
    domtoimage.toBlob(chart).then(blob => {
      saveAs(blob, 'chart.png');
    });
  };

  return (
    <>
      <Heading type="h2">현황</Heading>
      <Wrapper>
        <DivideLine>
          <span />
        </DivideLine>
        <MainContainer ref={chartRef}>
          <MonthlyVisitorChart />
          <AgeRangeChart />
          <MonthlyPostsChart />
        </MainContainer>
        <DivideLine>
          <span />
        </DivideLine>
        <Button onClick={onDownloadBtn}>img</Button>
      </Wrapper>
    </>
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

const DivideLine = styled.span`
  width: 100%;
  border-top: 1px solid black;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  width: 18%;
  padding: 10px;
  background-color: transparent;
  font-weight: bold;
  font-style: italic;
  font-size: 15px;
  border-width: 1px;
  cursor: pointer;
`;
