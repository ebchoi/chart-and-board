import styled from "styled-components";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const data = {
  datasets: [
    {
      label: "사용자 연령대",
      data: [35, 29, 11, 10, 8, 7],
    },
  ],
};

const options = {
  tooltips: {
    enabled: false,
  },
  legend: {
    display: false,
  },
  responsive: true,
  title: {
    display: false,
    text: "ㅇㅇ",
  },
};

export const AgeRangeChart = () => {
  return (
    <AgeRangeContainer>
      <Pie data={data} options={options} style={{ marginTop: 25 }} />
    </AgeRangeContainer>
  );
};

const AgeRangeContainer = styled.div`
  width: 20%;
  margin-left: 20px;
  /* height: 60vh;
  width: 60vw; */
  /* margin-left: 20px; */
`;
