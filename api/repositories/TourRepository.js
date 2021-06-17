const firebase = require('firebase-admin');
const collections = require('../collections');

class TourRepository {
    static async getById(id) {
        const tourRes = await firebase
            .firestore()
            .collection(collections.TOURS)
            .doc(id)
            .get()
        const tour = {
            id,
            ...tourRes.data(),
            city: null,
        }

        const hotelRes = await firebase
            .firestore()
            .collection(collections.HOTELS)
            .doc(tour.hotel.id)
            .get()
        const hotel = {
            id: hotelRes.id,
            ...hotelRes.data(),
            city: null,
        }
        const cityRes = await firebase
            .firestore()
            .collection(collections.CITIES)
            .doc(tour.toCity.id)
            .get()
        
        const toCity = {
            id: cityRes.id,
            ...cityRes.data(),
        }

        const bookedDaysRes = await firebase
            .firestore()
            .collection(collections.ORDERS)
            .where('tour', '==', tourRes.ref)
            .get()
        const bookedDaysDocs = bookedDaysRes.docs
        const bookedDays = bookedDaysDocs.map(item => {
            const { datetime } = item.data()
            const jsDate = datetime.toDate()
            return jsDate
            
        })

        const result = {
            ...tour,
            hotel,
            toCity,
            bookedDays,
        }
        return result;
    }
}

module.exports = TourRepository;