import { Container } from "react-bootstrap";

interface HeaderProp {
  text: string;
}

function Header({ text }: HeaderProp) {
  return (
    <>
      <h1
        className="text-center fw-bold"
        style={{ backgroundColor: "gray", padding: "40px 0", color: "white" }}
      >
        {text}
      </h1>
    </>
  );
}

export default Header;
