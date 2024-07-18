import Card from 'react-bootstrap/Card';

interface CardButtonProp {
    image: string;
    text: string;
    link: string;
}

function CardButton({image, text, link}: CardButtonProp) {
  return (
    <>
      <Card className='streched-link' style={{ cursor: "pointer" }}>
        <Card.Img variant="top" src={image} style={{ objectFit:"cover", aspectRatio:"1 / 1"}}/>
        <Card.Body>
          <Card.Text style={{textAlign:"center"}}>
            {text}
          </Card.Text>
        </Card.Body>
        <a href={link} className="stretched-link"></a>
      </Card>
    </>
  );
}

export default CardButton;