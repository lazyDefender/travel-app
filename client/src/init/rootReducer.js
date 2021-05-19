import { combineReducers } from 'redux'

//import reducers
import { citiesReducer as cities } from '../redux/cities/reducer'
import { toursFilterReducer as toursFilter } from '../redux/toursFilter/reducer'    
import { toursReducer as tours } from '../redux/tours/reducer'
import { authReducer as auth } from '../redux/auth/reducer'
import { hotelReducer as hotel } from '../redux/hotels/reducer'
import { reservationReducer as reservation } from '../redux/reservation/reducer'
import { ordersReducer as orders } from '../redux/orders/reducer'
import { defaultReducer } from '../redux/default/reducer'

export const rootReducer = combineReducers({
    // reducers
    cities,
    toursFilter,
    tours,
    auth,
    hotel,
    reservation,
    orders,
    defaultReducer,
})