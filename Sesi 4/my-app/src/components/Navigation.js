import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#qtemu">QTemu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Create Meetup</Nav.Link>
            <Nav.Link>Explore</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link right>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
