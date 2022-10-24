import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../styles/Theme';
import { showDateOnly } from '../utils/formatDate';

export const TableRowItem = ({ index, boardData, onClick }) => {
  const { title, user, createdAt } = boardData;
  const { seconds } = createdAt;

  return (
    <StyledTableRow onClick={onClick}>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{user}</td>
      <td>{showDateOnly(seconds)}</td>
    </StyledTableRow>
  );
};

const StyledTableRow = styled.tr`
  width: 100%;
  border-bottom: 1px solid ${colors.gray};
  display: grid;
  grid-template-columns: 50px 1fr 120px;
  grid-template-rows: auto;
  grid-template-areas:
    ' index title user'
    ' index title date';

  > td {
    padding: 10px;
    text-align: center;
    :nth-of-type(1) {
      grid-area: index;
      align-self: center;
    }
    :nth-of-type(2) {
      grid-area: title;
      width: 100%;
      align-self: center;
      justify-self: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: left;
    }
    :nth-of-type(3) {
      grid-area: user;
    }
    :nth-of-type(4) {
      grid-area: date;
    }
  }

  td + td {
    border-left: 1px dashed ${colors.gray};
  }
  &:hover {
    background-color: ${colors.darkgray};
    border: 2px dotted ${colors.white};
    color: ${colors.white};
    cursor: pointer;
  }

  ${device.desktop} {
    grid-template-columns: 50px 1fr 100px 120px;
    grid-template-areas: 'index title user date';
  }
`;
