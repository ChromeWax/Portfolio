import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";

interface VideoFigureProp {
  video: string;
  text: string;
}

function VideoFigure({ video, text }: VideoFigureProp) {
  return (
    <>
      <Container className="mt-3">
        <Figure>
          <video
            controls
            autoPlay
            loop
            muted
            style={{
              width: "100vw",
              maxWidth: "100%",
              borderRadius: "10px",
            }}
          >
            <source src={video} type="video/mp4" />
          </video>
          <Figure.Caption style={{ textAlign: "center", fontSize: "18px" }}>
            {text}
          </Figure.Caption>
        </Figure>
      </Container>
    </>
  );
}

export default VideoFigure;
