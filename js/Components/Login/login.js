import React from 'react';
import './login.scss';
import 'whatwg-fetch';
import {Link, Redirect} from 'react-router-dom';
import {postData} from '../../utils/fetch';
import {login as loginURL} from '../../utils/urls';


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
         let {userID, password, staySignedIn} = this.state;
         postData('POST', loginURL, {userID, password, staySignedIn}, (resp) => {
             this.setState({isUserLoggedIn: true, invalidCredentials: false});
             resp.staySignedIn = staySignedIn;
            window.localStorage.userDetails = JSON.stringify(resp);
         }, (error) => {
             this.setState({invalidCredentials: true})
         });
        
    }

    onInputChange(event) {
        let obj = {};
        obj[event.target.name] = event.target.name !== 'staySignedIn' ? event.target.value : event.target.checked;
        this.setState(obj);
    }

    render() {
        if (this.state.isUserLoggedIn) {
            return <Redirect to='/chat' />;
        }
        return (
            <div className='superContainer'>
                <div className='logoContainer'>
                </div>
                <div className='loginContainer'>
                    <div className='konnect'>Konnect</div>
                    <div className='login'>
                        <label className='title'>Connecting every aspect.</label>
                        <input
                            name='userID'
                            className='userID'
                            type='text'
                            value={this.state.userID}
                            onChange={this.onInputChange}
                            placeholder='Username/ Mobile Number/ Email ID'
                        />
                        <input
                            name='password'
                            className='password'
                            type='password'
                            value={this.state.password}
                            onChange={this.onInputChange}
                            placeholder='Password'
                        />
                        <div className='signIn'>
                            <button onClick={this.proceedToLogin}>Sign In</button>
                            <input
                                name='staySignedIn'
                                value={this.state.staySignedIn}
                                onChange={this.onInputChange}
                                type='checkbox'
                            />
                        </div>
                    </div>
                </div>
                <div className='newUser'>
                    <div>Keep me signed in</div>
                    <div>New User? <Link to='/signup'>Sign Up</Link></div>
                </div>
            </div>
        );
    }
}

export default Login;
