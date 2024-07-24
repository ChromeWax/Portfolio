import NavBar from "../../../components/NavBar";
import Header from "../../../components/Header";
import ImageFigure from "../../../components/ImageFigure";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Botography() {
  return (
    <>
      <NavBar />
      <Header text="Botography Game" />
      <Container>
        <div style={{ padding: "10px 0 0" }}>
          <p style={{ fontSize: "20px" }}>
            Become a Botanist in Botography, a cozy 2D adventure-exploration
            game. Navigate an uncharted whimsical region, where plants have
            unique and fantastical properties. Gather materials, grow plants,
            and utilize their abilities to discover the mystery of the forest
            and the treasure that lies within!
            <br />
            <br />
            Plants gives the player special powers such as destroying obstacles,
            going underwater, traversing across different elevations, and
            enduring harsh environments. To find these plants, the player must
            experiment with different soil and water combinations or find
            recipes in notes scattered in the world.
            <br />
            <br />
            The game was worked by 16 people with 6 Computer Science, 8 Game
            Design, and 2 Sound Engineer students. One other and I led the
            development of the game's features with multiple scrums. I was
            mainly responsible for coding player movement, elevation traversal,
            various plant abilities, item stacking system, underwater system,
            and almanac system. I assisted in the placement system, saving
            system, settings system, and inventory system. I also worked to
            improve upon the art of the Game Design students by adding shadows,
            post-processing, blur effects, and more. The project ultimately won
            second place out of roughly 60 projects in the senior showcase.
            <br />
            <br />
            <b>Software:</b> Unity, Visual Studio, Perforce, Jira
            <br />
            <b>Languages:</b> C#
          </p>
        </div>
        <Button
          href="https://project-bitter-root.itch.io/botography"
          target="_blank"
        >
          itch.io
        </Button>{" "}
        <Button href="https://github.com/ChromeWax/Botography" target="_blank">
          GitHub
        </Button>
      </Container>
      <ImageFigure image="Botography/Botography_2.png" text="Front Page" />
      <ImageFigure
        image="Botography/Botography_3.png"
        text="Interacting with plant"
      />
      <ImageFigure
        image="Botography/Botography_4.png"
        text="Using a plant to traverse elevations"
      />
      <ImageFigure
        image="Botography/Botography_5.png"
        text="Using a plant to destory obstacles"
      />
      <ImageFigure
        image="Botography/Botography_6.png"
        text="Wearing various plant as equipment"
      />
      <ImageFigure
        image="Botography/Botography_7.png"
        text="Inventory screen"
      />
      <ImageFigure image="Botography/Botography_8.png" text="Crafting screen" />
      <ImageFigure image="Botography/Botography_9.png" text="Map screen" />
      <Footer />
    </>
  );
}

export default Botography;
