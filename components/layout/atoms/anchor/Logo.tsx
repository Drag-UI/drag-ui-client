import { ReactElement } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Block = styled.div`
  background: #ffac4f;
  display: inline-block;
  padding: 10px 30px;
  border-radius: 0px 0px 12px 12px;

  a {
    font-size: 27px;
    font-weight: 900;
    text-decoration: none;
    font-family: 'Lobster';
    color: #095da3;
  }
`;

const LogoButton = (): ReactElement => {
  return (
    <Block>
      <Link href="/">Drag UI</Link>
    </Block>
  );
};

export default LogoButton;
