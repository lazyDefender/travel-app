import firebase from 'firebase'
// Api
import { api } from '../../api';
// Types
import { types } from './types';
// Fire
import fire from '../../firebase'
import moment from 'moment';

export const hotelsActions = Object.freeze({
    //Sync
    startFetching: () => {
        return {
            type: types.HOTELS_START_FETCHING,
        }
    },

    stopFetching: () => {
        return {
            type: types.HOTELS_STOP_FETCHING,
        }
    },

    fill: (payload) => {
        return {
            type: types.HOTELS_FILL,
            payload,
        }
    },

    // add: (payload) => {
    //     return {
    //         type: types.HOTELS_ADD,
    //         payload,
    //     }
    // },

    setFetchingError: (error) => {
        return {
            type: types.HOTELS_SET_FETCHING_ERROR,
            error: true,
            payload: error,
        }
    },

    //Async
    fetchById: (id) => async (dispatch) => {
        dispatch(hotelsActions.startFetching())
        const hotelDoc = await fire
            .firestore()
            .collection('hotels')
            .doc(id)
            .get()
        const hotel = {
            id: hotelDoc.id,
            ...hotelDoc,
        }
        console.log(hotel)
    },

    fetchHotels: (hotelRefs) => async (dispatch) => {
        dispatch(hotelsActions.startFetching())
        const hotels = []
        for(let ref of hotelRefs) {
            const {id} = ref
            const hotelDoc = await fire
                .firestore()
                .collection('hotels')
                .doc(id)
                .get()
            const hotel = {
                id: hotelDoc.id,
                ...hotelDoc,
            }
            hotels.push(hotel)
        }
        dispatch(hotelsActions.fill(hotels))
        dispatch(hotelsActions.stopFetching())
    }
})
