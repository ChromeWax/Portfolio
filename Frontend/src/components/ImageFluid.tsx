import Image from 'react-bootstrap/Image';

interface ImageFluidProp {
    image: string
}

function ImageFluid({image}: ImageFluidProp) {
  return <Image src={image} fluid />;
}

export default ImageFluid;