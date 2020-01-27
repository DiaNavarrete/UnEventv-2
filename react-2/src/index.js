import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Card from './components/card/Card';
import FormEvent from './components/FormEvent/FormEvent';

const container=document.getElementById('root');
const card=<Card title="Titulo"
owner="dia"
place="uni"/>
const forme= <FormEvent/>
const pp=<App/>  //no funciona
ReactDOM.render(forme,
                       container);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
