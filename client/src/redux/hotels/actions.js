import firebase from 'firebase'
// Api
import { api } from '../../api';
// Types
import { types } from './types';
// Fire
import fire from '../../firebase'
import moment from 'moment';
import { getPlace } from '../../global/getPlace';

export const hotelActions = Object.freeze({
    //Sync
    startFetching: () => {
        return {
            type: types.HOTEL_START_FETCHING,
        }
    },

    stopFetching: () => {
        return {
            type: types.HOTEL_STOP_FETCHING,
        }
    },

    fill: (payload) => {
        return {
            type: types.HOTEL_FILL,
            payload,
        }
    },


    setFetchingError: (error) => {
        return {
            type: types.HOTEL_SET_FETCHING_ERROR,
            error: true,
            payload: error,
        }
    },

    //Async
    fetchById: (id) => async (dispatch) => {
        dispatch(hotelActions.startFetching())
        const hotelDoc = await fire
            .firestore()
            .collection('hotels')
            .doc(id)
            .get()


        const hotel = {
            id: hotelDoc.id,
            ...hotelDoc.data(),
        }

        // const place = await getPlace(hotel.name)
        const result = {
            ...hotel,
            // ...place.candidates[0],
        }
        dispatch(hotelActions.fill(result))
        dispatch(hotelActions.stopFetching())
    },
})
