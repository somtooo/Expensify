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
})
//Expenses Reducer
const expensesReducerDefaultState = [
    // {
    //     id: 'dddddddd',
    //     description: 'January Rent',
    //     note: 'This was the final payment for that address',
    //     amount: 54333,
    //     createdAt: 0
    // }
];
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
            }
        default:
            return state
    }
};

//Store Creation
const store = redux.createStore(
    redux.combineReducers({
        expenses: expensesReducer,
        filter: filterReducer
    })
);

store.subscribe(()=>{
    console.log(store.getState())
});

let expenseOne = store.dispatch(addExpense({description: 'Rent', amount:100}));
let expenseTwo = store.dispatch(addExpense({description: 'Milk', amount:400}));
store.dispatch(addExpense({description: 'Goat', amount:400}));
store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));
store.dispatch(setTextFilter("rent"));