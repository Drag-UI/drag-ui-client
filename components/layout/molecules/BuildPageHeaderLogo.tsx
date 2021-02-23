import { ReactElement } from 'react';
import BuildHeaderLogo from '../atoms/anchor/BuildHeaderLogo';
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

const BuildPageHeaderLogo = (): ReactElement => {
  return (
    <HeaderLogo>
      <img src="/images/logo.png" alt="logo" />
      <BuildHeaderLogo />
    </HeaderLogo>
  );
};

export default BuildPageHeaderLogo;
