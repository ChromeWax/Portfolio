import NavBar from "../../../components/NavBar";
import Header from "../../../components/Header";
import ImageFigure from "../../../components/ImageFigure";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Lock() {
  return (
    <>
      <NavBar />
      <Header text="Lock via Display and Touch Components" />
      <Container>
        <div style={{ padding: "10px 0 0" }}>
          <p style={{ fontSize: "20px" }}>
            The main goal of this project was to learn how to use embedded C to
            interact with various components. This project was about tapping the
            touch sensor the correct number of times per 5 second countdown. If
            the touch sensor was pressed the correct number of times, the
            display would turn green else red. I used a raspberry pi, a 1-wire
            device to store the combination of correct presses, a display to
            show countdown and final result, and a touch sensor for inputting
            combination.
            <br />
            <br />
            <b>Components:</b> Raspberry Pi 4, Display, 1-Wire, Touch Sensor
            <br />
            <b>Languages:</b> C
            <br />
            <b>Interfaces:</b> SPI, I2C, 1-Wire
          </p>
        </div>
        <Button href="https://github.com/ChromeWax/Lock_via_Touch_and_Display_Components" target="_blank">
          GitHub
        </Button>
      </Container>
      <ImageFigure image="Lock/Lock_2.gif" text="Project in action" />
      <Footer />
    </>
  );
}

export default Lock;
