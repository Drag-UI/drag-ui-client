import { ReactElement } from 'react';
import styled from 'styled-components';

export interface CardImageProps {
  src: string;
  alt: string;
}

const StyledCardImage = styled.img`
  width: 75px;
  height: 75px;
`;

const CardImage = ({ src, alt, ...rest }: CardImageProps): ReactElement => {
  return <StyledCardImage src={src} alt={alt} {...rest} />;
};

export default CardImage;
