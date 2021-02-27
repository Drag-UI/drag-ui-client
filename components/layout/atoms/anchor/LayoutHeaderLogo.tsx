import { ReactElement } from 'react';
import Link from 'next/link';

const LayoutHeaderLogo = (): ReactElement => {
  return (
    <>
      <Link href="/">Drag UI!</Link>
    </>
  );
};

export default LayoutHeaderLogo;
