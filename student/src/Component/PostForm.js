import React, { Component, useEffect, useState } from 'react'


export class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",
            date: "",
        }
    }

    chnageHandeler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandeler = e => {
        //e.preventDefault();
        console.log(this.state);
        fetch('http://localhost:8000/api/add', {
            method: "POST", headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((result) => result.json())
            .then((info) => { console.log(info); })
    }

    render() {
        const { name, email,phone,date } = this.state;
        return (
            <div>
                <h1>Add New Student</h1>
                <form onSubmit={this.submitHandeler}>
                    <div>
                        <label>Student Name: </label> <br />
                        <input type="text" name="name" value={name} onChange={this.chnageHandeler} required />
                    </div>
                    <div>
                        <label>Email: </label> <br />
                        <input type="email" name="email" value={email} onChange={this.chnageHandeler} required />
                    </div>
                    <div>
                        <label>Phone No: </label> <br />
                        <input type="text" name="phone" value={phone} onChange={this.chnageHandeler} required />
                    </div>
                    <div>
                        <label>Date of Birth: </label> <br />
                        <input type="date" name="date" value={date} onChange={this.chnageHandeler} required />
                    </div>

                    <button type="submit" className="btn" >Submit</button>
                </form>
            </div>
        )
    }
}


export default PostForm;