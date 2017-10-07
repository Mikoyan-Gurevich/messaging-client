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
            {name: 'mobile', label: 'Mobile Number'},
            {name: 'email', label: 'Email ID'}
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
            <div className='signup'>
                <div className='title'>Fill the Form below to get Started.</div>
                {
                    this.inputs.map((inp, key) => {
                        return (
                            <div key={key}>
                                <input
                                    name={inp.name}
                                    type={inp.name === 'password' ? 'password' : ''}
                                    placeholder={'Enter ' + inp.label}
                                    value={this.state[inp.name]}
                                    onChange={this.handleInput}
                                />
                            </div>
                        );
                    })
                }
                <div>
                    <button onClick={this.submitForm}>Sign up as a New User</button>
                </div>
            </div>
        );
    }
}

export default SignUp;
