import React from 'react';
import './signUp.scss';
import 'whatwg-fetch'


class SignUp extends React.Component {
    constructor() {
        super();
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            mobile: ''
        };
    }

    submitForm() {
        fetch('http://localhost:3001/signup', {
            method: 'POST',
            body: this.state
        })
    }

    render() {
        return (
            <div>
                <div>
                    <label>First Name</label>
                    <input value={this.state.firstName}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input value={this.state.lastName}/>
                </div>
                <div>
                    <label>Password</label>
                    <input value={this.state.password}/>
                </div>
                <div>
                    <label>Mobile Number</label>
                    <input value={this.state.mobile}/>
                </div>
                <div><button onClick={this.submitForm}>Submit</button></div>
            </div>
        );
    }
}

export default SignUp;
