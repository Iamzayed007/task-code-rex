import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
         {/* <Nav as="ul">
      <Nav.Item >
        <Nav.Link as={Link} to="/">Users</Nav.Link>
      </Nav.Item>
    
    </Nav> */}
    <Navbar bg="light" variant="light">
        {/* <Container> */}
          <Nav className="mx-5 ">
          <Nav.Link as={Link} to="/">User</Nav.Link>
          </Nav>
        {/* </Container> */}
      </Navbar>
    </div>
  )
}

export default Header