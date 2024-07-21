import NavBar from "../../../components/NavBar";
import Header from "../../../components/Header";
import ImageFigure from "../../../components/ImageFigure";
import VideoFigure from "../../../components/VideoFigure";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function StillLife() {
  return (
    <>
      <NavBar />
      <Header text="Still Life" />
      <Container>
        <div style={{ padding: "10px 0 0" }}>
          <p style={{ fontSize: "20px" }}>
            Rendered a still life photo. Used Zbrush, Maya, and Substance
            Painter. Also worked on getting good lighting to elevate the art
            piece. In the end, created a render that can end up in the "Still
            Life" category and be satisfying to look at. All work is mine.
            <br />
            <br />
            <b>Software:</b> Blender, Unreal Engine 4, Maya, Zbrush, Substance 3D Painter
          </p>
        </div>
        <Button
          href="https://richardvo.artstation.com/projects/zAbEDQ"
          target="_blank"
        >
          ArtStation
        </Button>
      </Container>
      <ImageFigure image="Still Life/StillLife_1.jpg" text="Remade shot in Blender" />
      <VideoFigure video="Still Life/StillLife_3.mp4" text="Video in UE4" />
      <ImageFigure image="Still Life/StillLife_2.jpg" text="Original shot in UE4" />
      <ImageFigure image="Still Life/StillLife_4.jpg" text="Experimental render" />
      <ImageFigure image="Still Life/StillLife_5.jpg" text="Texture flats" />
      <Footer />
    </>
  );
}

export default StillLife;
