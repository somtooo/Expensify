let redux = require('redux');

//Expenses Reducer
const expensesReducerDefaultState = [
    {
        id: 'dddddddd',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54333,
        createdAt: 0
    }
];
const expensesReducer = (state = expensesReducerDefaultState, action) =>{
    switch(action.type) {
        default:
            return state;
    }

};
//Filter Reducer
const filterReducerDefaultState = {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action)=>{
    switch(action.type){
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

console.log(store.getState());
// store.subscribe(()=>{
//     console.log(store.getState())
// });

