import Title from '../atoms/text/Title';
import SubText from '../atoms/text/SubText';
import CardImage from '../atoms/img/CardImage';
import styled from 'styled-components';
import { ReactElement } from 'react';

const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 17rem;
  align-items: center;
  line-height: 1.2;
`;

const StyledCardImage = styled(CardImage)`
  padding-bottom: 2rem;
`;

const StyledTitle = styled(Title)`
  padding-bottom: 1rem;
`;

interface FeatureCardProps {
  src: string;
  title: string;
  subTitle: string;
}

const FeatureCard = ({
  src,
  title,
  subTitle,
}: FeatureCardProps): ReactElement => {
  return (
    <CardBlock>
      <StyledCardImage src={src} alt="" width="75px" height="75px" />
      <StyledTitle textAlign="center">{title}</StyledTitle>
      <SubText textAlign="center">{subTitle}</SubText>
    </CardBlock>
  );
};

export default FeatureCard;
