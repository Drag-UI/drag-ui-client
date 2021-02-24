import { ReactElement } from 'react';
import styled, { css } from 'styled-components';

const StyledSubText = styled.p`
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
