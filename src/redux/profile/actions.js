import firebase from 'firebase'
// Api
import { api } from '../../api';
// Types
import { types } from './types';
// Fire
import fire from '../../firebase'

export const profileActions = Object.freeze({
    //Sync
    startFetching: () => {
        return {
            type: types.PROFILE_START_FETCHING,
        }
    },

    stopFetching: () => {
        return {
            type: types.PROFILE_STOP_FETCHING,
        }
    },

    setFetchingError: (error) => {
        return {
            type: types.PROFILE_SET_FETCHING_ERROR,
            error: true,
            payload: error,
        }
    },

    //Async
    updateUser: (user) => async (dispatch) => {
        dispatch(profileActions.startFetching())
        console.log(user)

        const userRef = await fire
            .firestore()
            .collection('users')
            .doc(user.id)
        const result = await userRef.update(user)


        dispatch(profileActions.stopFetching())
    }

    
})
