import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { render } from '@testing-library/react';
import PostForm from './Component/PostForm'
import SubjectAdd from './Component/SubjectAdd'
import StudentData from './Component/StudentData'
import SubjectData from './Component/SubjectData'
import Navbar from './Component/NavBar'
import { Table, Row, Container } from 'react-bootstrap';



function App() {


  return (
    <Container>
      
      <Row md={12}>
        <div className="">
          <Navbar></Navbar>
        </div>
      </Row>

      <Row md={12} id="student">
        <div className="tableDiv">
          <PostForm></PostForm>
        </div>
      </Row>

     <hr />

     
          <StudentData>

          </StudentData>

      <hr />

      <Row md={12} id="subject"  >
        <div className="tableDiv">
          <SubjectAdd></SubjectAdd>
        </div>
      </Row>
      <hr />

      <Row md={12}  >
        <div className="tableDiv">
          <SubjectData></SubjectData>
        </div>
      </Row>
     
       
    </Container>

  );
}




export default App;
