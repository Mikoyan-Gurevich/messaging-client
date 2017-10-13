import React from 'react';
import {Redirect} from 'react-router-dom';

class Chat extends React.Component {
    constructor() {
        super();
        this.logoutUser = this.logoutUser.bind(this);
        this.state={
            isUserLoggedOut: false
        };
    }

    logoutUser() {
        window.localStorage.isUserLoggedIn = false;
        this.setState({isUserLoggedOut: true});
    }

    render() {
        if(this.state.isUserLoggedOut) {
            return <Redirect exact to='/' />
        }
        return <div>This will become chat window <div onClick={this.logoutUser}>logout</div></div>
    }
}
export default Chat;