import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors, device } from '../styles/Theme';

export const BoardItem = ({ editMode }) => {
  const [boardItemData, setBoardItemData] = useState([]);
  // const boardComponentType = {
  //   form: StyledForm,
  //   read: StyledArticle,
  //   update: StyledForm,
  // };
  // const BoardComponent = boardComponentType[boardMode];

  useEffect(() => {});

  return editMode ? (
    <StyledForm>
      <h3>제목</h3>
      <time dateTime="1990-07-07">1990-07-07</time>
      <label htmlFor="content">내용:</label>
      <StyledTextArea
        required
        placeholder="내용을 입력해주세요"
        name="content"
        id="content"
        cols="30"
        rows="10"
      />
      <button>글쓰기</button>
    </StyledForm>
  ) : (
    <StyledArticle>
      <h3>제목</h3>
      <time dateTime="1990-07-07">1989-07-02</time>
      <label htmlFor="content">내용:</label>
      <StyledTextArea
        readOnly
        placeholder="내용을 입력해주세요"
        name="content"
        id="content"
        cols="30"
        rows="10"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam vel
        reprehenderit voluptatem eaque? Aliquid, veniam explicabo dolorem odio
        exercitationem impedit fugiat at rem neque? Possimus libero itaque hic
        cum voluptatem."
      />
      <button>수정</button>
      <button>삭제</button>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledTextArea = styled.textarea`
  :focus:valid {
    background-color: skyblue;
  }
  :focus:invalid {
    border: 3px dashed red;
  }
`;
