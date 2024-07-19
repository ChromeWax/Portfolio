import NavBar from "../../../components/NavBar";
import Header from "../../../components/Header";
import ImageFigure from "../../../components/ImageFigure";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Switch() {
  return (
    <>
      <NavBar />
      <Header text="Nintendo Switch" />
      <Container>
        <div style={{ padding: "10px 0 0" }}>
          <p style={{ fontSize: "20px" }}>
            Closely replicated a Nintendo Switch. To create it I used Maya and
            Photoshop. In the end, made an object that can be used for product
            shots and is available to download at Sketchfab. All the modeling
            and texturing of the switch are mine.
            <br />
            <br />
            <b>Software:</b> Blender, Unreal Engine 4, Maya, Arnold, Substance
            3D Painter, Substance 3D Designer
          </p>
        </div>
        <Button
          href="https://richardvo.artstation.com/projects/qA1YRP"
          target="_blank"
        >
          ArtStation Link
        </Button>{" "}
        <Button
          href="https://sketchfab.com/3d-models/worn-nintendo-switch-low-quality-available-39945fa1c71d4095ae82b2dd1901d03f"
          target="_blank"
        >
          SketchFab
        </Button>
      </Container>
      <ImageFigure image="Nintendo Switch/Switch_3.jpg" text="Final shot" />
      <ImageFigure image="Nintendo Switch/Switch_4.jpg" text="Back shot" />
      <ImageFigure image="Nintendo Switch/Switch_5.jpg" text="Comped into real photo" />
      <ImageFigure image="Nintendo Switch/Switch_6.jpg" text="Body wireframe WIP" />
      <ImageFigure image="Nintendo Switch/Switch_7.jpg" text="Joycon wireframe WIP" />
      <ImageFigure image="Nintendo Switch/Switch_8.jpg" text="Body texture flats" />
      <ImageFigure image="Nintendo Switch/Switch_9.jpg" text="Left joycon texture flats" />
      <ImageFigure image="Nintendo Switch/Switch_10.jpg" text="Right joycon texture flats" />
      <Footer />
    </>
  );
}

export default Switch;
