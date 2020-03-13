import * as actionTypes from './actionTypes';

export const saveResults = (result) => {
    return{
        type: actionTypes.STORE_RESULTS,
        result
    }    
}

//---ASYNC OPERATIONS----
export const storeResults = (result) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResults(result))
        }, 2000)
    }
} // This is async code available due to redux-thunk middleware. ACTION_DISPATCH => THUNK(MIDDLEWARE) => REDUCER => OUTPUT in CMP

export const deleteResults = (resId) => {
    return {
        type: actionTypes.DELETE_RESULTS,
        resId //this argument should be specified careefully, cause it then will be passed to reducer!!!
    }
}