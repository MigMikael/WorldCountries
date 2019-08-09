export const FETCH_COUNTRIES_BEGIN = 'FETCH_COUNTRIES_BEGIN'
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE'

export const fetchCountriesBegin = () => ({
  type: FETCH_COUNTRIES_BEGIN
})

export const fetchCountriesSuccess = (countries) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: { countries }
})

export const fetchCountriesFailure = () => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload: { error }
})

export function fetchCountries() {
  return dispatch => {
    dispatch(fetchCountriesBegin())
    return fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(json => {
        console.log("Inside Country Action")
        console.log(json)
        dispatch(fetchCountriesSuccess(json))
      })
      .catch(error => dispatch(fetchCountriesFailure(error)))
  }
}