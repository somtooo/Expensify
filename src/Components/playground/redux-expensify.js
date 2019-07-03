let redux = require('redux');
let uuid = require('uuid');

//ADD_EXPENSE
const addExpense = (
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
const removeExpense = ({id = ''} = {})=>({
   type: 'REMOVE_EXPENSE',
   id
});

//EDIT EXPENSE
const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});

//Set text filter
const setTextFilter = (text = '') =>({
    type:'SET_TEXT_FILTER',
    text
});

//Sort by AMOUNT
const sortByAmount = ()=>({
    type:'SORT_BY_AMOUNT'
});

//Sort by Date

const sortByDate = ()=>({
    type:'SORT_BY_DATE'
});

//Set Start Date
const setStartDate = (date)=>({
   type:'SET_START_DATE',
   date
});

//Set End Date
const setEndDate = (date)=>({
    type:'SET_END_DATE',
    date
});


//Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) =>{
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return  state.filter((x)=>x.id!==action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => (expense.id === action.id) ? {...expense,...action.updates}: {expense})
        default:
            return state;
    }

};
//Filter Reducer
const filterReducerDefaultState = {
        text: '',
        sortBy: '', //date or amount
        startDate: undefined,
        endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'date'
            };
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'
            };
        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.date
            };
        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.date
            };
        default:
            return state
    }
};
// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate})=>{
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !=='number' || expense.createdDate >= startDate;
        const endDateMatch = typeof endDate !=='number' || expense.createdDate <= endDate;
        const textMatch = typeof text === 'string' && expense.description.toUpperCase().includes(text.toUpperCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if (sortBy === 'date'){
            return a.createdDate < b.createdDate ? 1 : -1;
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
};
//Store Creation
const store = redux.createStore(
    redux.combineReducers({
        expense: expensesReducer,
        filter: filterReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expense, state.filter)
    console.log(visibleExpenses)
});

let expenseOne = store.dispatch(addExpense({description: 'Rent', amount:100, createdDate:-1000}));
let expenseTwo = store.dispatch(addExpense({description: 'Milk', amount:400, createdDate:1000}));

// store.dispatch(addExpense({description: 'Goat', amount:400}));
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));
// store.dispatch(setTextFilter("rent"));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setEndDate(123));
// store.dispatch(setStartDate(125));