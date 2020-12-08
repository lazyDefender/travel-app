// Api
import { api } from '../../api';
// Types
import { types } from './types';
// Fire
import fire from '../../firebase'

export const authActions = Object.freeze({
    //Sync
    startFetching: () => {
        return {
            type: types.AUTH_START_FETCHING,
        }
    },

    stopFetching: () => {
        return {
            type: types.AUTH_STOP_FETCHING,
        }
    },

    fill: (payload) => {
        return {
            type: types.AUTH_FILL,
            payload,
        }
    },

    setFetchingError: (error) => {
        return {
            type: types.AUTH_SET_FETCHING_ERROR,
            error: true,
            payload: error,
        }
    },

    //Async
    createUser: (user) => async (dispatch) => {
        dispatch(authActions.startFetching())
        const {
            firstName,
            lastName,
            email,
            password,
        } = user
        const authRes = await fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
        const { uid } = authRes.user
        const newUser = {
            firstName,
            lastName,
            userID: uid,
        }
        const userRes = await fire
            .firestore()
            .collection('users')
            .add(newUser)
        console.log('authRes',authRes)
        console.log('userRes', userRes)
        dispatch(authActions.fill(newUser))
        dispatch(authActions.stopFetching())
    },

    signIn: (user) => async (dispatch) => {
        dispatch(authActions.startFetching())
        const {
            email, 
            password,
        } = user
        const authRes = await fire
            .auth()
            .signInWithEmailAndPassword(email, password)
        console.log('signin auth res:', authRes)
        const { uid } = authRes.user
        const userRes = await fire
            .firestore()
            .collection('users')
            .where('userID', '==', uid)
            .get()
        const userDoc = userRes.docs[0]
        const userData = {
            ...userDoc.data(),
        }
        dispatch(authActions.fill(userData))
        dispatch(authActions.stopFetching())
    },

    fetchAsync: (id) => async (dispatch) => {
        // dispatch(citiesActions.startFetching())
        // const citiesResponse = await fire
        //     .firestore()
        //     .collection('cities')
        //     .get()
        // const citiesDocs = citiesResponse.docs
        // const cities = citiesDocs.map(doc => {
        //     return {
        //         id: doc.id,
        //         ...doc.data(),
        //     }
        // })
        // dispatch(citiesActions.fill(cities))
        // dispatch(citiesActions.stopFetching())
    }
})
