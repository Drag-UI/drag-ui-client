import { ReactElement } from 'react';
import HelpModal from '../molecules/HelpModal';
import { FiPlusCircle } from 'react-icons/fi';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  margin: 4px 0px;
  cursor: pointer;
`;

const TitleLeft = styled.div`
  display: flex;
  align-items: center;

  svg {
    padding-right: 7px;
    color: white;
    font-size: 20px;
    position: relative;
    bottom: 2px;
  }
`;

const TitleRight = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 16px;
    color: white;
    position: relative;
    bottom: 2px;
  }
`;

const ListTitle = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  h3 {
    color: white;
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

const ToolBarCategory = ({
  innerTitle,
}: {
  innerTitle: string;
}): ReactElement => {
  return (
    <List>
      <ListTitle>
        <TitleLeft>
          <FiPlusCircle />
          <h3>{innerTitle}</h3>
        </TitleLeft>
        <TitleRight>
          <BsFillQuestionCircleFill />
        </TitleRight>
        <HelpModal />
      </ListTitle>
    </List>
  );
};

export default ToolBarCategory;
