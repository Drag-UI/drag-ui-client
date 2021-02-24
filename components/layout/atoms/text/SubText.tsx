import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { StyledTextProps } from './textTypes';

const StyledSubText = styled.p<StyledTextProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.4rem')};

  ${(props) =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `}
`;

export interface SubTextProps {
  children: React.ReactNode;
  fontSize?: string;
  textAlign?: string;
}

const SubText = ({
  fontSize,
  textAlign,
  children,
}: SubTextProps): ReactElement => {
  return (
    <StyledSubText fontSize={fontSize} textAlign={textAlign}>
      {children}
    </StyledSubText>
  );
};

export default SubText;
