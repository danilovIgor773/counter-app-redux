import * as actions from '../actions/actionTypes';
import {updateObject} from './utility';


const initialState = {
    results: []
}

//here (it's not necessary) we can write function (wrapper) to make switch statement more leaner

const deleteResults = (state, action) => {
    const updatedArr = state.results.filter(res => res.id !== action.resId);
    return updateObject(state, {results: updatedArr});
}

const resultReducer = (state = initialState, action ) => {
    
    switch(action.type){
        case actions.STORE_RESULTS: return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case actions.DELETE_RESULTS: return deleteResults(state, action);
        default: return state;
    }
}

export default resultReducer;