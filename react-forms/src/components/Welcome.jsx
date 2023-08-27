import {Container, Row, Col, Card, Button} from 'react-bootstrap';


const Welcome = () => {
    return (
      <Container fluid="md mt-4">
        <Row>
          <Col>
            <p className="fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
              beatae aliquam quis nihil cum amet laboriosam in itaque suscipit
              voluptatem a soluta, ab enim? Aliquam veniam odit dolores quidem.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
              beatae aliquam quis nihil cum amet laboriosam in itaque suscipit
              voluptatem a soluta, ab enim? Aliquam veniam odit dolores quidem.
            </p>
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
              beatae aliquam quis nihil cum amet laboriosam in itaque suscipit
              voluptatem a soluta, ab enim? Aliquam veniam odit dolores quidem.
            </p>
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
              beatae aliquam quis nihil cum amet laboriosam in itaque suscipit
              voluptatem a soluta, ab enim? Aliquam veniam odit dolores quidem.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col lg="6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
              beatae aliquam quis nihil cum amet laboriosam in itaque suscipit
              voluptatem a soluta, ab enim? Aliquam veniam odit dolores quidem.
            </p>
          </Col>
          <Col lg="6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
              beatae aliquam quis nihil cum amet laboriosam in itaque suscipit
              voluptatem a soluta, ab enim? Aliquam veniam odit dolores quidem.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
            
          <Col lg="6">
                <Card>
                <Card.Img variant="top" src="/logo512.png" />
                <Card.Body>
                    <Card.Title>Test card 1</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
          </Col>

          <Col lg="6">
                <Card>
                <Card.Img variant="top" src="/logo512.png" />
                <Card.Body>
                    <Card.Title>Test card 2</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
          </Col>
        </Row>
      </Container>
    )
}

export default Welcome;