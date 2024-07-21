import NavBar from "../../../components/NavBar";
import Header from "../../../components/Header";
import ImageFigure from "../../../components/ImageFigure";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function FishNChips() {
  return (
    <>
      <NavBar />
      <Header text="Fish 'N' Chips" />
      <Container>
        <div style={{ padding: "10px 0 0" }}>
          <p style={{ fontSize: "20px" }}>
            A fisherman must find his cat “Chips”. Take up the challenge, swing
            through the levels, and save your friend!
            <br />
            <br />
            The game is a platformer where the player swings through the
            environment while avoiding projectiles. Throughout the game, the
            player progresses the story through multiple cutscenes.
            <br />
            <br />
            This game was made by a team of four where I led development. I was
            primarily responsible for developing the logic of swinging mechanic,
            sound systems, cutscenes, ui elements, and some traps.
            <br />
            <br />
            <b>Software:</b> Unity, Visual Studio, Perforce
            <br />
            <b>Languages:</b> C#
          </p>
        </div>
        <Button
          href="https://store.steampowered.com/app/1953000/Fish_N_Chips/"
          target="_blank"
        >
          Steam
        </Button>{" "}
        <Button href="https://chromewax.itch.io/fish-n-chips" target="_blank">
          itch.io (Slightly old)
        </Button>
      </Container>
      <ImageFigure
        image="FishNChips/FishNChips_2.png"
        text="Player shoots a rope into wall"
      />
      <ImageFigure image="FishNChips/FishNChips_3.jpg" text="Cutscene" />
      <ImageFigure
        image="FishNChips/FishNChips_4.jpg"
        text="Player on moving platform"
      />
      <ImageFigure
        image="FishNChips/FishNChips_5.jpg"
        text="Swinging between moving platforms"
      />
      <Footer />
    </>
  );
}

export default FishNChips;
