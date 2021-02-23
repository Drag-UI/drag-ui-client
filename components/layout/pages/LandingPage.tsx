import { ReactElement } from 'react';
import LandingTemplate from '../templates/LandingTemplate';

const LandingPage = (): ReactElement => {
  const buttonProps = [
    {
      style: 'start',
      innerText: 'GET STARTED !',
    },
    {
      style: 'repo',
      innerText: 'VISIT GIT REPO',
    },
  ];
  return (
    <>
      <LandingTemplate buttonProps={buttonProps} />
    </>
  );
};

export default LandingPage;
