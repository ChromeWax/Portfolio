import NavBar from "../components/NavBar";
import Header from "../components/Header";
import ImageFluid from "../components/ImageFluid";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <NavBar />
      <Header text="About" />
      <Container fluid="sm">
        <Carousel fade>
          <Carousel.Item>
            <ImageFluid image="Personal/Carousel_1.jpg" />
            <Carousel.Caption>
              <h3>Next to Drexel Dragon</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ImageFluid image="Personal/Carousel_2.jpg" />
            <Carousel.Caption>
              <h3>Graduation Commencement</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ImageFluid image="Personal/Carousel_3.jpg" />
            <Carousel.Caption>
              <h3>Senior Project Members</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container>
        <div style={{ padding: "10px 0" }}>
          <h1 style={{ textAlign: "center" }}>Hello there!</h1>
          <p style={{ fontSize: "20px" }}>
            I recently graduated Summa Cum Laude from Drexel University with a
            Bachelor's Degree in Computer Science and a minor in Animation and
            Visual Effects. Additionally, I completed the Honors program at
            Pennoni Honors College. I am passionate about creating projects that
            have a meaningful impact, whether through computer programs, art
            pieces, or writings. I have always been fascinated by the
            progression of technology and am eager to contribute to its
            advancement.
          </p>
        </div>
      </Container>
      <Container>
        <Button href="https://www.linkedin.com/in/csrichardvo/" target="_blank">
          LinkedIn
        </Button>{" "}
        <Button href="https://www.artstation.com/richardvo" target="_blank">
          ArtStation
        </Button>{" "}
      </Container>
      <Footer/>
    </>
  );
}

export default About;
