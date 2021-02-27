import Link from 'next/link';
import { FaGithub, FaRegHandPointer } from 'react-icons/fa';
import styled from 'styled-components';

//? =================
//?   Interface
//? =================
interface ButtonProps {
  innerText: string;
  style: string;
}

//* =================
//*   Styles
//* =================
const Inline = styled.div`
  background-color: ${(props) =>
    props.color === 'start' ? '#FFAC4F' : '#1BBC6F'};

  color: white;
  outline: none;
  border: none;
  padding: 12px 25px;
  border-radius: 110px;
  font-weight: 600;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
  cursor: pointer;
  line-height: 1.1;

  svg {
    font-size: 2rem;
  }
`;

//* =================
//*   Render
//* =================
const LandingNavButton = ({ innerText, style }: ButtonProps): JSX.Element => {
  return (
    <>
      <Link href="/build">
        <Inline color={style}>
          {style === 'start' ? <FaRegHandPointer /> : <FaGithub />}
          {innerText}
        </Inline>
      </Link>
    </>
  );
};

export default LandingNavButton;
