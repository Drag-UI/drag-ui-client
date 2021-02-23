import { ReactElement } from 'react';
import BuildHeader from '../organisms/BuildHeader';
import styled from 'styled-components';

const TemplateBlock = styled.div`
  height: 100vh;
  width: 100vw;
`;

const BuildTemplate = (): ReactElement => {
  return (
    <TemplateBlock>
      <BuildHeader />
      template
    </TemplateBlock>
  );
};

export default BuildTemplate;
