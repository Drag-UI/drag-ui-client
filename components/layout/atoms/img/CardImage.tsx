import { ReactElement } from 'react';

export interface CardImageProps {
  src: string;
  alt: string;
  width: string;
  height?: string;
}

const CardImage = ({
  src,
  alt,
  width,
  height,
  ...rest
}: CardImageProps): ReactElement => {
  return <img src={src} alt={alt} width={width} height={height} {...rest} />;
};

export default CardImage;
