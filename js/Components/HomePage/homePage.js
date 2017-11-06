import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './homePage.scss';
import SignUp from '../SignUp/signUp';
import Login from '../Login/login';
import Chat from '../Chat/chat';


class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      showAllLanguages: false,
      showLanguageBar: true,
    };
    this.showLanguageSelection = this.showLanguageSelection.bind(this);
    this.setLanguage = this.setLanguage.bind(this);
  }

  showLanguageSelection() {
    console.log('asdadas');
    this.setState({ showAllLanguages: true });
  }

  hideLanguageSelection() {
    this.setState({ showAllLanguages: false });
  }

  setLanguage(event) {
    window.localStorage.selectedlanguage = event.target.name;
    this.setState({ showLanguageBar: false, showAllLanguages: false });
    window.location.reload();
  }

  render() {
    const { showAllLanguages, showLanguageBar } = this.state;
    return (
      <Router>
        <div className="homePage">
          <div className="languageChange">
            {!showAllLanguages && showLanguageBar &&
            <div>
              {getStringInSelectedlanguage('changeLanguageText')}
              <button onClick={this.showLanguageSelection}>{getStringInSelectedlanguage('clickHere')}.</button>
            </div>
                        }
            {showAllLanguages &&
            <div className="showAllLanguages">
              <div className="outer">
                <div className="inner">
                  <div className="header">Select Language</div>
                  <div className="body">
                    <button name="english" onClick={this.setLanguage}>English</button>
                    <button name="hindi" onClick={this.setLanguage}>Hindi</button>
                  </div>
                </div>
              </div>
            </div>
                        }
          </div>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/chat" component={Chat} />
        </div>
      </Router>
    );
  }
}

export default HomePage;
