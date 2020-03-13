import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const addValue = (value) => {
    return{
        type: actionTypes.ADD_VALUE,
        value
    }
}

export const subtractValue = (value) => {
    return{
        type: actionTypes.SUBTRACT_VALUE,
        value
    }
}