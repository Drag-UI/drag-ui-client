/* eslint-disable @typescript-eslint/no-var-requires */
import { ReactElement } from 'react';
import LandingTitle from '../organisms/LandingTitle';
import LandingNavButton from '../atoms/anchor/LandingNavButton';
import Header from '../organisms/LandingHeader';
import LandingFeature from '../organisms/LandingFeature';
import styled from 'styled-components';
import LandingDescription from '../organisms/LandingDescription';

const Block = styled.div``;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MainBlock = styled.div`
  height: 100vh;
  background-image: url('/images/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  clip-path: polygon(0 0, 100% 0, 100% 84%, 0 100%);
`;

const MainSpaceBlock = styled.div`
  height: 70px;
`;

const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-around;
  width: 490px;
  margin: 0 auto;
`;

const FeatureBlock = styled.div`
  margin-top: 10rem;
`;

interface ButtonProp {
  style: string;
  innerText: string;
}

interface LandingTemplateProps {
  buttonProps: ButtonProp[];
}

const LandingTemplate = ({
  buttonProps,
}: LandingTemplateProps): ReactElement => {
  return (
    <Block>
      <Wrapper>
        <Header />
      </Wrapper>
      <MainBlock>
        <Wrapper>
          <MainSpaceBlock />
          <LandingTitle />
          <ButtonsBlock>
            {buttonProps.map((ele) => (
              <LandingNavButton
                key={`button-${ele.style}`}
                style={ele.style}
                innerText={ele.innerText}
              />
            ))}
          </ButtonsBlock>
          <FeatureBlock>
            <LandingFeature />
          </FeatureBlock>
        </Wrapper>
      </MainBlock>
      <Wrapper>
        <LandingDescription />
      </Wrapper>
    </Block>
  );
};

export default LandingTemplate;
