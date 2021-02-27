import { ReactElement } from 'react';
import LayoutHeaderLogo from '../atoms/anchor/LayoutHeaderLogo';
import styled from 'styled-components';

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 45px;

  img {
    width: 35px;
    padding-right: 5px;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 25px;
    font-family: 'Lobster';
  }
`;

const LayoutPageHeaderLogo = (): ReactElement => {
  return (
    <HeaderLogo>
      <img src="/images/logo.png" alt="logo" />
      <LayoutHeaderLogo />
    </HeaderLogo>
  );
};

export default LayoutPageHeaderLogo;
