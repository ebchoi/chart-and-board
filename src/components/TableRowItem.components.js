import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/Theme';
import { showDateOnly } from '../utils/formatDate';

export const TableRowItem = ({ index, boardData, onClick }) => {
  const { title, userName, createdAt } = boardData;
  const { seconds } = createdAt;

  return (
    <StyledTableRow onClick={onClick}>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{userName}</td>
      <td>{showDateOnly(seconds)}</td>
    </StyledTableRow>
  );
};

const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${colors.gray};

  &:hover {
    background-color: ${colors.gray};
  }
  > td {
    padding: 10px;
    text-align: center;

    :nth-of-type(2) {
      max-width: 50%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: left;
    }
  }
`;
