import NavBar from "../../../components/NavBar";
import Header from "../../../components/Header";
import ImageFigure from "../../../components/ImageFigure";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Portfolio() {
  return (
    <>
      <NavBar />
      <Header text="Portfolio Website" />
      <Container>
        <div style={{ padding: "10px 0 0" }}>
          <p style={{ fontSize: "20px" }}>
            You're using it right now! I Wanted to create a website that housed
            all my projects. That includes programming, 3D art, drawings, and
            writing. Instead of using a template from Squarespace, decided to
            code it all using the React framework.
            <br />
            <br />
            <b>Software:</b> Visual Studio Code
            <br />
            <b>Languages:</b> Typescript, HTML, CSS
            <br />
            <b>Tools:</b> React, Bootstrap, Django, MongoDB
            <br />
            <b>Deployment:</b> AWS S3, AWS EC2, AWS CloudFront
          </p>
        </div>
        <Button href="https://github.com/ChromeWax/Portfolio" target="_blank">
          GitHub
        </Button>
      </Container>
      <ImageFigure image="Portfolio/Portfolio_2.png" text="Front Page" />
      <Footer />
    </>
  );
}

export default Portfolio;
