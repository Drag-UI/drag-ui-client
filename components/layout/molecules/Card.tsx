import Title from '../atoms/card/Title';
import SubText from '../atoms/card/SubText';
import CardImage, { CardImageProps } from '../atoms/card/CardImage';
import styled from 'styled-components';
import { ReactElement } from 'react';

const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 17rem;
  align-items: center;
  padding: 0 4rem;
`;

const StyledCardImage = styled(CardImage)`
  padding-bottom: 2rem;
`;

const StyledTitle = styled(Title)`
  padding-bottom: 1rem;
`;

interface CardProps extends CardImageProps {
  title: string;
  subTitle: string;
}

const Card = ({ src, alt, title, subTitle }: CardProps): ReactElement => {
  return (
    <CardBlock>
      <StyledCardImage src={src} alt={alt} />
      <StyledTitle>{title}</StyledTitle>
      <SubText>{subTitle}</SubText>
    </CardBlock>
  );
};

export default Card;
