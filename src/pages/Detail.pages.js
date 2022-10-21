import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BoardEdit, BoardItem, Heading } from '../components/_index.components';

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
      <Heading type="h2">게시글</Heading>
      {modal && <BoardEdit setModal={setModal} boardData={boardData} />}
      <BoardItem editMode={false} setModal={setModal} boardData={boardData} />
    </>
  );
};
