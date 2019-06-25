import {BrowserRouter, Route,Switch} from "react-router-dom";
import AddExpensePage from '../Components/AddExpensePage'
import EditExpensePage from '../Components/EditExpensePage'
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage'
import Header from '../Components/Header'
import HelpPage from '../Components/HelpPage'
import NotFoundPage from '../Components/NotFoundPage'
import React from "react";


const AppRouter = () =>(

    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>

    </BrowserRouter>

)

export default AppRouter
