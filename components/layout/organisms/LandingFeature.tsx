import { ReactElement } from 'react';
import styled from 'styled-components';
import FeatureCard from '../molecules/FeatureCard';
import checkIcon from '../../../public/images/icons/check-icon.png';
import cssIcon from '../../../public/images/icons/css-icon.png';
import htmlIcon from '../../../public/images/icons/html-icon.png';
import layoutIcon from '../../../public/images/icons/layout-icon.png';

const LandingFeatureBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LandingFeature = (): ReactElement => {
  return (
    <LandingFeatureBlock>
      <FeatureCard
        title="레이아웃 생성"
        subTitle="쉽고 빠르게 시맨틱한 HTML 레이아웃을 구현해보세요!"
        src={layoutIcon}
      />
      <FeatureCard
        title="감각적인 UI"
        subTitle="쉽고 빠르게 시맨틱한 HTML 레이아웃을 구현해보세요!"
        src={checkIcon}
      />
      <FeatureCard
        title="To HTML"
        subTitle="쉽고 빠르게 시맨틱한 HTML 레이아웃을 구현해보세요!"
        src={htmlIcon}
      />
      <FeatureCard
        title="To CSS"
        subTitle="쉽고 빠르게 시맨틱한 HTML 레이아웃을 구현해보세요!"
        src={cssIcon}
      />
    </LandingFeatureBlock>
  );
};

export default LandingFeature;
