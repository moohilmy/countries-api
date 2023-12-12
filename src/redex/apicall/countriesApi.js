import { countriesActions } from "../slice/countrySlice.js"
export function getCountriesbyRegion(region){
    return async (dispatch) => {
        dispatch(countriesActions.setCountriesByRegion(region))
    }
}

export function setSearchBarValue(value){
    return async (dispatch)=>{
        dispatch(countriesActions.setSearchBar(value))
    }
}
export function searchCountryBySearchBar(){
    return async (dispatch)=>{
        dispatch(countriesActions.searchCountry())
    }
}

export function searchCountryBySearchBarInRegion(){
    return async (dispatch)=>{
        dispatch(countriesActions.searchCountryInRegion())
    }
}

export function getCountrybyname(name){
    return async (dispatch) => {
        dispatch(countriesActions.setCountry(name))
    }
}
export function getCountriesBorder(){
    return async (dispatch) => {
        dispatch(countriesActions.setBorderCountries())
    }
}
export function getCountriesBorderName(){
    return async (dispatch) => {
            dispatch(countriesActions.setBorderCountriesName())
            dispatch(countriesActions.clearBorderCountries())
    }
}
export function clearSearchBarInRegion(){
    return async (dispatch) => {
            dispatch(countriesActions.clearSearchBarInRegion())
    }
}
export function clearSearchBarValue(){
    return async (dispatch) => {
            dispatch(countriesActions.clearSearchBarValue())
    }
}

