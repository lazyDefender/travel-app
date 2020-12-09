import firebase from 'firebase'
// Api
import { api } from '../../api';
// Types
import { types } from './types';
// Fire
import fire from '../../firebase'
import moment from 'moment';
import { getPlace } from '../../global/getPlace';
import { hotelActions } from '../hotels/actions';

export const toursFilterActions = Object.freeze({
    //Sync
    startFetching: () => {
        return {
            type: types.TOURS_FILTER_START_FETCHING,
        }
    },

    stopFetching: () => {
        return {
            type: types.TOURS_FILTER_STOP_FETCHING,
        }
    },

    fill: (payload) => {
        return {
            type: types.TOURS_FILTER_FILL,
            payload,
        }
    },

    setFetchingError: (error) => {
        return {
            type: types.TOURS_FILTER_SET_FETCHING_ERROR,
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

        dispatch(toursFilterActions.startFetching())
        const fromCityRef = await fire
            .firestore()
            .collection('cities')
            .doc(fromCity)
            
        const toCityRef = await fire
            .firestore()
            .collection('cities')
            .doc(toCity)

        const toursResponse = await fire
            .firestore()
            .collection('tours')
            .where('fromCity', '==', fromCityRef)
            .where('toCity', '==', toCityRef)
            .where('duration', '==', duration)
            .get()
        const toursDocs = toursResponse.docs
        const tours = toursDocs.map(doc => {
            return {
                id: doc.id,
                ...doc.data(),
            }
        })

        const badOrders = []
        for(let toursDoc of toursDocs) {
            const datetimeMoment = moment(datetime)
            datetimeMoment.set({
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0,
            })
            const dat = datetimeMoment.toDate()
            const d = firebase.firestore.Timestamp.fromDate(dat)
            const badOrdersRes = await fire
                .firestore()
                .collection('orders')
                .where('tour', '==', toursDoc.ref)
                .where('datetime', '==', d)
                .get()
            const badOrdersDocs = badOrdersRes.docs
            badOrders.push(...badOrdersDocs.map(o => {
                return {
                    id: o.id,
                    ...o.data(),
                }
            }))
        }

        const foundToursIds = tours.map(t => t.id)
        const badToursIds = badOrders.map(o => o.tour.id)
        const toursIdsWithoutBadOnes = foundToursIds.filter(id => !badToursIds.includes(id))

        const toursWithoutBadOnes = []
        
        for(let tourId of toursIdsWithoutBadOnes) {
            const tourDoc = await fire
                .firestore()
                .collection('tours')
                .doc(tourId)
                .get()
            const tour = {
                id: tourDoc.id,
                ...tourDoc.data(),
            }
            toursWithoutBadOnes.push(tour)
        }
        
        const hotelIds = toursWithoutBadOnes.map(t => t.hotel.id)
        const hotels = []
        for(let hotelId of hotelIds) {
            const hotelDoc = await fire
            .firestore()
            .collection('hotels')
            .doc(hotelId)
            .get()
            const hotel = {
                id: hotelDoc.id,
                ...hotelDoc.data(),
            }
            hotels.push(hotel)
        }

        const hotelsIdsFilteredByPeopleCount = 
            hotels
                .filter(h => h.maxAdultsCount >= adultsCount && h.maxKidsCount >= kidsCount)
                .map(h => h.id)

        const finalTours = toursWithoutBadOnes.filter(t => hotelsIdsFilteredByPeopleCount.includes(t.hotel.id))

        

        const finalToursWithHotels = []
        for(let t of finalTours) {
            const {id} = t.hotel
            const hotelDoc = await fire
                .firestore()
                .collection('hotels')
                .doc(id)
                .get()
            



            const h = {
                ...t,
                hotel: {
                    ...hotelDoc.data(),
                    id: hotelDoc.id,
                    // ...data.candidates[0],
                }
            } 

            const p = await getPlace(h.hotel.name)
            console.log(p)
            finalToursWithHotels.push({
                ...h,
                hotel: {
                    ...h.hotel,
                    ...p.candidates[0],
                }
            })
        }

        // console.log('finalToursWithHotels', finalToursWithHotels)

        dispatch(toursFilterActions.fill(finalToursWithHotels))
        dispatch(toursFilterActions.stopFetching())
    },
    fetchByHotel: (id) => async (dispatch) => {
        dispatch(toursFilterActions.startFetching())
        const hotel = await fire
            .firestore()
            .collection('hotels')
            .doc(id)
            .get()


        const toursRes = await fire
            .firestore()
            .collection('tours')
            .where('hotel', '==', hotel.ref)
            .get()
        
        
        const toursDocs = toursRes.docs
        const tours = []
        for(const t of toursDocs) {
            tours.push({
                id: t.id,
                ...t.data(),
            })
        }

        console.log('tours',tours)

        dispatch(toursFilterActions.fill(tours))
        dispatch(toursFilterActions.stopFetching())
    }

    
})
