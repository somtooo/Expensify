import React from 'react';
import {connect} from 'react-redux'

const ExpenseList = (props) =>(
    <div>
        <h1>Expense List</h1>
        {props.expenses.length}
    </div>
);

const mapStateToProps = (store) =>{
    return{
        expenses: store.expense
    }
}

export default connect(mapStateToProps)(ExpenseList)