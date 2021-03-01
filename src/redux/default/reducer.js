import {types} from './types';

const initialState = {
    firstPageLoaded: null,
};

export const defaultReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.SET_FIRST_PAGE_LOADED: 
        return {
            ...state,
            firstPageLoaded: payload,
        };

        default: 
            return state
    }
}
