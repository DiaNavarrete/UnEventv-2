import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CardEvent from './components/CardEvent';
import FormEvent from './components/FormEvent';

const container=document.getElementById('root');
const card=<CardEvent title="Titulo"
owner="dia"
followers="10"
place="uni"/>
const forme= <FormEvent/>
const pp=<App/>  //no funciona
ReactDOM.render(forme,
                       container);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
