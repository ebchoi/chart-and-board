import styled from 'styled-components';
import { colors } from '../styles/Theme';

export const BoardItem = ({ boardData, editMode, setModal }) => {
  const { title, createdAt, content, updatedAt } = boardData;
  return editMode ? (
    <ModalWrapper>
      <BackgroundLayer onClick={() => setModal(false)} />
      <Modal>
        <StyledForm>
          <h3>{title}</h3>

          {updatedAt > createdAt ? (
            <time dateTime={updatedAt}>{updatedAt}</time>
          ) : (
            <time dateTime={createdAt}>{createdAt}</time>
          )}

          <label htmlFor="content">내용:</label>
          <StyledTextArea
            required
            placeholder="내용을 입력해주세요"
            name="content"
            id="content"
            cols="30"
            rows="10"
            defaultValue={content}
          />
          <button>글쓰기</button>
        </StyledForm>
      </Modal>
    </ModalWrapper>
  ) : (
    <StyledArticle>
      <h3>{title}</h3>

      {updatedAt > createdAt ? (
        <time dateTime={updatedAt}>{updatedAt}</time>
      ) : (
        <time dateTime={createdAt}>{createdAt}</time>
      )}
      <label htmlFor="content">내용:</label>
      <StyledTextArea
        readOnly
        placeholder="내용을 입력해주세요"
        name="content"
        id="content"
        cols="30"
        rows="10"
        defaultValue={content}
      />
      <button
        onClick={() => {
          setModal(true);
        }}
      >
        수정
      </button>
      <button>삭제</button>
    </StyledArticle>
  );
};

const ModalWrapper = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const BackgroundLayer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${colors.midalGray};
`;

const Modal = styled.div`
  display: flex;
  position: relative;
  width: 400px;
  height: 55%;
  padding: 10px;
  background-color: ${colors.white};
  border-radius: 5px;
  z-index: 10;
`;

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
    background-color: #f0f0f0;
  }
  :focus:invalid {
    border: 3px dashed red;
  }
`;
