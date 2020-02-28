const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0
}

const rootReducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'INC_COUNTER':
            return{
                ...state,
                counter: state.counter + 1
            };
        case 'ADD_COUNTER':
            return{
                ...state,
                counter: state.counter + action.value
            };
        default: 
            return state;
    }
}

const store = createStore(rootReducer);

console.log("Store is: ", store.getState());

store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 7});

console.log("Store is: ", store.getState());

//Store

//Reducer

//Dispatching Action

