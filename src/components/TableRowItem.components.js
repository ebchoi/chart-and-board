import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/Theme';
import { formatDate } from '../utils/formatDate';

export const TableRowItem = ({ boardData, onClick }) => {
  const { id, title, userName, createdAt, updatedAt } = boardData;

  return (
    <StyledTableRow onClick={onClick}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{userName}</td>
      <td>
        {updatedAt > createdAt ? formatDate(updatedAt) : formatDate(createdAt)}
      </td>
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

    :first-of-type {
    }
    :nth-of-type(2) {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: left;
    }
    :nth-of-type(3) {
    }
    :last-of-type {
    }
  }
`;
