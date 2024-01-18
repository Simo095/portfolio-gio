import { Container, Nav, Navbar } from "react-bootstrap";

const TopNavBar = () => {
  return (
    <Navbar
      style={{ height: "5vh" }}
      expand="lg"
      className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="https://giolaghetto.netlify.app/">Giovanni Laghetto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://giolaghetto.netlify.app/">Home</Nav.Link>
            <Nav.Link href="https://giolaghetto.netlify.app/iam">Who I am</Nav.Link>
            <Nav.Link href="https://giolaghetto.netlify.app/somework">Some Work</Nav.Link>
            <Nav.Link href="https://giolaghetto.netlify.app/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default TopNavBar;
