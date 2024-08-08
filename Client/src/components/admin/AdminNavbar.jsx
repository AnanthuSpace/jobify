import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AdminNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="w-100">
        <Container>
          <Navbar.Brand href="#home" className="font-weight-bold ">
            JOBIFY
          </Navbar.Brand>
          <Nav className="ms-auto"></Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
