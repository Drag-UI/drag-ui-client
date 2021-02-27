import Link from 'next/link';
import { ReactElement } from 'react';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

import Title from '../atoms/text/Title';

const Block = styled.div`
  background-image: url('/images/footer-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  height: 500px;
`;

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 200px;
`;

const ContentBlock = styled.div`
  margin-top: 100px;
  flex: 1;
  display: flex;

  & > div + div {
    margin-left: 30%;
  }
`;

const LogoBlock = styled.div`
  font-family: 'lobster';
`;

const IconItem = styled.div`
  margin-top: 40px;
  font-size: 3rem;
`;

const SuppotBlock = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 2rem;
  & > * + * {
    margin-top: 20px;
  }
`;

const StyledGitIcon = styled(FaGithub)`
  cursor: pointer;
`;

const LandingFooter = (): ReactElement => {
  return (
    <Block>
      <Wrapper>
        <ContentBlock>
          <LogoBlock>
            <Title fontSize="3.5rem">Drag UI</Title>
            <IconItem>
              <Link href="https://github.com/Drag-UI/drag-ui-client">
                <StyledGitIcon />
              </Link>
            </IconItem>
          </LogoBlock>
          <SuppotBlock>
            <Title>Support</Title>
            <Link href="#">Contact Us</Link>
            <Link href="#">Wiki</Link>
          </SuppotBlock>
        </ContentBlock>
      </Wrapper>
    </Block>
  );
};

export default LandingFooter;
