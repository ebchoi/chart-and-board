import { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/Theme";

export const Board = () => {
  const [pageNationNumber, setPageNationNumber] = useState(1);

  useEffect(() => {
    fetch(`/data/board-data.json`)
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.setItem("data", JSON.stringify(data));
      });
  }, []);

  const boardData = JSON.parse(sessionStorage.getItem("data")).slice(
    0 + 5 * (pageNationNumber - 1),
    5 + 5 * (pageNationNumber - 1)
  );

  const PageNationNumberData = Array(
    Math.ceil(JSON.parse(sessionStorage.getItem("data")).length / 5)
  ).fill();

  return (
    <>
      <TopContainer>
        <BoardTitle>게시판</BoardTitle>
        <TextWrite>글쓰기</TextWrite>
      </TopContainer>
      <BoardContainer>
        <BoardListWrapar>
          <BoardListTitle>No</BoardListTitle>
          <BoardListTitle>제목</BoardListTitle>
          <BoardListTitle>작성자</BoardListTitle>
          <BoardListTitle>작성시간</BoardListTitle>
        </BoardListWrapar>
        {sessionStorage.getItem("data") &&
          boardData.map(({ id, title, userName, createdAt }) => (
            <BoardListBox key={id}>
              <BoardList>{id}</BoardList>
              <BoardList>{title}</BoardList>
              <BoardList>{userName}</BoardList>
              <BoardList>{createdAt}</BoardList>
            </BoardListBox>
          ))}
      </BoardContainer>
      <BottomContainer>
        {PageNationNumberData.map((_, index) => (
          <BoardNumber
            onClick={() => {
              setPageNationNumber(index + 1);
            }}
            key={index}
          >
            {index + 1}
          </BoardNumber>
        ))}
      </BottomContainer>
    </>
  );
};

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;
const BoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 30px;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
`;

const BoardTitle = styled.h1`
  font-size: 35px;
`;

const TextWrite = styled.button`
  width: 100px;
  height: 50px;
  color: ${colors.white};
  background-color: ${colors.gray};
  border: none;
  border-radius: 5px;
  font-size: 25px;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const BoardListWrapar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 10px;
  background-color: ${colors.gray};
  font-size: 30px;
`;

const BoardListTitle = styled.div`
  margin-right: 30px;
`;

const BoardListBox = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 7px;
  border-bottom: 2px solid ${colors.gray};
  font-size: 27px;
`;
const BoardList = styled.li`
  margin: 5px;
`;
const BoardNumber = styled.button`
  margin: 10px;
  background-color: ${colors.gray};
  border: none;
  border-radius: 5px;
  font-size: 30px;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
