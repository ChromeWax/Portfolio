import NavBar from "../../../components/NavBar";
import Header from "../../../components/Header";
import ImageFigure from "../../../components/ImageFigure";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function GameBoy() {
  return (
    <>
      <NavBar />
      <Header text="Game Boy" />
      <Container>
        <div style={{ padding: "10px 0 0" }}>
          <p style={{ fontSize: "20px" }}>
            Create a low poly but highly realistic Gameboy. Used Maya and
            Substance Painter for this project. In the end, made an object that
            can be used in video games and is available to download at
            Sketchfab. All the modeling and texturing of the Gameboy are mine.
            <br />
            <br />
            <b>Software:</b> Unreal Engine 4, Maya, Substance 3D Painter
          </p>
        </div>
        <Button
          href="https://richardvo.artstation.com/projects/XnnJr3"
          target="_blank"
        >
          ArtStation
        </Button>{" "}
        <Button
          href="https://sketchfab.com/3d-models/original-gameboy-8c63084ac04e467788002c30dc63a038"
          target="_blank"
        >
          SketchFab
        </Button>
      </Container>
      <ImageFigure image="Gameboy/Gameboy_1.jpg" text="Final shot" />
      <ImageFigure image="Gameboy/Gameboy_2.jpg" text="Texture flats" />
      <ImageFigure image="Gameboy/Gameboy_3.jpg" text="Physical Game Boy" />
      <Footer />
    </>
  );
}

export default GameBoy;
