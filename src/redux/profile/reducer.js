import {types} from './types';

const initialState = {
    data: null,
    isFetching: false,
    error: null,
};

export const profileReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.PROFILE_START_FETCHING: 
        return {
            ...state,
            isFetching: true,
        };

        case types.PROFILE_STOP_FETCHING: 
        return {
            ...state,
            isFetching: false,
        };

        case types.PROFILE_SET_FETCHING_ERROR:
        return {
            ...state,
            error: payload,
            data: null,
        }

        default: 
            return state
    }
}
