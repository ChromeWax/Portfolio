import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import CardButton from "../components/CardButton";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";

enum Category {
  all,
  programming,
  render,
}

interface Card {
  category: Category;
  image: string;
  text: string;
  link: string;
}

function Projects() {
  const availableCards: Card[] = [
    {
      category: Category.programming,
      image: "Portfolio/Portfolio_1.png",
      text: "Portfolio Website",
      link: "#Portfolio",
    },
    {
      category: Category.programming,
      image: "Botography/Botography_1.png",
      text: "Botography Game",
      link: "#Botography",
    },
    {
      category: Category.programming,
      image: "RoboRythm/RoboRythm_1.png",
      text: "Robo Rythm Game",
      link: "#RoboRythm",
    },
    {
      category: Category.render,
      image: "Apothecary/Apothecary_Room_1.jpg",
      text: "Apothecary Room",
      link: "#Apothecary",
    },
    {
      category: Category.programming,
      image: "LanternFall/LanternFall_1.png",
      text: "LanternFall Website",
      link: "#LanternFall",
    },
    {
      category: Category.programming,
      image: "FishNChips/FishNChips_1.jpg",
      text: "Fish 'N' Chips Game",
      link: "#FishNChips",
    },
    {
      category: Category.render,
      image: "Realism/Realism_1.jpg",
      text: "Realism",
      link: "#Realism",
    },
    {
      category: Category.programming,
      image: "Lock/Lock_1.png",
      text: "Lock via Display and Touch Sensor",
      link: "#Lock",
    },
    {
      category: Category.render,
      image: "Neon Bar/Neon_Bar_1.jpg",
      text: "Neon Bar",
      link: "#NeonBar",
    },
    {
      category: Category.render,
      image: "WWI Trench/WWI_Trench_1.jpg",
      text: "WWI Trench",
      link: "#WWITrench",
    },
    {
      category: Category.render,
      image: "Beach/Beach_1.jpg",
      text: "Beach",
      link: "#Beach",
    },
    {
      category: Category.programming,
      image: "Homelab/Homelab_1.jpg",
      text: "Home Lab w/ Discord Bot",
      link: "#HomeLab",
    },
    {
      category: Category.render,
      image: "Still Life/StillLife_1.jpg",
      text: "Still Life",
      link: "#StillLife",
    },
    {
      category: Category.render,
      image: "Nintendo Switch/Switch_1.jpg",
      text: "Nintendo Switch",
      link: "#Switch",
    },
    {
      category: Category.render,
      image: "ChromePhone/ChromePhone_1.jpg",
      text: "ChromePhone 5C",
      link: "#ChromePhone",
    },
    {
      category: Category.render,
      image: "Gameboy/Gameboy_1.jpg",
      text: "Game Boy",
      link: "#GameBoy",
    },
  ];

  const [visibleCards, setVisibleCards] = useState([...availableCards]);
  const [currentCategory, setCurrentCategory] = useState(Category.all);

  const setVisibleCardsToCategory = (category: Category) => {
    let newVisibleCards: Card[] = [];
    availableCards.forEach((availableCard) => {
      if (category === Category.all) {
        newVisibleCards.push(availableCard);
      } else if (availableCard.category == category) {
        newVisibleCards.push(availableCard);
      }
    });
    setVisibleCards(newVisibleCards);
  };

  return (
    <>
      <NavBar />
      <Header text="Projects" />
      <Container fluid="md" className="mt-3">
        <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
          <Button
            variant={
              currentCategory === Category.all ? "primary" : "outline-primary"
            }
            onClick={() => {
              setCurrentCategory(Category.all);
              setVisibleCardsToCategory(Category.all);
            }}
          >
            All
          </Button>
          <Button
            variant={
              currentCategory === Category.programming
                ? "primary"
                : "outline-primary"
            }
            onClick={() => {
              setCurrentCategory(Category.programming);
              setVisibleCardsToCategory(Category.programming);
            }}
          >
            Programming
          </Button>
          <Button
            variant={
              currentCategory === Category.render
                ? "primary"
                : "outline-primary"
            }
            onClick={() => {
              setCurrentCategory(Category.render);
              setVisibleCardsToCategory(Category.render);
            }}
          >
            3D Render
          </Button>
        </div>
      </Container>
      <Container fluid="md" className="mt-3">
        <Row xs={1} md={3} className="g-2">
          {Array.from({ length: visibleCards.length }).map((_, idx) => (
            <Col key={idx}>
              <CardButton
                image={visibleCards[idx].image}
                text={visibleCards[idx].text}
                link={visibleCards[idx].link}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Projects;
