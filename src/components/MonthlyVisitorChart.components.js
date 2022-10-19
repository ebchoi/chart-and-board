import styled from "styled-components";
// import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";

export const MonthlyVisitorChart = () => {
  const [dataList, setDataList] = useState([]);
  const [test3, setTest3] = useState();
  let test = [];
  let test2 = [];

  useEffect(() => {
    fetch(`data/graph-data.json`)
      .then((res) => res.json())
      .then((data) => {
        setDataList(data);
      });
  }, []);

  useEffect(() => {
    if (dataList.length > 0) {
      dataList.map((data) => test.push(data.month));
      dataList.map((data) => test2.push(data.data.visitorCount));
    }
    setTest3({
      labels: test,
      datasets: [
        {
          label: "월별 방문자 추이",
          data: test2,
          fill: true,
          backgroundColor: "transparent",
          borderColor: "skyblue",
        },
      ],
    });
  }, [dataList]);

  return (
    <MonthlyVisitorChartContainer>
      {test3 && <Line data={test3} options={options} height={200} />}
    </MonthlyVisitorChartContainer>
  );
};

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

const MonthlyVisitorChartContainer = styled.div`
  width: 40%;
  border: 1px solid green;
  margin-right: 20px;
`;
