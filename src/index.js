import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './Styles/index.scss';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css';
import store from './store/configureStore'
import  * as Action from './actions/expenses'
import * as serviceWorker from './serviceWorker';
import getVisibleExpenses from "./selectors/expenses";

const s = store();

s.dispatch(Action.addExpense({description: 'Water bill', amount:400}));
s.dispatch(Action.addExpense({description: 'Gas bill', amount:500}));
s.dispatch(Action.setTextFilter("water"));

const state = s.getState();
const visibleExpenses = getVisibleExpenses(state.expense, state.filter);
console.log(visibleExpenses);

const jsx = (
    <Provider store={s}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
