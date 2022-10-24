import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase';
import { colors, device } from '../styles/Theme';
import { Heading } from '../components/_index.components';
import { Post } from './Post.pages';
import { BoardTable } from '../containers/BoardTable.containers';

export const Table = () => {
  const [database, setDatabase] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'board'), orderBy('createdAt', 'desc'));
    onSnapshot(q, querySnapshot => {
      setDatabase(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      {modal && <Post setModal={setModal} />}
      <Heading type="h2">게시판</Heading>

      <BoardTable boardDatas={database} />
      <TextWrite onClick={() => setModal(true)}>글쓰기</TextWrite>
    </>
  );
};

const TextWrite = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 100px;
  height: 50px;
  color: ${colors.white};
  background-color: ${colors.darkgray};
  border: none;
  border-radius: 5px;
  font-size: 25px;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  ${device.desktop} {
    top: 50px;
    right: 50px;
  }
`;
