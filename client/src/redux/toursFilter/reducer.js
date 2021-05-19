import {types} from './types';

const initialState = {
    data: null,
    formState: null,
    isFetching: false,
    error: null,
};

export const toursFilterReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.TOURS_FILTER_START_FETCHING: 
        return {
            ...state,
            isFetching: true,
        };

        case types.TOURS_FILTER_STOP_FETCHING: 
        return {
            ...state,
            isFetching: false,
        };

        case types.TOURS_FILTER_SET_FETCHING_ERROR:
        return {
            ...state,
            error: payload,
            data: null,
        }

        case types.TOURS_FILTER_FILL: 
        return {
            ...state,
            data: payload,
            error: null,
        }

        case types.TOURS_FILTER_SET_FORM_STATE:
        return {
            ...state,
            formState: payload,
        }

        default: 
            return state
    }
}
