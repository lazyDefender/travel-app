import {combineReducers} from 'redux';

//import reducers
import { citiesReducer as cities } from '../redux/cities/reducer'
import { toursReducer as tours } from '../redux/tours/reducer'
import { authReducer as auth } from '../redux/auth/reducer'
import { hotelReducer as hotel } from '../redux/hotels/reducer'

export const rootReducer = combineReducers({
    // reducers
    cities,
    tours,
    auth,
    hotel,
});