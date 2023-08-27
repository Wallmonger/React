import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


const Template = () => {
    return (
      <Navbar
        bg="dark"
        variant="dark"
        // switch to menu mode on sm 
        expand="sm"
      >
        <Container>
            {console.log(Navbar)}
            <Navbar.Brand href="#home">
                <img 
                    src="/logo192.png"
                    width="30"
                    height="30"
                    className='d-inline-block align-top'
                    alt="logo react"
                    />
                    {" "}
                React bootstrap test
            </Navbar.Brand>
            
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Something</Nav.Link>
              <Nav.Link href="#link">Something else</Nav.Link>      
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Template;