import { ReactElement } from "react";
import Logo from "../atoms/anchor/Logo";
import styles from "styled-components";

const Block = styles.div`
  position: fixed;
`;
const Header = (): ReactElement => {
  return (
    <Block>
      <Logo />
    </Block>
  );
};

export default Header;
