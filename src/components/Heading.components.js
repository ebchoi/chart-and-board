import styled from 'styled-components';
import { commonStyles } from '../styles/Theme';

export const Heading = ({ type, hidden, children }) => {
  const { heading, visuallyHidden } = commonStyles;
  const component = {
    h1: StyledH1,
    h2: StyledH2,
    h3: StyledH3,
    h4: StyledH4,
  };
  const HeadingComponent = component[type];
  const selectedProp = hidden ? { visuallyHidden } : { heading };

  return <HeadingComponent {...selectedProp}>{children}</HeadingComponent>;
};

const StyledH1 = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  ${({ heading }) => heading && { ...heading }}
  ${({ visuallyHidden }) => visuallyHidden && { ...visuallyHidden }}
`;

const StyledH2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  ${({ heading }) => heading && { ...heading }}
  ${({ visuallyHidden }) => visuallyHidden && { ...visuallyHidden }}
`;

const StyledH3 = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  ${({ visuallyHidden }) => visuallyHidden && { ...visuallyHidden }}
`;

const StyledH4 = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  ${({ visuallyHidden }) => visuallyHidden && { ...visuallyHidden }}
`;
