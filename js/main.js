import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import Homepage from './Components/HomePage/homePage';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import english from '../translations/english.json';
import hindi from '../translations/hindi.json';

OfflinePluginRuntime.install();

let languageObj = {english, hindi};

window.getStringInSelectedlanguage = (code) => {
	return languageObj[window.localStorage && window.localStorage.selectedlanguage || 'english'][code];
};

document.title = getStringInSelectedlanguage('appTitle');

ReactDOM.render(<Homepage/>, document.getElementById('app'));
