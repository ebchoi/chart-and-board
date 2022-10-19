import styled from "styled-components";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 25,
      },
    },
  },
};

// false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
// true : 크기가 알아서 결정됨.
// maintainAspectRatio: false,

const data = {
  labels: ["4월", "5월", "6월", "7월"],
  datasets: [
    {
      label: "월별 게시글 등록수",
      borderWidth: 0, // 테두리 두께
      data: [15, 25, 55, 90],
      backgroundColor: "skyblue",
    },
  ],
};
export const MonthlyPostsChart = () => {
  return (
    <MonthlyPostsContainer>
      <Bar data={data} options={options} height={200} />
    </MonthlyPostsContainer>
  );
};

const MonthlyPostsContainer = styled.div`
  width: 40%;
  border: 1px solid blue;
  margin-left: 20px;
`;
