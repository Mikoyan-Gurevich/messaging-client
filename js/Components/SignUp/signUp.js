import React from 'react';
import './signUp.scss';
import 'whatwg-fetch'


class SignUp extends React.Component {
    constructor() {
        super();
        this.inputs = [
            {name: 'firstName', label: 'First Name'},
            {name: 'lastName', label: 'Last Name'},
            {name: 'password', label: 'Password'},
            {name: 'mobile', label: 'Mobile'}
        ];
        this.submitForm = this.submitForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
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
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        });
    }

    handleInput(event) {
        let obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    }

    render() {
        return (
            <div>
                {
                    this.inputs.map((inp) => {
                        return (
                            <div>
                                <label>{inp.label}</label>
                                <input name={inp.name} value={this.state[inp.name]} onChange={this.handleInput}/>
                            </div>
                        );
                    })
                }
                <div>
                    <button onClick={this.submitForm}>Submit</button>
                </div>
            </div>
        );
    }
}

export default SignUp;
