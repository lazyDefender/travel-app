import { createStore, applyMiddleware } from 'redux'

import { rootReducer } from './rootReducer'
import {
  middleware,
  composeEnhancers
} from './middleware'
  
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
)
  