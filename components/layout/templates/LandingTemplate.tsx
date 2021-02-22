/* eslint-disable @typescript-eslint/no-var-requires */
import { ReactElement } from "react";
import LandingTitle from "../organisms/LandingTitle";
import LandingNavButton from "../atoms/button/LandingNavButton";
import styles from "styled-components";

const Block = styles.div`
  height: 100vh;
  width: 100vw;
  background-image: url("/images/background.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const ButtonsBlock = styles.div`
  display: flex;
  justify-content: space-around;
  width: 650px;
  margin: 0 auto;
`;

const LandingLayout = (): ReactElement => {
  return (
    <Block>
      <LandingTitle />
      <ButtonsBlock>
        <LandingNavButton style="start" innerText="GET STARTED !" />
        <LandingNavButton style="repo" innerText="VISIT GIT REPO" />
      </ButtonsBlock>
    </Block>
  );
};

export default LandingLayout;
