import NavBar from "../../../components/NavBar";
import Header from "../../../components/Header";
import ImageFigure from "../../../components/ImageFigure";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function NeonBar() {
  return (
    <>
      <NavBar />
      <Header text="Neon Bar" />
      <Container>
        <div style={{ padding: "10px 0 0" }}>
          <p style={{ fontSize: "20px" }}>
            Converted a 2D image into a realistic render. Used Blender,
            Substance Designer, and Photoshop. In the end, created a render that
            looks fairly realistic and is interesting. All textures and models
            are created by me.
            <br />
            <br />
            <b>Software:</b> Blender, Photoshop
          </p>
        </div>
        <Button
          href="https://richardvo.artstation.com/projects/AqgNNy"
          target="_blank"
        >
          ArtStation
        </Button>
      </Container>
      <ImageFigure image="Neon Bar/Neon_Bar_1.jpg" text="Final shot" />
      <ImageFigure image="Neon Bar/Neon_Bar_2.jpg" text="Clay" />
      <ImageFigure image="Neon Bar/Neon_Bar_3.jpg" text="Old render" />
      <ImageFigure image="Neon Bar/Neon_Bar_4.jpg" text="Original aspiration (Did not make this)" />
      <Footer />
    </>
  );
}

export default NeonBar;
