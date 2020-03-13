import * as actions from '../actions/actionTypes';
import {updateObject} from './utility';


const initialState = {
    results: []
}

const resultReducer = (state = initialState, action ) => {
    
    switch(action.type){
        case actions.STORE_RESULTS:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case actions.DELETE_RESULTS:
            const updatedArr = state.results.filter(res => res.id !== action.resId);
            return updateObject(state, {results: updatedArr});
        default: 
            return state;
    }
}

export default resultReducer;