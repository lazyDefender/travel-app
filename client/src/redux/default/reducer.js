import {types} from './types';

const initialState = {
    firstLoadedPage: null,
};

export const defaultReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.SET_FIRST_LOADED_PAGE: 
        return {
            ...state,
            firstLoadedPage: payload,
        };

        default: 
            return state
    }
}
