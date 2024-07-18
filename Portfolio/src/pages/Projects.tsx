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
  art,
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
      image: "",
      text: "Portfolio Website",
      link: "asdf",
    },
    {
      category: Category.programming,
      image: "",
      text: "Botography Game",
      link: "asdf",
    },
    {
      category: Category.programming,
      image: "",
      text: "Robo Rythm Game",
      link: "asdf",
    },
    {
      category: Category.art,
      image: "Apothecary/Apothecary_Room_1.jpg",
      text: "Apothecary Room",
      link: "Apothecary",
    },
    {
      category: Category.programming,
      image: "",
      text: "LanternFall Website",
      link: "asdf",
    },
    {
      category: Category.programming,
      image: "",
      text: "Fish 'N' Chips Game",
      link: "asdf",
    },
    {
      category: Category.art,
      image: "Realism/Realism_1.jpg",
      text: "Realism",
      link: "Realism",
    },
    {
      category: Category.art,
      image: "Neon Bar/Neon_Bar_1.jpg",
      text: "Neon Bar",
      link: "NeonBar",
    },
    {
      category: Category.art,
      image: "WWI Trench/WWI_Trench_1.jpg",
      text: "WWI Trench",
      link: "WWITrench",
    },
    {
      category: Category.art,
      image: "Beach/Beach_1.jpg",
      text: "Beach",
      link: "Beach",
    },
    {
      category: Category.programming,
      image: "",
      text: "Homelab w/ Discord Bot",
      link: "ChromePhone",
    },
    {
      category: Category.art,
      image: "Still Life/StillLife_1.jpg",
      text: "Still Life",
      link: "StillLife",
    },
    {
      category: Category.art,
      image: "Nintendo Switch/Switch_1.jpg",
      text: "Nintendo Switch",
      link: "Switch",
    },
    {
      category: Category.art,
      image: "ChromePhone/ChromePhone_1.jpg",
      text: "ChromePhone 5C",
      link: "ChromePhone",
    },
    {
      category: Category.art,
      image: "Gameboy/Gameboy_1.jpg",
      text: "Game Boy",
      link: "GameBoy",
    },
  ];

  const [visibleCards, setVisibleCards] = useState([...availableCards]);
  const [currentCategory, setCurrentCategory] = useState(Category.all);

  const setVisibleCardsToCategory = (category: Category) => {
    let newVisibleCards: Card[] = []
    availableCards.forEach((availableCard) => {
      if (category === Category.all) {
        newVisibleCards.push(availableCard)
      } else if (availableCard.category == category) {
        newVisibleCards.push(availableCard)
      }
    });
    setVisibleCards(newVisibleCards);
  };

  return (
    <>
      <NavBar />
      <Header text="Projects" />
      <Container fluid="md" className="mt-3">
        <Button
          variant={
            currentCategory === Category.all ? "primary" : "outline-primary"
          }
          onClick={() => {
            setCurrentCategory(Category.all)
            setVisibleCardsToCategory(Category.all)
          }}
        >
          All
        </Button>{" "}
        <Button
          variant={
            currentCategory === Category.programming ? "primary" : "outline-primary"
          }
          onClick={() => {
            setCurrentCategory(Category.programming)
            setVisibleCardsToCategory(Category.programming)
          }}
        >
          Programming
        </Button>{" "}
        <Button
          variant={
            currentCategory === Category.art ? "primary" : "outline-primary"
          }
          onClick={() => {
            setCurrentCategory(Category.art)
            setVisibleCardsToCategory(Category.art)
          }}
        >
          Art
        </Button>{" "}
      </Container>
      <Container fluid="md" className="mt-3">
        <Row xs={1} md={3} className="g-2">
          {Array.from({ length: visibleCards.length }).map((_, idx) => (
            <Col key={idx}>
              <CardButton image={visibleCards[idx].image} text={visibleCards[idx].text} link={visibleCards[idx].link}/>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default Projects;
