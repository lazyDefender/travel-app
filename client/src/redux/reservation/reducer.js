import {types} from './types';

const initialState = {
    data: null,
    isFetching: false,
    error: null,
};

export const reservationReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.TOUR_START_FETCHING: 
        return {
            ...state,
            isFetching: true,
        };

        case types.TOUR_STOP_FETCHING: 
        return {
            ...state,
            isFetching: false,
        };

        case types.TOUR_SET_FETCHING_ERROR:
        return {
            ...state,
            error: payload,
            data: null,
        }

        case types.TOUR_FILL: 
        return {
            ...state,
            data: payload,
            error: null,
        }

        default: 
            return state
    }
}
