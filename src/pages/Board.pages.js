import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../styles/Theme';
import { Heading } from '../components/_index.components';
import { Post } from './Post.pages';

export const Board = () => {
  const navigate = useNavigate();
  const [pageNationNumber, setPageNationNumber] = useState(1);
  const [sessionStorageData, setSessionStorageData] = useState([]);
  const [modal, setModal] = useState(false);

  const goToUrl = (navigate, url) => {
    navigate(url);
  };

  useEffect(() => {
    fetch(`/data/board-data.json`)
      .then(res => res.json())
      .then(data => {
        if (!sessionStorage.getItem('data')) {
          sessionStorage.setItem('data', JSON.stringify(data));
          setSessionStorageData(data);
        } else {
          setSessionStorageData(JSON.parse(sessionStorage.getItem('data')));
        }
      });
  }, []);

  return (
    <>
      {modal && <Post setModal={setModal} />}
      <Heading type="h2">게시판</Heading>

      <BoardContainer>
        <Heading type="h3" hidden>
          게시판 목록 테이블
        </Heading>
        <ul>
          <RowItem>
            <BoardHeader>
              <HeaderItem>No</HeaderItem>
              <HeaderItem>제목</HeaderItem>
              <HeaderItem>작성자</HeaderItem>
              <HeaderItem>작성시간</HeaderItem>
            </BoardHeader>
          </RowItem>
          {sessionStorageData.length >= 1 &&
            sessionStorageData
              .slice(
                0 + 5 * (pageNationNumber - 1),
                5 + 5 * (pageNationNumber - 1)
              )
              .map(({ id, title, userName, createdAt }) => (
                <RowItem
                  onClick={() => goToUrl(navigate, `/board/${id}`)}
                  key={id}
                >
                  <ItemList>
                    <ItemInfo>{id}</ItemInfo>
                    <ItemTitle>{title}</ItemTitle>
                    <ItemInfo>{userName}</ItemInfo>
                    <ItemInfo>
                      {createdAt.toLocaleString('sv').slice(0, 10)}
                    </ItemInfo>
                  </ItemList>
                </RowItem>
              ))}
        </ul>
      </BoardContainer>

      <PageContainer>
        {sessionStorageData.length >= 1 &&
          Array(Math.ceil(sessionStorageData.length / 5))
            .fill()
            .map((_, index) => (
              <PageNumber
                onClick={() => {
                  setPageNationNumber(index + 1);
                }}
                key={index}
              >
                {index + 1}
              </PageNumber>
            ))}
      </PageContainer>
      <TextWrite onClick={() => setModal(true)}>글쓰기</TextWrite>
    </>
  );
};

const BoardContainer = styled.article``;

const RowItem = styled.li`
  border-bottom: 2px solid ${colors.gray};
  &:hover {
    background-color: ${colors.darkgray};
    border: 2px dotted ${colors.white};
    color: ${colors.white};
    cursor: pointer;
  }
  &:first-of-type:hover {
    border: none;
    color: ${colors.black};
    cursor: unset;
  }
`;

const ItemList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 5% auto 10% 10%;
  column-gap: 15px;
  row-gap: 10px;
  justify-items: center;
  box-sizing: border-box;
`;

const ItemInfo = styled.li`
  padding: 10px 0;
`;

const ItemTitle = styled(ItemInfo)`
  padding-left: 10px;
  justify-self: left;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BoardHeader = styled(ItemList)`
  background-color: ${colors.gray};
`;

const HeaderItem = styled(ItemInfo)`
  font-weight: bold;
`;

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageNumber = styled.button`
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
