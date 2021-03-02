import {types} from './types';

const initialState = {
    data: null,
    isFetching: true,
    error: null,
    createdWithEmailAndPassword: null,
};

export const authReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.AUTH_START_FETCHING: 
        return {
            ...state,
            isFetching: true,
        };

        case types.AUTH_STOP_FETCHING: 
        return {
            ...state,
            isFetching: false,
        };

        case types.AUTH_SET_FETCHING_ERROR:
        return {
            ...state,
            error: payload,
            data: null,
        }

        case types.AUTH_FILL: 
        return {
            ...state,
            data: payload,
            error: null,
        }

        default: 
            return state
    }
}
