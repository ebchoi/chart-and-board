import styled from "styled-components";
// import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
// import { useState, useEffect } from "react";

export const MonthlyVisitorChart = () => {
  // const [dataList, setDataList] = useState([]);

  // useEffect(() => {
  //   fetch(`/data/graph-data.json`)
  //     .then((res) => res.json)
  //     .then((data) => {
  //       this.setState({ contentsData: data });
  //     });
  //   console.log(data);
  //   console.log(dataList);
  // }, []);

  return (
    <MonthlyVisitorChartContainer>
      <Line data={data} options={options} />
    </MonthlyVisitorChartContainer>
  );
};

const data = {
  labels: ["4월", "5월", "6월", "7월"],
  datasets: [
    {
      label: "월별 방문자 추이",
      data: [15, 22, 55, 30],
      fill: true,
      backgroundColor: "transparent",
      borderColor: "skyblue",
    },
  ],
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
};

const MonthlyVisitorChartContainer = styled.div`
  width: 40%; //나중에 40%로
  border: 1px solid green;
`;
