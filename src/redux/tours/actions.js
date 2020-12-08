// Api
import { api } from '../../api';
// Types
import { types } from './types';
// Fire
import fire from '../../firebase'

export const toursActions = Object.freeze({
    //Sync
    startFetching: () => {
        return {
            type: types.TOURS_START_FETCHING,
        }
    },

    stopFetching: () => {
        return {
            type: types.TOURS_STOP_FETCHING,
        }
    },

    fill: (payload) => {
        return {
            type: types.TOURS_FILL,
            payload,
        }
    },

    setFetchingError: (error) => {
        return {
            type: types.TOURS_SET_FETCHING_ERROR,
            error: true,
            payload: error,
        }
    },

    //Async

    fetchAsync: (filters) => async (dispatch) => {
        const {
            fromCity,
            toCity,
            datetime,
            duration,
            adultsCount,
            kidsCount,
        } = filters

        dispatch(toursActions.startFetching())
        const fromCityRef = await fire
            .firestore()
            .collection('cities')
            .doc(fromCity)
            
        const toCityRef = await fire
            .firestore()
            .collection('cities')
            .doc(toCity)

        // const orders = await fire
        //     .firestore()
        //     .collection('orders')
        //     .where('datetime', '!=', datetime)
        //     .get()

        // console.log(orders)

        const hotelsByPeopleCount = await fire
            .firestore()
            .collection('hotels')
            .where('maxAdultsCount', '>=', adultsCount)
            .where('maxKidsCount', '>=', kidsCount)
            .get()
        console.log('hotels', hotelsByPeopleCount)

        const toursResponse = await fire
            .firestore()
            .collection('tours')
            .where('fromCity', '==', fromCityRef)
            .where('toCity', '==', toCityRef)
            .where('duration', '==', duration)
            .get()
            console.log(toCityRef.doc)
        const toursDocs = toursResponse.docs
        const tours = toursDocs.map(doc => {
            return {
                id: doc.id,
                ...doc.data(),
            }
        })
        dispatch(toursActions.fill(tours))
        dispatch(toursActions.stopFetching())
    }
})
