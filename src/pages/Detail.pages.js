import styled from 'styled-components';
import { BoardItem } from '../components/_index.components';
import { commonStyles } from '../styles/Theme';

export const Detail = () => {
  return (
    <DetailContainer>
      <Subheading>글 쓰기, 수정, 삭제</Subheading>
      <BoardItem editMode={true} />
      <BoardItem editMode={false} />
    </DetailContainer>
  );
};

const DetailContainer = styled.div``;

const Subheading = styled.h2`
  ${commonStyles.visuallyHidden}
`;
