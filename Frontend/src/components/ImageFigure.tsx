import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";

interface ImageFigureProp {
  image: string;
  text: string;
}

function ImageFigure({ image, text }: ImageFigureProp) {
  return (
    <>
      <Container className="mt-3" style={{width: "100%"}}>
        <Figure>
          <Figure.Image
            style={{
              width: "100vw",
              maxWidth: "100%",
              borderRadius: "10px",
            }}
            src={image}
            alt={text}
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
