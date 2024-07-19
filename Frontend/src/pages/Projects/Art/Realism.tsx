import NavBar from "../../../components/NavBar";
import Header from "../../../components/Header";
import ImageFigure from "../../../components/ImageFigure";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Realism() {
  return (
    <>
      <NavBar />
      <Header text="Realism" />
      <Container>
        <div style={{ padding: "10px 0 0" }}>
          <p style={{ fontSize: "20px" }}>
            Rendered a scene as close as possible to a photo. Created multiple
            models, textures, and an hdri to get the result I wanted in the end.
            All work is mine.
            <br />
            <br />
            <b>Software:</b> Maya, Arnold, Blender, Substance 3D Painter, Photoshop
          </p>
        </div>
        <Button href="https://richardvo.artstation.com/projects/nYxxdr" target="_blank">
          ArtStation
        </Button>
      </Container>
      <ImageFigure image="Realism/Realism_1.jpg" text="Final render" />
      <ImageFigure image="Realism/Realism_2.jpg" text="Wireframe" />
      <ImageFigure image="Realism/Realism_3.jpg" text="Original photo" />
      <ImageFigure image="Realism/Realism_4.jpg" text="AOVs" />
      <Footer />
    </>
  );
}

export default Realism;
