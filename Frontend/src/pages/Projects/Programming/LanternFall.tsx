import NavBar from "../../../components/NavBar";
import Header from "../../../components/Header";
import ImageFigure from "../../../components/ImageFigure";
import VideoFigure from "../../../components/VideoFigure";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function LanternFall() {
  return (
    <>
      <NavBar />
      <Header text="LanternFall Website" />
      <Container>
        <div style={{ padding: "10px 0 0" }}>
          <p style={{ fontSize: "20px" }}>
            Worked with 4 engineers to create a website that raised awareness of
            the invasive species known as lantern flies. On the website, you can
            post whenever you kill a lanternfly with a title, text, and image.
            The post will then show up as a pin on google maps. This project
            was with 4 engineers in total where my main responsibility was
            writing the code for the server and setting up the database. The
            main look of the website was based on the TV trope of hacking.
            <br />
            <br />
            <b>Languages:</b> Javascript, HTML, CSS
            <br />
            <b>Tools:</b> Node.js, PostgreSQL, Express.js, Anime.js, Google Maps
            API
            <br />
            <b>Deployment:</b> Google Cloud Platform, Cloudflare
          </p>
        </div>
        <Button href="https://github.com/ChromeWax/LanternFall" target="_blank">
          GitHub
        </Button>
      </Container>
      <VideoFigure
        video="LanternFall/LanternFall_2.mp4"
        text="Walkthrough of website"
      />
      <ImageFigure image="LanternFall/LanternFall_3.png" text="Map view" />
      <Footer />
    </>
  );
}

export default LanternFall;
