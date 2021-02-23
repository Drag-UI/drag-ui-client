/* eslint-disable @typescript-eslint/no-var-requires */
import { ReactElement } from 'react';
import LandingTitle from '../organisms/LandingTitle';
import LandingNavButton from '../atoms/button/LandingNavButton';
import Header from '../organisms/Header';
import LandingFeature from '../organisms/LandingFeature';
import styled from 'styled-components';

const Block = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('/images/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentBlock = styled.div`
  padding-top: 135px;
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
        <ContentBlock>
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
        </ContentBlock>
      </Wrapper>
    </Block>
  );
};

export default LandingTemplate;
