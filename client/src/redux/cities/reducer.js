import {types} from './types';

const initialState = {
    data: null,
    isFetching: false,
    error: null,
};

export const citiesReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.CITIES_START_FETCHING: 
        return {
            ...state,
            isFetching: true,
        };

        case types.CITIES_STOP_FETCHING: 
        return {
            ...state,
            isFetching: false,
        };

        case types.CITIES_SET_FETCHING_ERROR:
        return {
            ...state,
            error: payload,
            data: null,
        }

        case types.CITIES_FILL: 
        return {
            ...state,
            data: payload,
            error: null,
        }

        default: 
            return state
    }
}
