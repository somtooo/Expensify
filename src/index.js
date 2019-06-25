import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.scss';
import AppRouter from './routers/AppRouter'
// import 'normalize.css/normalize.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux'
const store = createStore((state = {count:0})=>{
    return state;
})

console.log(store.getState())

ReactDOM.render(<AppRouter/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
