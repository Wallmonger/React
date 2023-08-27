import {Container, Row, Col, Button} from 'react-bootstrap';


const Welcome = () => {
    return (
        <Container fluid="md">
            
                <Button variant="outline-primary" size="sm">Salut</Button>
            
            <Row>
                <Col xs={3} md={4} style={{backgroundColor : 'blue'}}>Column 1</Col>
                <Col xs={6} md={4} style={{backgroundColor : 'green'}}>Coluumn 2</Col>
                <Col xs={3} md={4} style={{backgroundColor : 'yellow'}}>Column 3</Col>
            </Row>
        </Container>
    )
}

export default Welcome;