import NavBar from "../../../components/NavBar";
import Header from "../../../components/Header";
import ImageFigure from "../../../components/ImageFigure";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function RoboRhythm() {
  return (
    <>
      <NavBar />
      <Header text="Robo Rhythm Game" />
      <Container>
        <div style={{ padding: "10px 0 0" }}>
          <p style={{ fontSize: "20px" }}>
            A talented young boy crafts one of the most potent volcano dioramas
            ever to exist: an instrument hot enough to burn a hole through the
            concept of willpower itself… and it’s gone. It’s up to you to turn
            the heat up! Equipped with a trusty sword, slice your way through
            swarms of robots as you climb up corporate floors, using the light
            of your beloved volcano to guide your way.
            <br />
            <br />
            The game is a rhythm game where the player has to destroy bots in
            conjunction with the beat of the song. Throughout the game, the
            player progresses the story through multiple cutscenes.
            <br />
            <br />
            This game was made by a team of three. I was responsible for
            organizing the development that lasted 5 weeks. I wrote the logic
            behind the beat system, sound systems, enemy logic, UI elements,
            saving system, settings system, various visual elements, and input
            system. The game won the first spot in the class competition.
            <br />
            <br />
            <b>Software:</b> Unity, Visual Studio, Perforce
            <br />
            <b>Languages:</b> C#
          </p>
        </div>
        <Button href="https://chromewax.itch.io/robo-rhythm" target="_blank">
          itch.io
        </Button>
      </Container>
      <ImageFigure image="RoboRythm/RoboRythm_2.png" text="Main gameplay" />
      <ImageFigure image="RoboRythm/RoboRythm_3.png" text="Cutscene" />
      <ImageFigure image="RoboRythm/RoboRythm_4.png" text="Main menu" />
      <ImageFigure image="RoboRythm/RoboRythm_5.png" text="Level select" />
      <Footer />
    </>
  );
}

export default RoboRhythm;
