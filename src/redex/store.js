import {configureStore} from "@reduxjs/toolkit"

import { countriesReducer } from "./slice/countrySlice.js";


const store = configureStore({
    reducer: {
        countries: countriesReducer
    }
})


export default store