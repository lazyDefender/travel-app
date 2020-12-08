import {types} from './types';

const initialState = {
    data: null,
    isFetching: false,
    error: null,
};

export const toursReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.TOURS_START_FETCHING: 
        return {
            ...state,
            isFetching: true,
        };

        case types.TOURS_STOP_FETCHING: 
        return {
            ...state,
            isFetching: false,
        };

        case types.TOURS_SET_FETCHING_ERROR:
        return {
            ...state,
            error: payload,
            data: null,
        }

        case types.TOURS_FILL: 
        return {
            ...state,
            data: payload,
            error: null,
        }

        default: 
            return state
    }
}
