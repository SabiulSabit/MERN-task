import React, { Component, useEffect, useState } from 'react'
import { Table, Row, Container,Navbar,Nav } from 'react-bootstrap';

function NavBar(){
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Student Managment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#student">Student</Nav.Link>
            <Nav.Link href="#subject">Subject</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar> 
    )
}


export default NavBar;