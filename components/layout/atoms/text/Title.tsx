import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { StyledTextProps } from './textTypes';

const StyledTitle = styled.h4<StyledTextProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '2rem')};
  font-weight: 600;

  ${(props) =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `}
`;

export interface TitleProps {
  children: React.ReactNode;
  fontSize?: string;
  textAlign?: string;
}

const Title = ({
  fontSize,
  children,
  textAlign,
  ...rest
}: TitleProps): ReactElement => {
  return (
    <StyledTitle fontSize={fontSize} textAlign={textAlign} {...rest}>
      {children}
    </StyledTitle>
  );
};

export default Title;
