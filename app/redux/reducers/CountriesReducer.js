import {
  FETCH_COUNTRIES_BEGIN,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE
} from '../actions/CountriesAction'

const initialState = {
  countries: [],
  loading: false,
  error: null
}

export default CountriesReducer = (state = initialState, action) => {
  console.log("Inside Country Reducer" + action.type)
  switch (action.type) {
    case FETCH_COUNTRIES_BEGIN:
      return {
        ... state,
        loading: true,
        error: null
      }

    case FETCH_COUNTRIES_SUCCESS:
      return {
        ... state,
        loading: false,
        countries: action.payload.countries
      }

    case FETCH_COUNTRIES_FAILURE:
      return {
        ... state,
        loading: false,
        error: action.payload.error,
        countries: []
      }

    default:
      return state
  }
} 