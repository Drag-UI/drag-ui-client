import { ReactElement } from 'react';
import styled from 'styled-components';

const StyledSubText = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;

interface SubTextProps {
  children: React.ReactNode;
}

const SubText = ({ children }: SubTextProps): ReactElement => {
  return <StyledSubText>{children}</StyledSubText>;
};

export default SubText;
