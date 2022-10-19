import { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/Theme";

export const Post = ({ setModal }) => {
  const [inputValue, setInputValue] = useState({
    title: "",
    content: "",
    athor: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const buttonDisabled = !(
    inputValue.title.length >= 1 && inputValue.athor.length >= 1
  );

  const handleSubmit = () => {
    sessionStorage.setItem(
      "data",
      JSON.stringify([
        {
          id: JSON.parse(sessionStorage.getItem("data")).length + 1,
          userName: inputValue.athor,
          title: inputValue.title,
          content: inputValue.content,
          createdAt: new Date().toLocaleString("sv").slice(0, 10),
          updatedAt: "",
        },
        ...JSON.parse(sessionStorage.getItem("data")),
      ])
    );
  };

  return (
    <ModalWrappar>
      <SubModal onClick={() => setModal(false)} />
      <Modal>
        <PostWrappar onSubmit={handleSubmit}>
          <Title>제목</Title>
          <PostTitle
            name="title"
            value={inputValue.title}
            onChange={handleChange}
          />
          <Athor>작성자</Athor>
          <PostAthor
            name="athor"
            value={inputValue.athor}
            onChange={handleChange}
          />
          <PostContent
            type="text"
            name="content"
            value={inputValue.content}
            onChange={handleChange}
          />
          <PostSend disabled={buttonDisabled} type="submit">
            게시하기
          </PostSend>
        </PostWrappar>
      </Modal>
    </ModalWrappar>
  );
};

export const ModalWrappar = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
export const SubModal = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${colors.midalGray};
`;

export const Modal = styled.div`
  display: flex;
  position: relative;
  width: 400px;
  height: 55%;
  padding: 10px;
  background-color: ${colors.white};
  border-radius: 5px;
  z-index: 10;
`;
export const PostWrappar = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PostTitle = styled.input`
  margin: 5px;
  width: 50%;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const PostAthor = styled.input`
  width: 50%;
  margin: 5px;
`;
export const Athor = styled.h1`
  font-size: 20px;
`;
export const PostContent = styled.textarea`
  width: 100%;
  height: 95%;
`;

export const PostSend = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${colors.gray};
  border: none;
  border-radius: 5px;
  font-size: 20px;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
