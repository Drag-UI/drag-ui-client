import { ReactElement } from 'react';
import LayoutHeader from '../organisms/LayoutHeader';
import LayoutToolBar from '../organisms/LayoutToolBar';
import styled from 'styled-components';

const TemplateBlock = styled.div`
  height: 100vh;
  width: 100vw;
`;

const LayoutTemplate = (): ReactElement => {
  return (
    <TemplateBlock>
      <LayoutHeader />
      <LayoutToolBar />
    </TemplateBlock>
  );
};

export default LayoutTemplate;
