// Types
import { types } from './types';
// Fire
import fire from '../../firebase'
import moment from 'moment';
import axios from 'axios';

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
        const {
            adultsCount,
            kidsCount,
            datetime,
            tourId,
            userId,
        } = order

        console.log('order:', order)

        const userRef = await fire
            .firestore()
            .collection('users')
            .doc(userId)
        const tourRef = await fire
            .firestore()
            .collection('tours')
            .doc(tourId)

        const fullOrder = {
            adultsCount,
            kidsCount,
            datetime: typeof datetime.toDate === 'function' ? datetime.toDate() : datetime,
            tour: tourRef,
            user: userRef,
        }

        const ordersRes = await fire
            .firestore()
            .collection('orders')
            .add(fullOrder)
        dispatch(reservationActions.stopFetching())
    }

})
