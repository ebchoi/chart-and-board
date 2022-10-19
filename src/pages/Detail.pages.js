import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BoardEdit, BoardItem } from '../components/_index.components';
import { commonStyles } from '../styles/Theme';

export const Detail = () => {
  const [boardData, setBoardData] = useState({});
  const [modal, setModal] = useState(false);
  let { boardId } = useParams();

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('data'));
    const board = data.filter(data => data.id === parseInt(boardId));
    setBoardData(board[0]);
  }, [boardId]);

  return (
    <>
      {modal && <BoardEdit setModal={setModal} boardData={boardData} />}
      <DetailContainer>
        <Subheading>글 쓰기, 수정, 삭제</Subheading>
        <BoardItem editMode={false} setModal={setModal} boardData={boardData} />
      </DetailContainer>
    </>
  );
};

const DetailContainer = styled.div``;

const Subheading = styled.h2`
  ${commonStyles.visuallyHidden}
`;
