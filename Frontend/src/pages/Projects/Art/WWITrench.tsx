import NavBar from "../../../components/NavBar";
import Header from "../../../components/Header";
import ImageFigure from "../../../components/ImageFigure";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function WWITrench() {
  return (
    <>
      <NavBar />
      <Header text="WWI Trench" />
      <Container>
        <div style={{ padding: "10px 0 0" }}>
          <p style={{ fontSize: "20px" }}>
            Created a trench scene from WWI. Worked on lighting/composition to
            get a scene that is satisfying to look at and used Substance
            Designer to create some of the ground. All work is mine except the
            foliage and a ground texture.
            <br />
            <br />
            <b>Software:</b> Unreal Engine 4, Maya, Substance 3D Painter, Substance 3D Designer
          </p>
        </div>
        <Button
          href="https://richardvo.artstation.com/projects/RYk48X"
          target="_blank"
        >
          ArtStation
        </Button>
      </Container>
      <ImageFigure image="WWI Trench/WWI_Trench_1.jpg" text="Final shot" />
      <ImageFigure image="WWI Trench/WWI_Trench_3.jpg" text="Same picture in colored Form" />
      <ImageFigure image="WWI Trench/WWI_Trench_4.jpg" text="Substance Designer of ground" />
      <ImageFigure image="WWI Trench/WWI_Trench_5.jpg" text="Substance Painter of sandbag" />
      <Footer />
    </>
  );
}

export default WWITrench;
