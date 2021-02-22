/* eslint-disable @typescript-eslint/no-var-requires */
import { ReactElement } from "react";
import LandingTitle from "../organisms/LandingTitle";
import LandingNavButton from "../atoms/button/LandingNavButton";
import Header from "../organisms/Header";
import styles from "styled-components";

const Block = styles.div`
  height: 100vh;
  width: 100vw;
  background-image: url("/images/background.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styles.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentBlock = styles.div`
  padding-top: 135px;
`;

const ButtonsBlock = styles.div`
  display: flex;
  justify-content: space-around;
  width: 550px;
  margin: 0 auto;
`;

const LandingLayout = (): ReactElement => {
  return (
    <Block>
      <Wrapper>
        <Header />
        <ContentBlock>
          <LandingTitle />
          <ButtonsBlock>
            <LandingNavButton style="start" innerText="GET STARTED !" />
            <LandingNavButton style="repo" innerText="VISIT GIT REPO" />
          </ButtonsBlock>
        </ContentBlock>
      </Wrapper>
    </Block>
  );
};

export default LandingLayout;
