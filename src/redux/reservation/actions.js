import firebase from 'firebase'
// Api
import { api } from '../../api';
// Types
import { types } from './types';
// Fire
import fire from '../../firebase'
import moment from 'moment';

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
        const tourRes = await fire
            .firestore()
            .collection('tours')
            .doc(tourId)
            .get()
        const tour = {
            id: tourRes.id,
            ...tourRes.data(),
        }

        const hotelRes = await fire
            .firestore()
            .collection('hotels')
            .doc(tour.hotel.id)
            .get()
        const hotel = {
            id: hotelRes.id,
            ...hotelRes.data(),
        }
        const cityRes = await fire
            .firestore()
            .collection('cities')
            .doc(tour.toCity.id)
            .get()
        
        const toCity = {
            id: cityRes.id,
            ...cityRes.data(),
        }

        const bookedDaysRes = await fire
            .firestore()
            .collection('orders')
            .where('tour', '==', tourRes.ref)
            .get()
        const bookedDaysDocs = bookedDaysRes.docs
        const bookedDays = bookedDaysDocs.map(item => {
            const { datetime } = item.data()
            const jsDate = datetime.toDate()
            return  moment(jsDate)
            
        })

        const result = {
            ...tour,
            hotel,
            toCity,
            bookedDays,
        }

        dispatch(reservationActions.fill(result))
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
            datetime,
            tour: tourRef,
            user: userRef,
        }

        const ordersRes = await fire
            .firestore()
            .collection('orders')
            .add(fullOrder)
        dispatch(reservationActions.startFetching())
    }

})
