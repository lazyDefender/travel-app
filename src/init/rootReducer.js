import {combineReducers} from 'redux';

//import reducers
import { citiesReducer as cities } from '../redux/cities/reducer'
import { toursReducer as tours } from '../redux/tours/reducer'

export const rootReducer = combineReducers({
    // reducers
    cities,
    tours,
});