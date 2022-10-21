import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../styles/Theme';
import { Heading } from './_index.components';

export const BoardItem = ({ boardData, setModal }) => {
  const { id, title, createdAt, content, updatedAt } = boardData;
  const navigate = useNavigate();

  function handleDelete(boardId) {
    const data = JSON.parse(sessionStorage.getItem('data'));
    const filteredBoardDatas = data.filter(
      data => data.id !== parseInt(boardId)
    );
    sessionStorage.setItem('data', JSON.stringify([...filteredBoardDatas]));
    navigate('/board');
  }

  return (
    <StyledArticle>
      <Heading type="h3" hidden>
        게시글 상세보기
      </Heading>
      <h4>{title}</h4>

      {updatedAt > createdAt ? (
        <time dateTime={updatedAt}>{updatedAt}</time>
      ) : (
        <time dateTime={createdAt}>{createdAt}</time>
      )}
      <StyledTextArea
        readOnly
        placeholder="내용을 입력해주세요"
        name="content"
        id="content"
        cols="30"
        rows="10"
        defaultValue={content}
      />
      <ButtonWrapper>
        <button
          onClick={() => {
            setModal(true);
          }}
        >
          수정
        </button>
        <button onClick={() => handleDelete(id)}>삭제</button>
      </ButtonWrapper>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  > h4 {
    padding: 10px 0;
    font-size: 1.5rem;
    font-weight: bolder;
  }
  > time {
    padding: 5px 0;
    color: ${colors.darkgray};
    font-size: 1rem;
  }
`;

const StyledTextArea = styled.textarea`
  margin: 0 0 10px 0;
  font-size: 1rem;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  > button {
    padding: 10px 20px;
    border: 1px solid ${colors.gray};
    border-radius: 15px;
    background-color: ${colors.gray};
    font-size: 1.3rem;
  }
`;
