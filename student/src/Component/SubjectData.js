import React, { Component, useEffect, useState } from 'react'
import { Table, Row, Container } from 'react-bootstrap';

function Subject() {
    const [subject, setUser] = useState([]);
    useEffect(() => {
      fetch('http://localhost:8000/api/showsubject')
        .then(res => res.json())
        .then(data => { setUser(data) });
    }, [])
    // render() {
  
    if (subject.length == 0) {
      return (
        <h2>No data</h2>
      )
    }
    else {
      return (
        <div>
          <h3 className="text-center">Total Subject: {subject.length}</h3>
  
          <Table striped bordered hover responsive="md" className="text-center">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Student Name</th>
              </tr>
            </thead>
            <tbody>
              {
                subject.map(subjectInfo =>
                  <tr>
                    <td>{subjectInfo.name}</td>
                    <td>
                      {subjectInfo.student.map(std => <span>{std + ", "} </span>)}
                    </td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </div>
      )
    }
  
  }


  export default Subject;