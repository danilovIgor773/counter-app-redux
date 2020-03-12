export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_VALUE = 'ADD_VALUE';
export const SUBTRACT_VALUE = 'SUBTRACT_VALUE';
export const STORE_RESULTS = 'STORE_RESULTS';
export const DELETE_RESULTS = 'DELETE_RESULTS';   

//We also can use action creators - theses are functions that create actions and return created actions

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const addValue = (value) => {
    return{
        type: ADD_VALUE,
        value
    }
}

export const subtractValue = (value) => {
    return{
        type: SUBTRACT_VALUE,
        value
    }
}

export const saveResults = (result) => {
    return{
        type: STORE_RESULTS,
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
        type: DELETE_RESULTS,
        resId //this argument should be specified careefully, cause it then will be passed to reducer!!!
    }
}