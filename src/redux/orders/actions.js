// Types
import { types } from './types';
// Fire
import fire from '../../firebase'
import { getPlace } from '../../global/getPlace';

export const ordersActions = Object.freeze({
    //Sync
    startFetching: () => {
        return {
            type: types.ORDERS_START_FETCHING,
        }
    },

    stopFetching: () => {
        return {
            type: types.ORDERS_STOP_FETCHING,
        }
    },

    fill: (payload) => {
        return {
            type: types.ORDERS_FILL,
            payload,
        }
    },

    setFetchingError: (error) => {
        return {
            type: types.ORDERS_SET_FETCHING_ERROR,
            error: true,
            payload: error,
        }
    },

    //Async
    fetchByUser: (id) => async (dispatch) => {
        dispatch(ordersActions.startFetching())
        const user = await fire
            .firestore()
            .collection('users')
            .doc(id)
            .get()


        const ordersRes = await fire
            .firestore()
            .collection('orders')
            .where('user', '==', user.ref)
            .get()
        
        
        const ordersDocs = ordersRes.docs
        const orders = []
        for(const o of ordersDocs) {
            const order = {
                id: o.id,
                ...o.data(),
                // ...tour,
            }
            
            const tourRes = await fire
                .firestore()
                .collection('tours')
                .doc(o.data().tour.id)
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

            // const place = await getPlace(hotel.name)
            const result = {
                ...order,
                tour,
                hotel,
                // ...place.candidates[0],
            }

            orders.push(result)
        }

        console.log('orders',orders)

        

        dispatch(ordersActions.fill(orders))
        dispatch(ordersActions.stopFetching())
    }

    
})
