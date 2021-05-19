import {types} from './types';

const initialState = {
    data: null,
    isFetching: false,
    error: null,
};

export const ordersReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.ORDERS_START_FETCHING: 
        return {
            ...state,
            isFetching: true,
        };

        case types.ORDERS_STOP_FETCHING: 
        return {
            ...state,
            isFetching: false,
        };

        case types.ORDERS_SET_FETCHING_ERROR:
        return {
            ...state,
            error: payload,
            data: null,
        }

        case types.ORDERS_FILL: 
        return {
            ...state,
            data: payload,
            error: null,
        }

        default: 
            return state
    }
}
