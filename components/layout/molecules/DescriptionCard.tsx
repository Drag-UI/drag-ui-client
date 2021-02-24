import Link from 'next/link';
import { ReactElement } from 'react';
import styled from 'styled-components';
import CardImage from '../atoms/img/CardImage';
import SubText from '../atoms/text/SubText';
import Title from '../atoms/text/Title';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageBlock = styled.div`
  padding-bottom: 20px;
`;

const TitleBlock = styled.div`
  padding-bottom: 10px;
`;

const SubTextBlock = styled.div`
  padding-bottom: 10px;
  line-height: 1.5;
`;

const LinkBlock = styled.div`
  font-size: 1.6rem;
`;

interface DescriptionCardProps {
  src: string;
  title: string;
  subText: string;
  linkText: string;
}

const DescriptionCard = ({
  src,
  title,
  subText,
  linkText,
}: DescriptionCardProps): ReactElement => {
  return (
    <Block>
      <ImageBlock>
        <CardImage src={src} alt="" width="125px" height="125px" />
      </ImageBlock>
      <TitleBlock>
        <Title fontSize="2.5rem">{title}</Title>
      </TitleBlock>
      <SubTextBlock>
        <SubText fontSize="1.5rem">{subText}</SubText>
      </SubTextBlock>
      <LinkBlock>
        <Link href="#">{linkText}</Link>
      </LinkBlock>
    </Block>
  );
};

export default DescriptionCard;
