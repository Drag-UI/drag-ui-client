import { ReactElement } from 'react';
import styled from 'styled-components';
import description1 from '../../../public/images/description1.gif';
import SubText from '../atoms/text/SubText';
import Title from '../atoms/text/Title';
import DescriptionCard from '../molecules/DescriptionCard';

const Block = styled.div`
  margin-top: 100px;
  padding-bottom: 100px;
`;

const HeaderBlock = styled.div`
  padding-bottom: 50px;
`;

const ContentBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleBlock = styled.div`
  display: flex;
  font-family: 'Lobster';
  justify-content: center;
  font-weight: 700;
`;

const SubTextBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const DescriptionCardBlock = styled.div`
  width: 30%;

  & > div + div {
    padding-top: 75px;
  }
`;

const DescriptionImgBlock = styled.div`
  width: 60%;
  padding: 3rem;

  img {
    width: 100%;
    border-radius: 20px;
  }
`;

const LandingDescription = (): ReactElement => {
  return (
    <Block>
      <HeaderBlock>
        <TitleBlock>
          <Title fontSize="5rem">How does it work?</Title>
        </TitleBlock>
        <SubTextBlock>
          <SubText fontSize="2.4rem">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
            natus.
          </SubText>
        </SubTextBlock>
      </HeaderBlock>
      <ContentBlock>
        <DescriptionCardBlock>
          <DescriptionCard
            src={description1}
            title="Lorem Ipsum"
            subText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos repellat maiores quod laboriosam sequi qui possimus facilis consectetur vitae fuga."
            linkText="> GET STARTED"
          />
          <DescriptionCard
            src={description1}
            title="Lorem Ipsum"
            subText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos repellat maiores quod laboriosam sequi qui possimus facilis consectetur vitae fuga."
            linkText="> GET STARTED"
          />
        </DescriptionCardBlock>
        <DescriptionImgBlock>
          <img src={description1} alt="" />
        </DescriptionImgBlock>
      </ContentBlock>
    </Block>
  );
};

export default LandingDescription;
