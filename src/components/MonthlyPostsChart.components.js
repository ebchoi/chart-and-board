import styled from "styled-components";
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export const MonthlyPostsChart = () => {
  const [dataList, setDataList] = useState([]);
  const [dataArr, setDataArr] = useState();
  let monthList = [];
  let boardList = [];

  useEffect(() => {
    fetch(`data/graph-data.json`)
      .then((res) => res.json())
      .then((data) => {
        setDataList(data);
      });
  }, []);

  useEffect(() => {
    if (dataList.length > 0) {
      dataList.map((data) => monthList.push(data.month));
      dataList.map((data) => boardList.push(data.data.boardCount));
    }
    setDataArr({
      labels: monthList,
      datasets: [
        {
          label: "월별 게시글 등록수",
          data: boardList,
          borderWidth: 0,
          backgroundColor: "skyblue",
        },
      ],
    });
  }, [dataList]);

  return (
    <MonthlyPostsContainer>
      {dataArr && <Bar data={dataArr} options={options} height={200} />}
    </MonthlyPostsContainer>
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
      max: 100,
      ticks: {
        stepSize: 25,
      },
    },
  },
  maintainAspectRatio: false,
};

const MonthlyPostsContainer = styled.div`
  width: 35%;
  margin-left: 20px;
`;
