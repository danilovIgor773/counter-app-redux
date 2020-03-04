const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action ) => {
    
    switch(action.type){
        case 'INCREMENT':
            return{
                ...state,
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return{
                ...state,
                counter: state.counter -1
            };
        case 'ADD_VALUE':
            return{
                ...state,
                counter: state.counter + action.value
            }
        case 'SUBTRACT_VALUE':
            return{
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULTS':
            return{
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULTS':
            const updatedArr = state.results.filter(res => res.id !== action.resId);
            return{
                ...state,
                results: updatedArr
            }
        default: 
            return state;
    }
}

export default reducer;