const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    return state;
}

const store = createStore(reducer);

console.log("Store is: ", store.getState());


//Store

//Reducer

//Dispatching Action
