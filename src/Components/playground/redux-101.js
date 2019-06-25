let redux = require('redux');

const incrementCount = ({incrementBy = 1} = {})=>({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {})=>({
   type: 'DECREMENT',
   decrementBy
});

const reset = ()=>({
   type: 'RESET'
});

const set = ({count = 101} = {})=>({
    type: 'SET',
    count
});


const store = redux.createStore((state = {count:0}, action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return{
                count: state.count - action.decrementBy
            };
        case 'SET':
            return{
                count:action.count
            };
        case 'RESET':
            return{
                count:(state.count = 0)
            };
        default:
            return state;
    }
});

store.subscribe(()=>{
    console.log(store.getState())
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(decrementCount());
store.dispatch(reset());
store.dispatch(set({count:12}));