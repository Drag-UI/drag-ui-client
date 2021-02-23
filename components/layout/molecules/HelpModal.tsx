import { ReactElement } from 'react';
import styled from 'styled-components';

const HelpModalBlock = styled.div`
  position: absolute;
  right: -251px;
  background: #ffffff;
  border-top: 1px solid #d1d1d1;
  border-right: 1px solid #d1d1d1;
  border-bottom: 1px solid #d1d1d1;
  width: 220px;
  height: 93px;
  border-radius: 0px 5px 5px 0px;
  padding: 10px;
  color: #b6b6b6;
  top: -15px;

  h2 {
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 5px;
  }
  p {
    font-size: 13px;
  }
`;

const FakeBlock = styled.div`
  width: 15px;
  height: 15px;
  background: #ffffff;
  position: absolute;
  left: -6px;
  transform: rotateZ(45deg);
  z-index: -1;
  top: 8px;
`;

const HelpModal = (): ReactElement => {
  return (
    <HelpModalBlock>
      <FakeBlock></FakeBlock>
      <h2>Help</h2>
      <p>
        Drag and Drop the elements inside the columns where you want to insert
        it. And from there, you can configure the style of that element. If you
        need more info please visi
      </p>
    </HelpModalBlock>
  );
};

export default HelpModal;
