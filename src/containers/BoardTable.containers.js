import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../styles/Theme';
import { Heading, TableRowItem } from '../components/_index.components';

export const BoardTable = ({ boardDatas, pageNationNumber }) => {
  const navigate = useNavigate();

  const goToUrl = (navigate, url) => {
    navigate(url);
  };
  return (
    <>
      <Heading type="h3" hidden>
        게시판 목록 테이블
      </Heading>
      <TableContainer>
        <StyledTableHead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
        </StyledTableHead>
        <tbody>
          {boardDatas.length >= 1 &&
            boardDatas.map((boardData, index) => {
              return (
                <TableRowItem
                  index={index}
                  onClick={() => goToUrl(navigate, `/board/${boardData.id}`)}
                  key={boardData.id}
                  boardData={boardData.data}
                />
              );
            })}
        </tbody>
      </TableContainer>
    </>
  );
};

const TableContainer = styled.table`
  table-layout: auto;
  width: 100%;
`;

const StyledTableHead = styled.thead`
  background-color: ${colors.gray};
  > tr > th {
    padding: 10px 0;
    font-weight: bolder;
    text-align: center;
  }
`;
