import NavBar from "../../../components/NavBar";
import Header from "../../../components/Header";
import ImageFigure from "../../../components/ImageFigure";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Apothecary() {
  return (
    <>
      <NavBar />
      <Header text="Apothecary Room" />
      <Container>
        <div style={{ padding: "10px 0 0" }}>
          <p style={{ fontSize: "20px" }}>
            The theme was an apothecary room that took place in an attic. I did
            all the lighting, layout, and composition for these shots. I also
            handled the creation of the glass jars, books, chair, some of the
            candles, mug, glasses, cauldron, and the room itself. Additional
            models from a group project were then used to further help the
            theme.
            <br/>
            <br/>
            <b>Software:</b> Maya, Redshift, Blender, Substance 3D Painter, Photoshop
          </p>
        </div>
        <Button href="https://richardvo.artstation.com/projects/29oLva" target="_blank">
          ArtStation
        </Button>
      </Container>
      <ImageFigure image="Apothecary/Apothecary_Room_1.jpg" text="Main angle" />
      <ImageFigure image="Apothecary/Apothecary_Room_2.jpg" text="Second angle" />
      <ImageFigure image="Apothecary/Apothecary_Room_3.jpg" text="Third angle" />
      <ImageFigure image="Apothecary/Apothecary_Room_4.jpg" text="In progress shot" />
      <ImageFigure image="Apothecary/Apothecary_Room_5.jpg" text="Bottles models" />
      <ImageFigure image="Apothecary/Apothecary_Room_6.jpg" text="Book models" />
      <Footer />
    </>
  );
}

export default Apothecary;
