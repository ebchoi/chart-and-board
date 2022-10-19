import styled from "styled-components";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

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

const data = {
  labels: ["4월", "5월", "6월", "7월"],
  datasets: [
    {
      label: "월별 방문자 추이",
      data: [18, 28, 52, 30],
      fill: true,
      backgroundColor: "transparent",
      borderColor: "skyblue",
    },
  ],
};

export const MonthlyVisitorChart = () => {
  return (
    <MonthlyVisitorChartContainer>
      <Line data={data} options={options} />
    </MonthlyVisitorChartContainer>
  );
};

const MonthlyVisitorChartContainer = styled.div``;
