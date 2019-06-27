import uuid from "uuid"
//ADD_EXPENSE
export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdDate = 0

    }={}
) =>({
    type: 'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdDate
    }
});

//Remove Expense
 export const removeExpense = ({id = ''} = {})=>({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT EXPENSE
export const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});

///////////////************************//////////////////////////
///////////////************************//////////////////////////

//Set text filter
export const setTextFilter = (text = '') =>({
    type:'SET_TEXT_FILTER',
    text
});

//Sort by AMOUNT
export const sortByAmount = ()=>({
    type:'SORT_BY_AMOUNT'
});

//Sort by Date

export const sortByDate = ()=>({
    type:'SORT_BY_DATE'
});

//Set Start Date
export const setStartDate = (date)=>({
    type:'SET_START_DATE',
    date
});

//Set End Date
export const setEndDate = (date)=>({
    type:'SET_END_DATE',
    date
});


