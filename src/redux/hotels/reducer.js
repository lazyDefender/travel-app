import {types} from './types';

const initialState = {
    data: null,
    isFetching: false,
    error: null,
};

export const hotelsReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.HOTELS_START_FETCHING: 
        return {
            ...state,
            isFetching: true,
        };

        case types.HOTELS_STOP_FETCHING: 
        return {
            ...state,
            isFetching: false,
        };

        case types.HOTELS_SET_FETCHING_ERROR:
        return {
            ...state,
            error: payload,
            data: null,
        }

        case types.HOTELS_FILL: 
        return {
            ...state,
            data: payload,
            error: null,
        }

        // case types.HOTELS_ADD:
        // return {
        //     ...state,
        //     data: [
        //         ...state.data,
        //         payload,
        //     ],
        //     error: null,

        // }

        default: 
            return state
    }
}
