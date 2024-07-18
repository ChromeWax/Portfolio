import NavBar from "../../../components/NavBar";
import Header from "../../../components/Header";
import ImageFigure from "../../../components/ImageFigure";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Beach() {
  return (
    <>
      <NavBar />
      <Header text="Beach" />
      <Container>
        <div style={{ padding: "10px 0 0" }}>
          <p style={{ fontSize: "20px" }}>
            Created a natural environment using Quixel. Used only Unreal Engine.
            In the end, created a render that looks fairly realistic and has an
            interesting composition.
            <br />
            <br />
            <b>Software:</b> Unreal Engine 4
          </p>
        </div>
        <Button
          href="https://richardvo.artstation.com/projects/ykBmXJ"
          target="_blank"
        >
          ArtStation
        </Button>
      </Container>
      <ImageFigure image="Beach/Beach_1.jpg" text="Shot 1" />
      <ImageFigure image="Beach/Beach_2.jpg" text="Shot 2" />
      <ImageFigure image="Beach/Beach_3.jpg" text="Shot 3" />
      <ImageFigure image="Beach/Beach_4.jpg" text="UE4 screenshot" />
      <Footer />
    </>
  );
}

export default Beach;
