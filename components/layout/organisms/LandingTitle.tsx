import { ReactElement } from 'react';
import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;

  img {
    width: 95px;
  }

  h1 {
    font-family: 'Lobster';
    color: white;
    font-size: 12rem;
    padding-bottom: 5rem;
  }

  h3 {
    font-family: 'Lobster';
    color: white;
    font-size: 4.2rem;
    border: 3px dashed rgba(255,255,255,.5);
    padding: 15px 24px;
}
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
