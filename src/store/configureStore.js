import {createStore, combineReducers} from 'redux'
import expensesReducer from '../reducers/Expense'
import filterReducer from '../reducers/Filter'

export default ()=>{
    const store = createStore(
        combineReducers({
            expense: expensesReducer,
            filter: filterReducer
        }),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store
}



