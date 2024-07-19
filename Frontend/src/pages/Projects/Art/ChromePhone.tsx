import NavBar from "../../../components/NavBar";
import Header from "../../../components/Header";
import ImageFigure from "../../../components/ImageFigure";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function ChromePhone() {
  return (
    <>
      <NavBar />
      <Header text="ChromePhone 5C" />
      <Container>
        <div style={{ padding: "10px 0 0" }}>
          <p style={{ fontSize: "20px" }}>
            Created an ad for an imaginary phone with a focus on some motion
            design and editing. Used some design choices from Derek Elliot.
            Heavily inspired by Apple. In the end, created a satisfying video
            that can work as a product advertisement. All work is mine.
            <br />
            <br />
            <b>Software:</b> Blender, Photoshop
          </p>
        </div>
        <Button
          href="https://richardvo.artstation.com/projects/OoXm1w"
          target="_blank"
        >
          ArtStation
        </Button>
      </Container>
      <ImageFigure image="ChromePhone/ChromePhone_1.jpg" text="Main shot" />
      <ImageFigure image="ChromePhone/ChromePhone_2.jpg" text="Back shot" />
      <ImageFigure image="ChromePhone/ChromePhone_3.jpg" text="Multiple colors" />
      <Footer />
    </>
  );
}

export default ChromePhone;
