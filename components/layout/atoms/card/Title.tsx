import { ReactElement } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h4`
  font-size: 2rem;
  font-weight: 600;
`;

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children, ...rest }: TitleProps): ReactElement => {
  return <StyledTitle {...rest}>{children}</StyledTitle>;
};

export default Title;
