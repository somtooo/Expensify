import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.scss';
import {BrowserRouter, Route,Switch, Link, NavLink} from 'react-router-dom';
// import 'normalize.css/normalize.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const ExpenseDashboardPage = ()=>(
    <div>
        This is from my dashboard component
    </div>

)

const AddExpensePage = ()=>(
    <div>
        This is from my expense component
    </div>

)

const EditExpensePage = ()=>(
    <div>
        This is from my edit component
    </div>

)

const HelpPage = ()=>(
    <div>
        This is from my help component
    </div>

)
const NotFoundPage = ()=>(
    <div>
        404 - <Link to="/">Go home</Link>
    </div>

)

const Header = ()=>(
    <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true} >DASHBOARD </NavLink>
        <NavLink to="/create" activeClassName="is-active">EXPENSE </NavLink>
        <NavLink to="/edit" activeClassName="is-active">EDIT </NavLink>
        <NavLink to="/help" activeClassName="is-active">HELP </NavLink>
    </div>

)

const routes = (
    <BrowserRouter>
        <div>
            <Header />
                <Switch>
                    <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                    <Route path="/create" component={AddExpensePage}/>
                    <Route path="/edit" component={EditExpensePage}/>
                    <Route path="/help" component={HelpPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
        </div>

    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
