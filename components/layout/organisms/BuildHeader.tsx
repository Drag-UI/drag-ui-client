import { ReactElement } from 'react';
import BuildPageHeaderLogo from '../molecules/BuildPageHeaderLogo';
import BuildHeaderButton from '../atoms/button/BuildHeaderButton';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  background: #033f68;
  box-shadow: 0 0 4px rgb(0 0 0 / 12%), 0 2px 4px rgb(0 0 0 / 20%);
  padding: 8px 10px;
  display: flex;
  align-items: center;
  z-index: 3;
`;

const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 310px;
`;

const buttonProps = [
  {
    style: 'edit',
    innerText: 'Edit',
  },
  {
    style: 'preview',
    innerText: 'Preview',
  },
  {
    style: 'download',
    innerText: 'Download',
  },
  {
    style: 'delete',
    innerText: '',
  },
];

const BuildHeader = (): ReactElement => {
  return (
    <HeaderBlock>
      <BuildPageHeaderLogo />
      <ButtonsBlock>
        {buttonProps.map((ele) => (
          <BuildHeaderButton
            key={`button-${ele.style}`}
            style={ele.style}
            innerText={ele.innerText}
          />
        ))}
      </ButtonsBlock>
    </HeaderBlock>
  );
};

export default BuildHeader;
