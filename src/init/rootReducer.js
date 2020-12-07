import {combineReducers} from 'redux';

//import reducers
import { citiesReducer as cities } from '../redux/cities/reducer'

export const rootReducer = combineReducers({
    // reducers
    cities,
});