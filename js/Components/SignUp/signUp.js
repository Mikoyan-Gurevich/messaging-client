import React from 'react';
import './signUp.scss';
import { postData } from '../../utils/fetch';
import { Link } from 'react-router-dom';
import { signup as signupURL } from '../../utils/urls';
import LogoTopLeft from '../../../assets/LogoTopLeft.png';


class SignUp extends React.Component {
  constructor() {
    super();
    this.inputs = [
      { name: 'firstName', type: 'text' },
      { name: 'lastName', type: 'text' },
      { name: 'password', type: 'password' },
      { name: 'mobile', type: 'text' },
      { name: 'email', type: 'text' },
    ];
    this.inputs.map((field) => {
      field.label = getStringInSelectedlanguage(field.name);
    });
    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      mobile: '',
      email: '',
      signupComplete: false,
    };
  }

  submitForm() {
    const postObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      mobile: this.state.mobile,
      email: this.state.email,
    };
    postData('POST', signupURL, postObj, (resp) => {
      this.setState({ signupComplete: true });
    }, (error) => {
      console.log('Failure', error);
    });
  }

  handleInput(event) {
    if (event.target.name === 'mobile' && isNaN(event.target.value)) {
      return null;
    }
    const obj = {};
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
    if (!new RegExp('^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$').test(this.state.email)) {
      return true;
    }
    // If everything is fine, we return a false value for invalidity.
    return false;
  }

  render() {
    const disableSubmitButton = this.isFormInvalid();
    return (
      <div className="signup">
        <div className="left">
          <img src={LogoTopLeft} />
          <label>Konnect</label>
        </div>
        {
                    !this.state.signupComplete && <div className="center">
                      <div className="logo" />
                        {
                            this.inputs.map((inp, key) => (
                              <div key={key}>
                                <input
                                  name={inp.name}
                                  type={inp.type}
                                  placeholder={`Enter ${inp.label}`}
                                  value={this.state[inp.name]}
                                  onChange={this.handleInput}
                                />
                              </div>
                                ))
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
                }
        {
                    this.state.signupComplete && <div className="postSignUp">
                        Congratulations ! You have been registered successfully.
                      <Link to="/">Login </Link>
                        to continue.
                                                 </div>
                }
        <div className="right" />
      </div>
    );
  }
}

export default SignUp;
