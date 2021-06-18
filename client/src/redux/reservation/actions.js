// Types
import { types } from './types';
// Fire
import firebase from 'firebase'
import moment from 'moment';
import axios from 'axios'

export const reservationActions = Object.freeze({
    //Sync
    startFetching: () => {
        return {
            type: types.TOUR_START_FETCHING,
        }
    },

    stopFetching: () => {
        return {
            type: types.TOUR_STOP_FETCHING,
        }
    },

    fill: (payload) => {
        return {
            type: types.TOUR_FILL,
            payload,
        }
    },

    setFetchingError: (error) => {
        return {
            type: types.TOUR_SET_FETCHING_ERROR,
            error: true,
            payload: error,
        }
    },

    //Async
    fetchTour: (tourId) => async (dispatch) => {
        dispatch(reservationActions.startFetching())

        const tourUrl = `${process.env.REACT_APP_API_URL}/tours/${tourId}`
        const { data: tour } = await axios.get(tourUrl)

        dispatch(reservationActions.fill(tour))
        dispatch(reservationActions.stopFetching())
    },

    saveOrderAsync: (order) => async (dispatch) => {
        dispatch(reservationActions.startFetching())

        const token = await firebase
            .auth()
            .currentUser
            .getIdToken()
        
        const orderUrl = `${process.env.REACT_APP_API_URL}/orders`
        const { data: createdOrder } = await axios.post(orderUrl, order, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })

        dispatch(reservationActions.stopFetching())
    }

})
