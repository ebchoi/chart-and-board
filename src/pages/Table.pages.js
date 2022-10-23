import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../styles/Theme';
import { Heading } from '../components/_index.components';
import { Post } from './Post.pages';
import { BoardTable } from '../containers/BoardTable.containers';

export const Table = () => {
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

      <BoardTable
        sessionStorageData={sessionStorageData}
        pageNationNumber={pageNationNumber}
      />

      <BottomContainer>
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
      </BottomContainer>
      <TextWrite onClick={() => setModal(true)}>글쓰기</TextWrite>
    </>
  );
};

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
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
