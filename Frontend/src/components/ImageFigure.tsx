import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";

interface ImageFigure {
  image: string;
  text: string;
}

function ImageFigure({ image, text }: ImageFigure) {
  return (
    <>
      <Container className="mt-3">
        <Figure>
          <Figure.Image
            style={{
              width: "80rem",
              height: "auto",
              borderRadius: "10px"
            }}
            src={image}
          />
          <Figure.Caption style={{ textAlign: "center", fontSize: "18px" }}>
            {text}
          </Figure.Caption>
        </Figure>
      </Container>
    </>
  );
}

export default ImageFigure;
