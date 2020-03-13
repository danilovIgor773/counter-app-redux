import * as actions from '../actions/actionTypes';

const initialState = {
    results: []
}

const resultReducer = (state = initialState, action ) => {
    
    switch(action.type){
        case actions.STORE_RESULTS:
            return{
                ...state,
                results: state.results.concat({id: new Date(), value: action.result}) // here we pass the counter results to be displayed in a list via action/payload
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

export default resultReducer;