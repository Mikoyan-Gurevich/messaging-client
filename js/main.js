import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import Homepage from './Components/HomePage/homePage';
import Gallery from './Components/Gallery/gallery';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import english from '../translations/english.json';
import hindi from '../translations/hindi.json';
// import db from '../js/db/db';

OfflinePluginRuntime.install();

const languageObj = { english, hindi };

window.getStringInSelectedlanguage = code => languageObj[window.localStorage && window.localStorage.selectedlanguage || 'english'][code];

document.title = getStringInSelectedlanguage('appTitle');

ReactDOM.render(<Gallery />, document.getElementById('app'));
