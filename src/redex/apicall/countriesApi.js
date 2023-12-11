import { countriesActions } from "../slice/countrySlice.js"
export function getCountriesbyRegion(region){
    return async (dispatch) => {
        dispatch(countriesActions.setCountriesByRegion(region))
    }
}

export function searchCountryBySearchBar(value){
    return async (dispatch)=>{
        dispatch(countriesActions.searchCountry(value))
    }
}

export function searchCountryBySearchBarInRegion(value){
    return async (dispatch)=>{
        dispatch(countriesActions.searchCountryInRegion(value))
    }
}


export function clearsearchBar(){
    return async (dispatch)=>{
        dispatch(countriesActions.clearsearchCountryInRegion())
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
