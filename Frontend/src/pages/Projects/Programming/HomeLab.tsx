import NavBar from "../../../components/NavBar";
import Header from "../../../components/Header";
import ImageFigure from "../../../components/ImageFigure";
import Footer from "../../../components/Footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function HomeLab() {
  return (
    <>
      <NavBar />
      <Header text="Home Lab w/ Discord Bot" />
      <Container>
        <div style={{ padding: "10px 0 0" }}>
          <p style={{ fontSize: "20px" }}>
            This is my homelab that I use for my own DNS server, network wide ad
            blocker, Perforce Server, VPN, and more! I also use it to host
            different game servers my friends can connect to. These servers are
            managed by my Discord bot. The bot can update applications, backup
            files, and play music in Discord calls.
            <br />
            <br />
            I used VMware ESXI in the past to create virtual machines. However,
            the service is no longer free which made me switch to Proxmox.
            <br />
            <br />
            <b>Hypervisors:</b> Proxmox, VMware ESXI
            <br />
            <b>Services I use:</b> Perforce, OpenVPN, PiHole, Unbound, and
            various game servers
          </p>
        </div>
        <Button href="https://github.com/ChromeWax/DiscordBot" target="_blank">
          GitHub
        </Button>
      </Container>
      <ImageFigure
        image="Homelab/Homelab_1.jpg"
        text="Homelab setup (Old now, got newer hardware)"
      />
      <ImageFigure
        image="Homelab/Homelab_2.png"
        text="Services from Discord Bot"
      />
      <ImageFigure image="Homelab/Homelab_3.png" text="Bot in action" />
      <ImageFigure
        image="Homelab/Homelab_4.png"
        text="Bot as a music player in Discord calls"
      />
      <Footer />
    </>
  );
}

export default HomeLab;
