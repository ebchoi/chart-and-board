import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../styles/Theme';

export const BoardEdit = ({ boardData, setModal }) => {
  const { id, title, userName, content, createdAt } = boardData;
  const [formData, setFormData] = useState({
    title: title,
    content: content,
  });
  const navigate = useNavigate();

  function handleInput(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleEdit(e) {
    e.preventDefault();
    const datas = JSON.parse(sessionStorage.getItem('data'));

    const idArray = datas.map(item => item.id);
    const lastId = Math.max(...idArray);

    const filteredBoardDatas = datas.filter(data => data.id !== parseInt(id));

    sessionStorage.setItem(
      'data',
      JSON.stringify([
        {
          id: parseInt(lastId + 1),
          userName: userName,
          title: formData.title,
          content: formData.content,
          createdAt: createdAt,
          updatedAt: new Date().toLocaleString('sv').slice(0, 19),
        },
        ...filteredBoardDatas,
      ])
    );
    navigate(`/board/${lastId + 1}`);
    setModal(false);
  }

  return (
    <ModalWrapper>
      <BackgroundLayer onClick={() => setModal(false)} />
      <Modal>
        <StyledForm onSubmit={handleEdit}>
          <label htmlFor="title"> 제목: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            required
            onChange={e => handleInput(e)}
          />

          <label htmlFor="content">내용:</label>
          <StyledTextArea
            required
            placeholder="내용을 입력해주세요"
            name="content"
            id="content"
            cols="30"
            rows="10"
            defaultValue={content}
            onChange={e => handleInput(e)}
          />
          <button type="submit">수정하기</button>
        </StyledForm>
      </Modal>
    </ModalWrapper>
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
  width: 80%;
  height: 55%;
  padding: 10px;
  background-color: ${colors.white};
  border-radius: 5px;
  z-index: 10;
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
