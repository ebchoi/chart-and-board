import { useEffect, useState } from "react";
import { Post } from "./Post.pages";
import styled from "styled-components";
import { colors } from "../styles/Theme";

export const Board = () => {
  const [pageNationNumber, setPageNationNumber] = useState(1);
  const [sessionStorageData, setSessionStorageData] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch(`/data/board-data.json`)
      .then(res => res.json())
      .then(data => {
        if (!sessionStorage.getItem("data")) {
          sessionStorage.setItem("data", JSON.stringify(data));
          setSessionStorageData(data);
        } else {
          setSessionStorageData(JSON.parse(sessionStorage.getItem("data")));
        }
      });
  }, []);

  return (
    <>
      {modal && <Post setModal={setModal} />}
      <TopContainer>
        <BoardTitle>게시판</BoardTitle>
        <TextWrite onClick={() => setModal(true)}>글쓰기</TextWrite>
      </TopContainer>
      <BoardContainer>
        <BoardListWrapper>
          <ListNumber>No</ListNumber>
          <ListTitle>제목</ListTitle>
          <ListAthor>작성자</ListAthor>
          <ListDate>작성시간</ListDate>
        </BoardListWrapper>
        {sessionStorageData.length >= 1 &&
          sessionStorageData
            .slice(
              0 + 5 * (pageNationNumber - 1),
              5 + 5 * (pageNationNumber - 1)
            )
            .map(({ id, title, userName, createdAt }) => (
              <BoardListBox key={id}>
                <ListNumber>{id}</ListNumber>
                <ListTitle>{title}</ListTitle>
                <ListAthor>{userName}</ListAthor>
                <ListDate>
                  {createdAt.toLocaleString("sv").slice(0, 10)}
                </ListDate>
              </BoardListBox>
            ))}
      </BoardContainer>
      <BottomContainer>
        {sessionStorageData.length >= 1 &&
          Array(Math.ceil(sessionStorageData.length / 5))
            .fill()
            .map((_, index) => (
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

const BoardListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 10px;
  background-color: ${colors.gray};
  font-size: 30px;
`;

const BoardListBox = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 7px;
  border-bottom: 2px solid ${colors.gray};
  font-size: 27px;
`;
const ListNumber = styled.li`
  width: 10%;
  word-break: break-all;
  margin: 5px;
  list-style: none;
`;
const ListTitle = styled.li`
  width: 30%;
  word-break: break-all;
  margin: 5px;
  list-style: none;
`;
const ListAthor = styled.li`
  width: 30%;
  margin: 5px;
  list-style: none;
`;
const ListDate = styled.li`
  width: 30%;
  margin: 5px;
  list-style: none;
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
