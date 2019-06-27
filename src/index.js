import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.scss';
import AppRouter from './routers/AppRouter'
// import 'normalize.css/normalize.css';
// import App from './App';
import configurationStore from './store/configureStore'
import * as serviceWorker from './serviceWorker';

const store = configurationStore()

ReactDOM.render(<AppRouter/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
