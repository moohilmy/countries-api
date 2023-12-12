import "./home.css"
import {themeConatext}  from "../../App.jsx";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCountryBySearchBar,searchCountryBySearchBarInRegion,setSearchBarValue } from "../../redex/apicall/countriesApi.js";

const SearchBar = () => {
    const {theme} = useContext(themeConatext)
    const dispath = useDispatch()
    const {serchBarValue} = useSelector(stata => stata.countries)
const searchHandler = (value)=>{
    dispath(setSearchBarValue(value))
    dispath(searchCountryBySearchBarInRegion())
    dispath(searchCountryBySearchBar())

}
    return ( 
    <div className="searchInt">
        <i className="bi bi-search"></i> 
        <input className={`${theme}-element search-bar`}
        type="text"
        value={serchBarValue}
        placeholder="Search for a country..."
        onChange={(e)=>{
            searchHandler(e.target.value)
        }}/>
    </div> 
    );
}

export default SearchBar;