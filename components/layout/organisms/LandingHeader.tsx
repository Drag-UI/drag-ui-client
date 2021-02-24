import { ReactElement } from 'react';
import Logo from '../atoms/anchor/Logo';
import styled from 'styled-components';

const Block = styled.div`
  position: fixed;
  z-index: 100;
`;
const Header = (): ReactElement => {
  return (
    <Block>
      <Logo />
    </Block>
  );
};

export default Header;
