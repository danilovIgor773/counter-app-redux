const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//Reducer
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

//Store
const store = createStore(rootReducer);
console.log("[Just created] Store is: ", store.getState());


//Subscriptions - inform if the state was updated by reducer, and not everytime manually call the store.getState() method. 
//Usage - store.subscribe(() => {}) subscribe method expects to function be passed as anrgument. The passed function will always be triggered when the state was updated.
//Subscribe should come before the action dispatch 
store.subscribe(() => {
    console.log("[Subscribe]", store.getState());
    
})


//Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 7}); // When dispatching action the main argument for dispatching func is action_type, other is optional
//here we also pass "value", but we also can pass the whole obj named as payload
console.log("[Action dispatching ] Store is: ", store.getState());










