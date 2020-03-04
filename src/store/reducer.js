import * as actions from '../store/actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action ) => {
    
    switch(action.type){
        case actions.INCREMENT:
            return{
                ...state,
                counter: state.counter + 1
            };
        case actions.DECREMENT:
            return{
                ...state,
                counter: state.counter -1
            };
        case actions.ADD_VALUE:
            return{
                ...state,
                counter: state.counter + action.value
            }
        case actions.SUBTRACT_VALUE:
            return{
                ...state,
                counter: state.counter - action.value
            }
        case actions.STORE_RESULTS:
            return{
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actions.DELETE_RESULTS:
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