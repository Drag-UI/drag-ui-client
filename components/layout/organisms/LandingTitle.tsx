import { ReactElement } from "react";
import styles from "styled-components";

const Block = styles.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;

  img {
    width : 95px;
  }

  h1 {
    font-family: 'Lobster';
    color: white;
    font-size: 6rem;
    padding-bottom: 2.5rem;
  }

  h3 {
    font-family: 'Lobster';
    color: white;
    font-size: 2rem;
  }
`;

const MainTitle = (): ReactElement => {
  return (
    <Block>
      <img src="/images/logo.png" alt="" />
      <h1>Drag UI!</h1>
      <h3>Create your frontend code quickly with our simple tools</h3>
    </Block>
  );
};

export default MainTitle;
