import { FaRegHandPointer, FaGithub } from 'react-icons/fa';
import styled from 'styled-components';
import Link from 'next/link';

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
  width: 14rem;
  cursor: pointer;

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
