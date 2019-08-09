import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ColorReducer from '../reducers/ColorReducer'
import CountriesReducer from '../reducers/CountriesReducer'

const rootReducer = combineReducers({
  color: ColorReducer,
  country: CountriesReducer
})

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk))
}

export default configureStore