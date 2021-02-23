import { ReactElement } from 'react';
import styled from 'styled-components';
import { FaEdit, FaDownload } from 'react-icons/fa';
import { VscOpenPreview } from 'react-icons/vsc';
import { BsTrash } from 'react-icons/bs';

const handleIconType = (style: string): JSX.Element => {
  switch (style) {
    case 'edit':
      return <FaEdit />;
    case 'preview':
      return <VscOpenPreview />;
    case 'download':
      return <FaDownload />;
    case 'delete':
      return <BsTrash />;
    default:
      return <FaEdit />;
  }
};

const Button = styled.button`
  background-color: ${(props) =>
    props.color === 'delete' ? '#FF4B4B' : '#1bbc6f'};
  font-size: 15px;
  padding: 5px 10px;
  border-radius: 3px;
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;

  svg {
    padding-right: 3px;
  }
`;

//? =================
//?   Interface
//? =================
interface BuildHeaderButtonProps {
  innerText: string;
  style: string;
}

const BuildHeaderButton = ({
  innerText,
  style,
}: BuildHeaderButtonProps): ReactElement => {
  return (
    <>
      <Button color={style}>
        {handleIconType(style)}
        {innerText}
      </Button>
    </>
  );
};

export default BuildHeaderButton;
