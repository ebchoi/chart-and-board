import styled from "styled-components";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

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
console.log(data);

export const MonthlyVisitorChart = () => {
  return (
    <MonthlyVisitorChartContainer>
      {/* <div style={{ width: 400 }}> */}
      <Line data={data} />
      {/* </div> */}
    </MonthlyVisitorChartContainer>
  );
};

const MonthlyVisitorChartContainer = styled.div``;
