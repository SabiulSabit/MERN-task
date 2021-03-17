import React, { Component, useEffect, useState } from 'react'


export class SubjectAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            id: ""
        }
    }
    chnageHandeler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandeler = e => {
         //e.preventDefault();
        console.log(this.state);
        fetch('http://localhost:8000/api/addsubject', {
            method: "POST", headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((result) => result.json())
            .then((info) => { console.log(info); })
    }

    render() {
        const { name, id } = this.state;
        return (
            <div>
                <h1>Add Subject</h1>
                <form onSubmit={this.submitHandeler}>
                    <div>
                        <label>Subject Name: </label> <br />
                        <input type="text" name="name" value={name} onChange={this.chnageHandeler} required />
                    </div>
                    <div>
                        <label>Student ID: </label> <br />
                        <input type="text" name="id" value={id} onChange={this.chnageHandeler} required />
                    </div>


                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        )
    }
}


export default SubjectAdd;