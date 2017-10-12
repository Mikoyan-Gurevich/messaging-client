import React from 'react';
import './signUp.scss';
import {postData} from '../../utils/fetch';
import {signup as signupURL} from '../../utils/urls';


class SignUp extends React.Component {
    constructor() {
        super();
        this.inputs = [
            {name: 'firstName', label: 'First Name', type: 'text'},
            {name: 'lastName', label: 'Last Name', type: 'text'},
            {name: 'password', label: 'Password', type: 'password'},
            {name: 'mobile', label: 'Mobile Number', type: 'number'},
            {name: 'email', label: 'Email ID', type: 'text'}
        ];
        this.submitForm = this.submitForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            mobile: '',
            email: ''
        };
    }

    submitForm() {
        postData('POST', signupURL, this.state, (resp) => {
            console.log('Success', resp);
        }, (error) => {
            console.log('Failure', error);
        });
    }

    handleInput(event) {
        let obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    }

    isFormInvalid() {
        // This is to make sure that none of the field is left blank.
        this.inputs.map((inp) => {
            if (this.state[inp.name] === '') {
                return true;
            }
        });

        // This is to make sure that email address field has valid email format
            if(!new RegExp('^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$').test(this.state.email)) {
                return true;
            }
        // If everything is fine, we return a false value for invalidity.
        return false;
    }

    render() {
        let disableSubmitButton = this.isFormInvalid();
        return (
            <div className='signup'>
                <div className='logo'> </div>
                {
                    this.inputs.map((inp, key) => {
                        return (
                            <div key={key}>
                                <input
                                    name={inp.name}
                                    type={inp.type}
                                    placeholder={'Enter ' + inp.label}
                                    value={this.state[inp.name]}
                                    onChange={this.handleInput}
                                />
                            </div>
                        );
                    })
                }
                <div>
                    <button
                        className={disableSubmitButton ? 'disabled' : ''}
                        disabled={disableSubmitButton}
                        onClick={this.submitForm}
                    >SIGN UP
                    </button>
                </div>
            </div>
        );
    }
}

export default SignUp;
