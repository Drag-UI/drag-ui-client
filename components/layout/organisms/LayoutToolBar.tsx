import { ReactElement } from 'react';
import styled from 'styled-components';
import ToolBarCategory from './ToolBarCategory';

const ToolBarBlock = styled.div<{ open: boolean }>`
  width: ${(props) => (props.open === true ? '175px' : '0px')};
  background: #05609e;
  top: 45px;
  bottom: 0;
  position: fixed;
  transition: 0.3s ease, border-color 0.3s ease;
  padding: 10px;
`;

const BuildToolBar = (): ReactElement => {
  return (
    <ToolBarBlock open={true}>
      <ToolBarCategory innerTitle="GRID LAYOUT" />
      <ToolBarCategory innerTitle="BASS CSS" />
      <ToolBarCategory innerTitle="COMPONENTS" />
      <ToolBarCategory innerTitle="GRID LAYOUT" />
    </ToolBarBlock>
  );
};

export default BuildToolBar;
