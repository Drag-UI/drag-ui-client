import { FaRegHandPointer, FaGithub } from "react-icons/fa";
import styles from "styled-components";

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
const Button = styles.button`
  background-color : ${(props) =>
    props.color === "start" ? "#FFAC4F" : "#1BBC6F"};
    
  color: white;
  outline: none;
  border: none;
  padding: 15px 32px;
  border-radius: 110px;
  font-weight: 600;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 17rem;

  svg {
    font-size: 2rem;
  }
`;

//* =================
//*   Render
//* =================
const MainButton = ({ innerText, style }: ButtonProps): JSX.Element => {
  return (
    <>
      <Button type="button" color={style}>
        {style === "start" ? <FaRegHandPointer /> : <FaGithub />}
        {innerText}
      </Button>
    </>
  );
};

export default MainButton;
