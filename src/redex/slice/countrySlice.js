import { createSlice } from "@reduxjs/toolkit";
import countries from "../../data.json"

const countriesSlice = createSlice(
    {name: "countries",
    initialState:{
        countries: countries,
        countriesByRegion: [],
        countriesBySearchBar: countries,
        countriesByRegionInSearch: [],
        country: [],
        borderCountries: [],
        borderCountriesName: []
    },
    reducers:{
        setCountries(state,action){
            state.countries = action.payload
        },
        setCountriesByRegion(state,action){
            state.countriesByRegion = state.countries.filter(c => c.region == action.payload)

        },
        searchCountry(state,action){
            state.countriesBySearchBar = state.countries.filter(c => c.name.toLowerCase().includes(action.payload))
    },
    searchCountryInRegion(state,action){
            state.countriesByRegionInSearch = state.countriesByRegion.filter(c => c.name.toLowerCase().includes(action.payload))
            if(action.payload.length == 0){
                state.countriesByRegionInSearch = []
            }
    },
    clearsearchCountryInRegion(state,action){
        action.payload == ""
    },
    setCountry(state,action){
        state.country = state.countries.filter(c => c.name == action.payload)
    },
    setBorderCountries(state,action){
        state.borderCountries = state.country[0]?.borders
    },
    setBorderCountriesName(state, action) {
            state.borderCountriesName = state.borderCountries?.map((c) => {
                const matchingCountry = state.countries.find(country => country.alpha3Code === c);
                return matchingCountry ? matchingCountry.name : null;
            })
        
    },
    clearBorderCountries(state,action){
        state.borderCountries = null
    }
    }

}
)

const countriesReducer = countriesSlice.reducer
const countriesActions = countriesSlice.actions

export {countriesActions,countriesReducer}

