import React from 'react';
import './login.scss';
import 'whatwg-fetch';
import { Link, Redirect } from 'react-router-dom';
import { postData } from '../../utils/fetch';
import { login as loginURL } from '../../utils/urls';


class Login extends React.Component {
  constructor() {
    super();
    this.proceedToLogin = this.proceedToLogin.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      userID: '',
      password: '',
      staySignedIn: false,
      invalidCredentials: false,
      isUserLoggedIn: window.localStorage.userDetails && window.localStorage.userDetails !== '',
    };
  }

  proceedToLogin() {
    const { userID, password, staySignedIn } = this.state;
    postData('POST', loginURL, { userID, password, staySignedIn }, (resp) => {
      this.setState({ isUserLoggedIn: true, invalidCredentials: false });
      resp.staySignedIn = staySignedIn;
      window.localStorage.userDetails = JSON.stringify(resp);
    }, (error) => {
      this.setState({ invalidCredentials: true });
    });
  }

  onInputChange(event) {
    const obj = {};
    obj[event.target.name] = event.target.name !== 'staySignedIn' ? event.target.value : event.target.checked;
    Object.assign(obj, { invalidCredentials: false });
    this.setState(obj);
  }

  render() {
    if (this.state.isUserLoggedIn) {
      return <Redirect to="/chat" />;
    }
    return (
      <div className="superContainer">
        <div className="logoContainer" />
        <div className="loginContainer">
          <div className="konnect">Konnect</div>
          <div className="login">
            <label className="title">{getStringInSelectedlanguage('subTitle')}.</label>
            <input
              name="userID"
              className={this.state.invalidCredentials ? 'userID inputError' : 'userID'}
              type="text"
              value={this.state.userID}
              onChange={this.onInputChange}
              placeholder={getStringInSelectedlanguage('userIDInput')}
            />
            <input
              name="password"
              className={this.state.invalidCredentials ? 'password inputError' : 'password'}
              type="password"
              value={this.state.password}
              onChange={this.onInputChange}
              placeholder={getStringInSelectedlanguage('password')}
            />
            {this.state.invalidCredentials && <p>Please Enter valid credentials. <Link to="/forgotpassword"> Forgot Password ?</Link></p>}
            <div className="signIn">
              <button onClick={this.proceedToLogin}>{getStringInSelectedlanguage('signIn')}</button>
              <input
                name="staySignedIn"
                value={this.state.staySignedIn}
                onChange={this.onInputChange}
                type="checkbox"
              />
            </div>
          </div>
        </div>
        <div className="newUser">
          <div>{getStringInSelectedlanguage('staySignedIn')}</div>
          <div>{getStringInSelectedlanguage('newUser')} <Link to="/signup">{getStringInSelectedlanguage('signUp')}</Link></div>
        </div>
      </div>
    );
  }
}

export default Login;
