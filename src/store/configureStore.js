import {createStore, combineReducers} from 'redux'
import expensesReducer from '../reducers/Expense'
import filterReducer from '../reducers/Filter'

export default ()=>{
    const store = createStore(
        combineReducers({
            expense: expensesReducer,
            filter: filterReducer
        })
    );
    return store
}



