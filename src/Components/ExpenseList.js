import React from 'react';
import {connect} from 'react-redux'
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) =>(
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense)=>{
            return <ExpenseListItem {...expense}/>
        })}
    </div>
);

const mapStateToProps = (state) =>{
    return{
        expenses: selectExpenses(state.expense, state.filter)
    }
}

export default connect(mapStateToProps)(ExpenseList)