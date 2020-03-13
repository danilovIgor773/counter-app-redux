import * as actions from '../actions/actionTypes';

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action ) => {
    
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
        default: 
            return state;
    }
}

export default counterReducer;