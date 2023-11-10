// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { FaShoppingCart, FaUser } from 'react-icons/fa';

// const Header = () => {
//   return (
//     <header>
//       <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
//         <Container>
//           <Navbar.Brand href='/'>MERN Ecommerce</Navbar.Brand>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' />
//           {/* <Nav.Collapse id='basic-navbar-nav'>
//             <Nav className='mr-auto'>
//               <Nav.Link href='/cart'><FaShoppingCart /> Cart</Nav.Link>
//               <Nav.Link href='/login'><FaUser /> Sign In</Nav.Link>
//             </Nav>
//           </Nav.Collapse> */}
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;