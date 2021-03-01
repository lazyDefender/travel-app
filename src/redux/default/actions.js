// Api
import { api } from '../../api';
// Types
import { types } from './types';
// Fire
import fire from '../../firebase'
import { store } from '../../init/store';

export const defaultActions = Object.freeze({
    //Sync
    setFirstPageLoaded: (payload) => {
        return {
            type: types.SET_FIRST_PAGE_LOADED,
            payload,
        }
    },

})