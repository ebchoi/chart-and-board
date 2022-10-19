import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors, device } from '../styles/Theme';

export const BoardEdit = ({ boardData, setModal }) => {
  const { id, title, userName, content, createdAt } = boardData;
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [formData, setFormData] = useState({
    title: title,
    content: content,
  });
  const navigate = useNavigate();

  function handleInput(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'title' && formData.title !== value) {
      setButtonDisabled(false);
    }
    if (name === 'content' && formData.content !== value) {
      setButtonDisabled(false);
    }
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
          <fieldset>
            <label htmlFor="title"> 제목: </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              required
              onChange={e => handleInput(e)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="content">내용:</label>
            <StyledTextArea
              required
              name="content"
              id="content"
              cols="30"
              rows="10"
              defaultValue={content}
              onChange={e => handleInput(e)}
            />
          </fieldset>
          <StyledButton type="submit" disabled={buttonDisabled}>
            수정하기
          </StyledButton>
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
  padding: 20px;
  width: 80%;
  height: auto;
  background-color: ${colors.white};
  border-radius: 5px;
  z-index: 10;

  ${device.desktop} {
    padding: 20px;
    width: 50%;
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  > fieldset {
    display: flex;
    flex-direction: column;

    > input {
      padding: 10px;
      border: 1px solid ${colors.gray};
      :focus:valid {
        border: 2px dashed ${colors.darkgray};
      }
      :focus:invalid {
        border: 3px dashed red;
      }
    }
  }
`;

const StyledTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid ${colors.gray};

  :focus:valid {
    border: 3px dashed ${colors.darkgray};
  }
  :focus:invalid {
    border: 3px dashed red;
  }
`;

const StyledButton = styled.button`
  height: 40px;
  background-color: ${colors.gray};
  border: none;
  border-radius: 10px;

  :hover {
    background-color: ${colors.darkgray};
    color: ${colors.white};
  }

  :disabled {
    background-color: ${colors.gray};
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
