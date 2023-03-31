import React from 'react'
import {  Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
          <Nav className="mx-5 ">
          <Nav.Link as={Link} to="/">Users</Nav.Link>
          </Nav>

      </Navbar>
    </div>
  )
}

export default Header