import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Contact() {
  const [newsletterEmailAddress, setNewsletterEmailAddress] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [messageNewsletter, setmessageNewsletter] = useState("");
  const [messageEmail, setMessageEmail] = useState("");

  const addNewsLetter = () => {
    let value = {
      email: newsletterEmailAddress,
    };

    fetch(`http://127.0.0.1:8000/newsletter/add/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify(value),
    }).then(async function (response) {
      if (response.status === 200) {
        setmessageNewsletter("Successfully added email!");
      } else if (response.status === 401) {
        setmessageNewsletter("Email already added");
      } else {
        setmessageNewsletter("Something went wrong");
      }
    });
  };

  const removeNewsLetter = () => {
    let value = {
      email: newsletterEmailAddress,
    };

    fetch(`http://127.0.0.1:8000/newsletter/remove/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify(value),
    }).then(async function (response) {
      if (response.status === 200) {
        setmessageNewsletter("Successfully deleted email!");
      } else if (response.status === 401) {
        setmessageNewsletter("Email already unsubscribed");
      } else {
        setmessageNewsletter("Something went wrong");
      }
    });
  };

  const sendEmail = () => {
    console.log(emailAddress, emailBody);
    setMessageEmail("Sent email!");
  };

  return (
    <>
      <NavBar />
      <Header text="Contact" />
      <Container>
        <div style={{ padding: "20px 0 0 0" }}>
          <h1 style={{ textAlign: "center" }}>Related Links</h1>
          <p style={{ fontSize: "20px", textAlign: "center" }}>
            Feel free to connect with me on LinkedIn!
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
          <Button
            href="https://www.linkedin.com/in/csrichardvo/"
            target="_blank"
          >
            LinkedIn
          </Button>{" "}
          <Button href="https://github.com/ChromeWax/" target="_blank">
            GitHub
          </Button>{" "}
          <Button href="https://www.artstation.com/richardvo" target="_blank">
            ArtStation
          </Button>{" "}
        </div>
      </Container>
      <Container>
        <div style={{ padding: "20px 0 0 0" }}>
          <h1 style={{ textAlign: "center" }}>Newsletter</h1>
          <p style={{ fontSize: "20px", textAlign: "center" }}>
            Get an email whenever I make something new!
          </p>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setNewsletterEmailAddress(e.target.value);
              }}
            />
          </Form.Group>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "5px" }}
          >
            <Button variant="primary" onClick={addNewsLetter}>
              Add email
            </Button>{" "}
            <Button variant="primary" onClick={removeNewsLetter}>
              Unsubscribe
            </Button>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "5px" }}
          >
            {messageNewsletter !== "" && (
              <p style={{ marginTop: "5px" }}>{messageNewsletter}</p>
            )}
          </div>
        </Form>
      </Container>
      <Container>
        <div style={{ padding: "20px 0 0 0" }}>
          <h1 style={{ textAlign: "center" }}>Email Me</h1>
          <p style={{ fontSize: "20px", textAlign: "center" }}>
            I will respond within 3 days
          </p>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control onChange={(e) => setEmailAddress(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setEmailBody(e.target.value)}
            />
          </Form.Group>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "5px" }}
          >
            <Button variant="primary" onClick={sendEmail}>
              Send Email
            </Button>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "5px" }}
          >
            {messageEmail !== "" && (
              <p style={{ marginTop: "5px" }}>{messageEmail}</p>
            )}
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
