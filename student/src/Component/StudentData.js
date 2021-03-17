import React, { Component, useEffect, useState } from 'react'
import { Table, Row, Container } from 'react-bootstrap';

function Users() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/showall')
      .then(res => res.json())
      .then(data => { setUser(data) });
  }, [])
  // render() {

  if (user.length == 0) {
    return (
      <h2>No data</h2>
    )
  }
  else {
    return (

      <div>
        <Row lg={12} >
          <div className="tableDiv">
            <h3 className="text-center">Total Student: {user.length}</h3>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Student Name</th>
                  <th>Email Address</th>
                  <th>Phone No.</th>
                  <th>Date of Birth</th>
                  <th>Subject</th>
                </tr>
              </thead>
              <tbody>
                {
                  user.map(userinfo =>
                    <tr>
                      <td>{userinfo._id}</td>
                      <td>{userinfo.name}</td>
                      <td>{userinfo.email}</td>
                      <td>{userinfo.phone}</td>
                      <td>{userinfo.dob}</td>
                      <td>
                        {userinfo.subject.map(std => <p>{std + ", "} </p>)}
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </Table>

          </div>
        </Row>

      </div>
    )
  }

}


export default Users;