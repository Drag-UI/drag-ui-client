import { ReactElement } from 'react';
import Logo from '../atoms/anchor/Logo';
import styled from 'styled-components';

const Block = styled.div`
  position: fixed;
`;
const Header = (): ReactElement => {
  return (
    <Block>
      <Logo />
    </Block>
  );
};

export default Header;
