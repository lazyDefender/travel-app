// Api
import { api } from '../../api';
// Types
import { types } from './types';
// Fire
import fire from '../../firebase'
import { store } from '../../init/store';
import firebase from 'firebase'

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
        // console.log('signup res:',authRes)
        const { uid } = authRes.user
        const newUser = {
            firstName,
            lastName,
            authID: uid,
        }
        const userRes = await fire
            .firestore()
            .collection('users')
            .add(newUser)
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
        // console.log('signin auth res:', authRes)
        const { uid } = authRes.user
        const userRes = await fire
            .firestore()
            .collection('users')
            .where('authID', '==', uid)
            .get()
        const userDoc = userRes.docs[0]
        const userData = {
            id: userDoc.id,
            ...userDoc.data(),
        }
        dispatch(authActions.fill(userData))
        dispatch(authActions.stopFetching())
    },

    getUserDataByUID: (uid) => async (dispatch) => {
        dispatch(authActions.startFetching())
        const userRes = await fire
            .firestore()
            .collection('users')
            .where('authID', '==', uid)
            .get()
            
        const userDoc = userRes.docs[0]
        const { id } = userDoc
        const userData = {
            id,
            ...userDoc.data(),
            authID: uid,
        }
        dispatch(authActions.fill(userData))
        dispatch(authActions.stopFetching())        
    },

    signOut: () => async (dispatch) => {
        await fire.auth().signOut()
        dispatch(authActions.fill(null))
    },

    updateUser: (user) => async (dispatch) => {
        dispatch(authActions.startFetching())
        const {
            id,
            firstName,
            lastName,
        } = user
        const userRef = await fire
            .firestore()
            .collection('users')
            .doc(user.id)
        const userDoc = await userRef.get()
        const updatedUser = {
            ...userDoc.data(),
            firstName,
            lastName,
        }
        const result = await userRef.update(updatedUser)
        dispatch(authActions.fill(updatedUser))
        dispatch(authActions.stopFetching())
    },

    signInWithGoogle: () => (dispatch) => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                console.log(result)
            })
    },

    signInWithFacebook: () => (dispatch) => {
        const provider = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                console.log(result)
            })
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
