import { ReactElement } from "react";
import Link from "next/link";
import styles from "styled-components";

const Block = styles.div`
  background: #FFAC4F;
  display: inline-block;
  padding: 10px 30px;
  border-radius: 0px 0px 12px 12px;

  a {
    color: white;
    font-size: 27px;
    font-weight: 900;
    text-decoration: none;
  }
  `;

const LogoButton = (): ReactElement => {
  return (
    <Block>
      <Link href="/">Drag UI</Link>
    </Block>
  );
};

export default LogoButton;
