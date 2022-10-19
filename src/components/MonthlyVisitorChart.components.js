import styled from 'styled-components';
// import Chart from "chart.js/auto";
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

export const MonthlyVisitorChart = () => {
  const [dataList, setDataList] = useState([]);
  const [dataArr, setDataArr] = useState();
  let monthList = [];
  let visitorList = [];

  useEffect(() => {
    fetch(`data/graph-data.json`)
      .then(res => res.json())
      .then(data => {
        setDataList(data);
      });
  }, []);

  useEffect(() => {
    if (dataList.length > 0) {
      dataList.map(data => monthList.push(data.month));
      dataList.map(data => visitorList.push(data.data.visitorCount));
    }
    setDataArr({
      labels: monthList,
      datasets: [
        {
          label: '월별 방문자 추이',
          data: visitorList,
          fill: true,
          backgroundColor: 'transparent',
          borderColor: 'skyblue',
        },
      ],
    });
  }, [dataList]);

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 60,
        ticks: {
          stepSize: 15,
        },
      },
    },
    maintainAspectRatio: false,
  };
  return (
    <MonthlyVisitorChartContainer>
      {dataArr && <Line data={dataArr} options={options} height={200} />}
    </MonthlyVisitorChartContainer>
  );
};

const MonthlyVisitorChartContainer = styled.div`
  width: 35%;
  margin-right: 20px;
`;
